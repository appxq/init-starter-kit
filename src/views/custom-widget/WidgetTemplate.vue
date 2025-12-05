<template>WidgetTemplate {{ formId }}<br /></template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { ConnectStateStore } from '~/stores/ConnectState';

export default defineComponent({
	name: 'WidgetTemplate',
	components: {},
	props: {
		userState: {
			type: Object as PropType<ConnectStateStore>,
			required: true,
		},
		formId: {
			type: String,
			default: '',
		},
	},
	data() {
		return {};
	},
	computed: {},
	created() {},
	mounted() {},
	unmounted() {},
	setup(props, ctx) {},
	methods: {},
});
</script>

<style lang="scss" scoped></style>
