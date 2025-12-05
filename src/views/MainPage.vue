<template>
	<sd-html-editor
		v-if="!!appState.params['site_index_content']"
		v-model="appState.params['site_index_content']"
		:mode="'mini'"
		:readonly="true"
		:user-state="userState"></sd-html-editor>
</template>

<script lang="ts" setup>
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

const appState = useAppStateStore();
const userState = useConnectStateStore();
</script>
