<template>
	<div id="sd-loaging-box" style="height: 100%; width: 100%"></div>
</template>
<script lang="ts">
import { ElLoading } from 'element-plus';
import { defineComponent } from 'vue';
import { useAppStateStore } from '~/stores/AppState';

export default defineComponent({
	name: 'LoadingContent',
	data() {
		return {
			loadingInstance: null as any,
		};
	},
	mounted() {
		const appSate = useAppStateStore();
		let options = {
			text: 'Loading...',
			background: appSate.isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.4)',
			target: '#sd-loaging-box',
		};
		this.loadingInstance = ElLoading.service(options);
	},
	unmounted() {
		// this.loadingInstance.close();
	},
});
</script>
