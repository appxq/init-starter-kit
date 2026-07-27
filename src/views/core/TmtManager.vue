<template>
	<el-scrollbar class="mt-1" :height="`${options.scrollerHeight}px`">
		<div class="m-5">
			<el-row :gutter="20">
				<!-- ── Current release ── -->
				<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
					<el-card shadow="never" class="tmt-card">
						<template #header>
							<div class="tmt-card__header">
								<span>Current TMT Release</span>
								<el-button link type="primary" icon="Refresh" :loading="options.loadingRelease" @click="loadRelease">Refresh</el-button>
							</div>
						</template>

						<el-descriptions v-if="options.currentRelease" :column="1" border size="small">
							<el-descriptions-item label="Release date">{{ fmtReleaseDate(options.currentRelease.release_date) }}</el-descriptions-item>
							<el-descriptions-item label="File">{{ options.currentRelease.file_name }}</el-descriptions-item>
							<el-descriptions-item label="Uploaded by">{{ options.currentRelease.uploaded_by || '-' }}</el-descriptions-item>
							<el-descriptions-item label="Applied at">{{ fmtDateTime(options.currentRelease.applied_at) }}</el-descriptions-item>
							<el-descriptions-item label="Trade">{{ fmtNum(options.currentRelease.counts?.trade) }}</el-descriptions-item>
							<el-descriptions-item label="Generic">{{ fmtNum(options.currentRelease.counts?.generic) }}</el-descriptions-item>
							<el-descriptions-item label="VTM / Subs">{{ fmtNum(options.currentRelease.counts?.vtm) }} / {{ fmtNum(options.currentRelease.counts?.subs) }}</el-descriptions-item>
						</el-descriptions>

						<el-empty v-else description="No release yet" :image-size="80" />
					</el-card>
				</el-col>

				<!-- ── Upload + preview ── -->
				<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
					<el-card shadow="never" class="tmt-card">
						<template #header>
							<div class="tmt-card__header"><span>Upload TMTRF</span></div>
						</template>

						<el-upload
							ref="uploadRef"
							drag
							:auto-upload="false"
							:limit="1"
							accept=".zip"
							:on-change="handleChange"
							:on-remove="handleRemove"
							:on-exceed="handleExceed">
							<el-icon class="el-icon--upload"><upload-filled /></el-icon>
							<div class="el-upload__text">Drop TMTRF <em>.zip</em> here or <em>click to select</em></div>
							<template #tip>
								<div class="el-upload__tip">Monthly TMTRF release file. Limit 1 file — a new file replaces the current selection.</div>
							</template>
						</el-upload>

						<div class="tmt-actions">
							<el-button type="primary" icon="View" :disabled="!options.rawFile" :loading="options.loadingPreview" @click="doPreview">
								Preview changes
							</el-button>
						</div>

						<!-- preview result -->
						<template v-if="options.preview">
							<el-divider content-position="left">Preview — Release {{ fmtReleaseDate(options.preview.release_date) }}</el-divider>

							<el-row :gutter="16" class="tmt-stats">
								<el-col :span="8">
									<el-statistic title="Added" :value="options.preview.diff?.added ?? 0" value-style="color: var(--el-color-success)" />
								</el-col>
								<el-col :span="8">
									<el-statistic title="Updated" :value="options.preview.diff?.updated ?? 0" value-style="color: var(--el-color-warning)" />
								</el-col>
								<el-col :span="8">
									<el-statistic title="Invalidated (dropped)" :value="options.preview.diff?.invalidated ?? 0" value-style="color: var(--el-color-danger)" />
								</el-col>
							</el-row>

							<el-descriptions :column="4" border size="small" class="tmt-counts">
								<el-descriptions-item label="File">{{ options.preview.file_name }}</el-descriptions-item>
								<el-descriptions-item label="Trade">{{ fmtNum(options.preview.counts?.trade) }}</el-descriptions-item>
								<el-descriptions-item label="Generic">{{ fmtNum(options.preview.counts?.generic) }}</el-descriptions-item>
								<el-descriptions-item label="Unchanged">{{ fmtNum(options.preview.diff?.unchanged) }}</el-descriptions-item>
							</el-descriptions>

							<!-- guard: trade count ลดผิดปกติเทียบ release ปัจจุบัน -->
							<el-alert
								v-if="dropWarn"
								type="warning"
								show-icon
								:closable="false"
								class="tmt-alert"
								title="Unusual drop in trade count"
								:description="`New trade count (${fmtNum(options.preview.counts?.trade)}) is ${dropPct}% lower than the current release (${fmtNum(options.currentRelease?.counts?.trade)}). Verify the file is the correct monthly release before applying.`" />

							<div class="tmt-actions">
								<el-button type="success" icon="Check" :loading="options.loadingApply" @click="doApply">
									Confirm &amp; Apply
								</el-button>
							</div>
						</template>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</el-scrollbar>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { ElMessage, ElMessageBox, genFileId, type UploadInstance, type UploadProps, type UploadRawFile } from 'element-plus';
import axios from 'axios';
import { API_URL } from '~/config/AppConfig';
import { useConnectStateStore } from '~/stores/ConnectState';
import { onWindowResizeHandler } from '~/utils/Util';

