import { defineConfig, loadEnv, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { existsSync, readFileSync, statSync } from 'fs';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from 'rollup-plugin-visualizer';

import Unocss from 'unocss/vite';
import { presetAttributify, presetIcons, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss';
// https://vitejs.dev/config/
import { nodePolyfills } from 'vite-plugin-node-polyfills';

/**
 * แทนค่า placeholder __VITE_SERVER_HOST__ ใน dist/site-config.js ตอน build
 * ด้วยค่า VITE_SERVER_HOST (จาก .env หรือ build env ของ Coolify)
 * site-config.js เป็นไฟล์ static ที่ browser โหลดตรง ๆ — inject ได้แค่ตอน build เท่านั้น
 */
function siteConfigHostPlugin(serverHost: string): Plugin {
	return {
		name: 'inject-site-config-host',
		apply: 'build',
		// emit เป็น output asset — vite เขียน dist/site-config.js เอง (ไม่พึ่ง disk/public-copy timing)
		// Vite 7.3+ รัน closeBundle ก่อน flush ไฟล์ลง disk → เขียน dist/ ตรง ๆ ไม่ได้ (ENOENT)
		// emitFile ยังทำให้ asset นี้ชนะ public/site-config.js ที่ vite copy มา (ชื่อชนกัน → generated ชนะ)
		generateBundle() {
			const src = resolve(__dirname, 'public/site-config.js');
			const content = readFileSync(src, 'utf-8').replace(/__VITE_SERVER_HOST__/g, serverHost);
			this.emitFile({ type: 'asset', fileName: 'site-config.js', source: content });
		},
	};
}

// ── sd-render ตัว local (ถ้ามี) ─────────────────────────────────────────────
// ตัดขั้นตอน "publish npm → npm i" ออกจาก dev loop: แก้ initcraft → npm run lib → รีเฟรชที่นี่จบ
// (`npm run lib` ของ initcraft คัด dist-lib มาลง vendor/ ให้เองตอนท้าย — ดู postbuild-lib.ts)
//
// 🔴 ต้องวางไว้ "ในโปรเจกต์นี้" ไม่ใช่ alias ข้ามไป ../initcraft/dist-lib
//    node resolution เดินหา node_modules จากตำแหน่งไฟล์ ⇒ ชี้ข้าม repo แล้ว element-plus/tiptap
//    จะถูกดึงจาก initcraft/node_modules แทน (เจอจริง: sass พังที่ theme-chalk/src/card.scss)
// 🔴 vendor/ อยู่นอก node_modules ⇒ `npm i` ไม่ลบทิ้ง
//
// auto-detect: ไม่มีโฟลเดอร์ = ใช้ sd-render จาก registry ตามเดิม
//   ⇒ Docker build (ไม่มี vendor/ เพราะ .gitignore) ทำงานเหมือนเดิมทุกประการ
// SD_RENDER_LOCAL=0 = บังคับใช้ตัวจาก registry (เทียบก่อน deploy ว่าที่ publish ไว้ใช้ได้จริง)
const LOCAL_LIB_DIR = resolve(__dirname, 'vendor/sd-render');
const LOCAL_LIB_ENTRY = resolve(LOCAL_LIB_DIR, 'sd-render.es.js');
const LOCAL_LIB_CSS = resolve(LOCAL_LIB_DIR, 'sd-render.style.css');
const useLocalLib = process.env.SD_RENDER_LOCAL !== '0' && existsSync(LOCAL_LIB_ENTRY) && existsSync(LOCAL_LIB_CSS);

// บอกทุกครั้งว่ากำลังใช้ตัวไหน + build เมื่อไหร่ — ไม่งั้น vendor เก่าค้างแล้วนั่งงงว่าทำไมแก้แล้วไม่เปลี่ยน
if (useLocalLib) {
	const built = statSync(LOCAL_LIB_ENTRY).mtime.toLocaleString('th-TH');
	console.log(`\x1b[36m[sd-render]\x1b[0m ใช้ lib จาก vendor/sd-render (build เมื่อ ${built}) — SD_RENDER_LOCAL=0 เพื่อกลับไปใช้ของ registry`);
} else if (process.env.SD_RENDER_LOCAL === '0') {
	console.log('\x1b[33m[sd-render]\x1b[0m บังคับใช้ตัวจาก node_modules (registry)');
}

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'VITE_');
	// .env (local/Vercel) → loadEnv; build env (Coolify/Docker) → process.env
	const serverHost = env.VITE_SERVER_HOST || process.env.VITE_SERVER_HOST || '';

	return {
	resolve: {
		// array form ไม่ใช่ object: ต้องคุมลำดับให้ 'sd-render/style.css' ถูกจับก่อน 'sd-render'
		// (object alias จับแบบ prefix → 'sd-render' จะกิน 'sd-render/style.css' ไปด้วยแล้วได้ path เพี้ยน)
		alias: [
			...(useLocalLib
				? [
						{ find: /^sd-render\/style\.css$/, replacement: LOCAL_LIB_CSS },
						{ find: /^sd-render$/, replacement: LOCAL_LIB_ENTRY },
					]
				: []),
			{ find: '~', replacement: resolve(__dirname, 'src') },
			{ find: 'process', replacement: 'process/browser' },
			{ find: 'stream', replacement: 'stream-browserify' },
			{ find: 'zlib', replacement: 'browserify-zlib' },
			{ find: 'util', replacement: 'util' },
		],
		extensions: ['.js', '.vue', '.json', '.ts', 'jsx'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "~/styles/element/index.scss" as *;`,
				silenceDeprecations: ['legacy-js-api'],
			},
		},
	},
	optimizeDeps: {
		exclude: ['XLSX', 'docx', 'dompurify'],
	},
	plugins: [
		siteConfigHostPlugin(serverHost),
		vue(),
		// Icons({
		//   // experimental
		//   autoInstall: true,
		// }),
		visualizer({ open: true }),
		vueJsx({
			// options are passed on to @vue/babel-plugin-jsx
		}),
		nodePolyfills({
			// Enable specific polyfills as needed
			globals: {
				Buffer: true,
				global: true,
				process: true,
			},
		}),
		createSvgIconsPlugin({
			// Specify the icon folder to be cached
			iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
			// Specify symbolId format
			symbolId: 'icon-[dir]-[name]',
		}),
		Components({
			// allow auto load markdown components under `./src/components/`
			extensions: ['vue', 'md'],
			// allow auto import and register components used in markdown
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [
				ElementPlusResolver({
					importStyle: 'sass',
				}),
			],
			dts: 'src/components.d.ts',
		}),
		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		Unocss({
			presets: [
				presetWind3(),
				presetAttributify(),
				presetIcons({
					scale: 1.2,
					warn: true,
				}),
			],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			safelist: ['mb-0.5', 'ml-0.3', 'mr-1', 'mb-1', 'mb-2', 'mt-3', 'ml-1', 'ml-2', 'text-3', 'text-4', 'text-5', 'text-6', 'text-7'],
		}),
	],
	build: {
		target: ['es2022', 'chrome100', 'safari15'],
		chunkSizeWarningLimit: 2000,
		//minify: false,
		// commonjsOptions: {
		//   exclude: [
		//     'dist/sdform.umd.js'
		//   ],
		//   include: []
		//   //requireReturnsDefault: true
		// },
		rollupOptions: {
			plugins: [],
			input: {
				main: resolve(__dirname, 'index.html'),
			},

			output: {
				manualChunks(id: string) {
					// vue SFC export-helper = leaf chunk (ไม่มี dep) กัน TDZ จาก circular init
					if (id.includes('plugin-vue:export-helper')) return 'vue-export-helper';

					// ajv + deps ทั้งหมดต้องอยู่ chunk เดียวกัน — vanilla-jsoneditor import ajv แบบ external
					// CJS deps (json-schema-traverse, fast-uri, fast-deep-equal, require-from-string) ถ้าตกใน vendor
					// แล้ว ajv chunk เรียก require* ข้าม chunk → CJS exports object ยัง undefined → crash
					if (
						id.includes('/ajv/') ||
						id.includes('/ajv-formats/') ||
						id.includes('/json-schema-traverse/') ||
						id.includes('/fast-uri/') ||
						id.includes('/fast-deep-equal/') ||
						id.includes('/require-from-string/')
					) return 'ajv';

					if (id.includes('node_modules')) {
						const parts = id.split('node_modules/')[1]?.split('/');

						if (!!parts && parts.length > 0 && !!parts[0]) {
							const pkg = parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
							// แยกเฉพาะ lib ใหญ่ ๆ ที่มีผลจริง
							if (
								[
									// 'dayjs',
									'ace-builds',
									// 'axios',
									'xlsx',
									'chart.js',
									'pdfmake',
									'@vue-flow/core',
									'docx',
									// 'dompurify',
									// 'html-to-pdfmake',
									// 'json-editor-vue',
									// 'vuedraggable',
									// 'vue-simple-acl',
									'sass',
									'slugify',
									'fs-extra',
									'fast-glob',
									// 'dagre',
									// 'crypto-ts',
									'vanilla-jsoneditor',
									'highlight.js',
									// 'lodash',
								].includes(pkg)
							)
								return pkg;

							if (id.includes('element-plus')) return 'element-plus';

							if (pkg === 'vue' || pkg === 'vue-router' || pkg === 'pinia' || id.includes('vue')) return 'vue-core';
							//@tiptap
							if (pkg.search('@tiptap') !== -1) return 'tiptap';

							if (id.includes('codemirror')) {
								return 'codemirror';
							}

							if (id.includes('prosemirror')) {
								return 'prosemirror';
							}

							if (id.includes('apexcharts')) {
								return 'apexcharts';
							}

							if (id.includes('sd-render')) {
								return 'sd-render';
							}

							return 'vendor';
						}

						return;
					} else {
						if (id.includes('font/')) {
							return 'font';
						}

						if (id.includes('icons/') || id.includes('svg-icons-register')) {
							return 'icons';
						}

						// if (id.includes('user/')) {
						// 	return 'sd-user';
						// }

						if (
							id.includes('core/') ||
							id.includes('user/') ||
							id.includes('sdform/') ||
							id.includes('modules/') ||
							id.includes('custom-widget') ||
							id.includes('types') ||
							id.includes('config') ||
							id.includes('core') ||
							id.includes('routers') ||
							id.includes('stores') ||
							id.includes('utils') ||
							id.includes('layouts')
						) {
							return 'sd-core';
						}

						return;
					}
				},
			},
		},
		outDir: 'dist',
	},
	};
});
