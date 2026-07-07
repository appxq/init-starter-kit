<template>
	<SdAppViewerAsync v-if="!!appId" :custom-components="components" :user-state="userState" />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, shallowRef } from 'vue';
import { useRoute } from 'vue-router';
import CustomComponents from '~/views/custom-widget/index';
import { useConnectStateStore } from '~/stores/ConnectState';
// import { SdAppViewer } from 'sd-render';
import LoadingContent from '~/components/layouts/LoadingContent.vue';
import EmptyContent from '~/components/layouts/EmptyContent.vue';

const SdAppViewerAsync = defineAsyncComponent({
	loader: () => import('sd-render').then((m) => m.SdAppViewer),
	loadingComponent: LoadingContent,
	delay: 100,
	errorComponent: EmptyContent,
	timeout: 10000,
});

export default defineComponent({
	name: 'AppViewer',
	components: { SdAppViewerAsync, LoadingContent, EmptyContent },
	props: {},
	data() {
		return {
			userState: useConnectStateStore() as any,
			route: useRoute(),
			appId: '' as any,
			tabId: '' as any,
		};
	},
	computed: {},
	created() {},
	mounted() {
		this.appId = !!this.route.query.appId ? this.route.query.appId : '';
		this.tabId = !!this.route.query.tab ? this.route.query.tab : '';

		// [DBG-appview] TEMP — สืบ SPA-nav vs reload ทำไมฟอร์มเปล่า (ลบทิ้งหลัง debug จบ)
		const dumpStore = (label: string) => {
			const fs = this.userState.formStore || {};
			const keys = Object.keys(fs);
			console.log(`[DBG-appview] ${label} | appId=`, this.appId, '| user?', !!this.userState.user, '| token?', !!(this.userState.user && this.userState.user.token), '| ciKey?', !!(this.userState.connectInfo && this.userState.connectInfo.public_key), '| formStoreKeys=', keys);
			keys.forEach((k) => {
				const m = fs[k];
				console.log(`[DBG-appview]   formStore[${k}] form_model?`, !!(m && m.form_model), '| decoded model?', !!(m && m.form_model && m.form_model.model), '| form_db?', !!(m && m.form_db));
			});
		};
		dumpStore('MOUNTED (cache ค้างก่อน fetch)');
		this.$watch(
			() => Object.keys(this.userState.formStore || {}).length,
			() => dumpStore('formStore CHANGED (model โหลดเข้ามา)')
		);
	},
	unmounted() {},
	setup(props, ctx) {
		const components = shallowRef(CustomComponents.component());

		return { components };
	},
	methods: {},
});
</script>

<style lang="scss">
.app_content {
	margin-bottom: 15px;
}
.app_title {
	.el-avatar {
		background-color: transparent;
	}
}
</style>