const userState = useConnectStateStore();
const uploadRef = ref<UploadInstance>();

const options = reactive({
	scrollerHeight: 0,
	rawFile: null as File | null,
	preview: null as any,
	currentRelease: null as any,
	loadingRelease: false,
	loadingPreview: false,
	loadingApply: false,
});

const authHeader = () => ({ Authorization: `Bearer ${userState.user?.token}` });

const catchApi = (error: any) => {
	if (error.response?.data?.message) ElMessage.warning(error.response.data.message);
	else ElMessage.warning(error.message);
};

// ── guard: trade count drop เทียบ release ปัจจุบัน ──
const dropPct = computed(() => {
	const cur = options.currentRelease?.counts?.trade;
	const next = options.preview?.counts?.trade;
	if (!cur || next == null) return 0;
	return Math.round((1 - next / cur) * 100);
});
const dropWarn = computed(() => dropPct.value >= 10);

// ── file selection (no auto-upload — POST เองทั้ง preview/apply) ──
const isZip = (raw?: UploadRawFile) => !!raw && (raw.type === 'application/zip' || /\.zip$/i.test(raw.name));

const handleChange: UploadProps['onChange'] = (uploadFile) => {
	if (!isZip(uploadFile.raw)) {
		ElMessage.error('File must be a .zip');
		uploadRef.value?.clearFiles();
		options.rawFile = null;
		return;
	}
	options.rawFile = uploadFile.raw ?? null;
	options.preview = null; // reset preview เมื่อเปลี่ยนไฟล์
};

const handleRemove: UploadProps['onRemove'] = () => {
	options.rawFile = null;
	options.preview = null;
};

const handleExceed: UploadProps['onExceed'] = (files) => {
	uploadRef.value!.clearFiles();
	const file = files[0] as UploadRawFile;
	file.uid = genFileId();
	uploadRef.value!.handleStart(file); // → trigger on-change → handleChange
};

// ── step 2: preview (dry-run) ──
const doPreview = async () => {
	if (!options.rawFile) return;
	options.loadingPreview = true;
	try {
		const fd = new FormData();
		fd.append('file', options.rawFile, options.rawFile.name);
		const res = await axios.post(`${API_URL}/tmt/upload`, fd, {
			headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' },
		});
		options.preview = res.data;
	} catch (error) {
		catchApi(error);
	} finally {
		options.loadingPreview = false;
	}
};

// ── step 3: apply (commit — ส่ง zip เดิมซ้ำ) ──
const doApply = async () => {
	if (!options.rawFile || !options.preview) return;
	try {
		await ElMessageBox.confirm(
			dropWarn.value
				? `Trade count drops ${dropPct.value}% vs the current release. Apply anyway?`
				: 'Replace the current TMT master with this release?',
			'Confirm apply',
			{ confirmButtonText: 'Apply', cancelButtonText: 'Cancel', type: dropWarn.value ? 'warning' : 'success' },
		);
	} catch {
		return; // cancelled
	}

	options.loadingApply = true;
	try {
		const fd = new FormData();
		fd.append('file', options.rawFile, options.rawFile.name);
		const res = await axios.post(`${API_URL}/tmt/apply`, fd, {
			headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' },
		});
		const d = res.data?.diff ?? {};
		ElMessage.success(`Applied — added ${d.added ?? 0}, updated ${d.updated ?? 0}, invalidated ${d.invalidated ?? 0}`);
		// reset + refresh
		options.rawFile = null;
		options.preview = null;
		uploadRef.value?.clearFiles();
		await loadRelease();
	} catch (error) {
		catchApi(error);
	} finally {
		options.loadingApply = false;
	}
};

// ── current release ──
const loadRelease = async () => {
	options.loadingRelease = true;
	try {
		const res = await axios.get(`${API_URL}/tmt/release`, { headers: authHeader() });
		options.currentRelease = res.data?.release ?? null;
	} catch (error) {
		catchApi(error);
	} finally {
		options.loadingRelease = false;
	}
};

// ── formatters ──
const fmtNum = (n?: number) => (n == null ? '-' : n.toLocaleString('en-US'));
const fmtReleaseDate = (d?: string | null) => (d && /^\d{8}$/.test(d) ? `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}` : d || '-');
const fmtDateTime = (d?: string | null) => (d ? new Date(d).toLocaleString('en-US') : '-');

let resizeCleanup: (() => void) | undefined;
onMounted(() => {
	options.scrollerHeight = window.innerHeight - 60;
	resizeCleanup = onWindowResizeHandler(async () => {
		await nextTick(() => {
			options.scrollerHeight = window.innerHeight - 60;
		});
	});
	loadRelease();
});
onUnmounted(() => resizeCleanup?.());
</script>

<style scoped>
.tmt-card {
	margin-bottom: 20px;
}
.tmt-card__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;
}
.tmt-actions {
	margin-top: 16px;
}
.tmt-stats {
	margin: 8px 0 16px;
	text-align: center;
}
.tmt-counts {
	margin-top: 8px;
}
.tmt-alert {
	margin-top: 16px;
}
</style>
