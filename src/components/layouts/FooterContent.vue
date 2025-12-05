<template>
	<div class="footer_content" v-if="!!appState.params['site_footer_content']">
		<sd-html-editor v-model="appState.params['site_footer_content']" class="mt-3" :mode="'mini'" :readonly="true" :user-state="userState"></sd-html-editor>
	</div>
</template>
<script lang="ts" setup>
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

const appState = useAppStateStore();
const userState = useConnectStateStore();
</script>

<style lang="scss" scoped>
.footer_content {
	opacity: 0.4;
	border-top: 1px solid var(--el-border-color);
}
</style>
