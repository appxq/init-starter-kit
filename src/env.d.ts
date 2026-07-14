/// <reference types="vite/client" />
/// <reference types="vite-plugin-svg-icons/client" />

interface ImportMetaEnv {
	readonly VITE_PUBLIC_KEY: string;
	readonly VITE_SERVER_HOST: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// onscan.js ไม่มี type declaration (UMD lib) — ประกาศ default export เป็น any
declare module 'onscan.js';
