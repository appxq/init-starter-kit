<template>
	<el-form ref="formRef" :model="formModel" :label-position="'top'" @keyup.enter.prevent="submitForm(formRef)">
		<el-form-item label="Name" prop="role_name" required :rules="[{ validator: uniqueCode, trigger: 'blur' }]">
			<el-input v-model="formModel.role_name" type="text" :clearable="true" :disabled="!!readonly || readonly" />
		</el-form-item>
		<el-form-item label="Description" prop="role_description" required>
			<el-input v-model="formModel.role_description" type="text" :clearable="true" :disabled="!!readonly || readonly" />
		</el-form-item>

		<el-form-item v-if="!!!readonly">
			<el-button type="primary" @click.prevent="submitForm(formRef)">Submit</el-button>
			<el-button @click="resetForm(formRef)">Reset</el-button>
			<slot name="action"></slot>
		</el-form-item>
	</el-form>
</template>

<script lang="ts" setup>
import { type FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import 'vanilla-jsoneditor/themes/jse-theme-dark.css';
import { type Roles } from '~/types/Roles';
import { ProviderType, type SdProvider } from '~/types/SdGridType';
import { useConnectStateStore } from '~/stores/ConnectState';

const formRef = ref<FormInstance>();

const props = defineProps<{
	formModel: Roles;
	isInsert: Boolean;
	readonly: Boolean;
	afterSave?: Function;
}>();
const userState = useConnectStateStore();
const sdProvider = reactive<SdProvider>({
	providerId: 'getroles-all',
	providerType: ProviderType.SYS,
});

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid: any): Promise<void> => {
		if (valid) {
			if (props.isInsert) {
				userState.crudCreate({ data: props.formModel, sdProvider: sdProvider }, props.afterSave);
			} else {
				userState.crudUpdate({ id: props.formModel.dataid, data: props.formModel, sdProvider: sdProvider }, props.afterSave);
			}
			// return true;
		} else {
			// ElMessage.warning('validate error');
			// return false;
		}
	});
};

const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};

const uniqueCode = (rule: any, value: any, callbackRule: any) => {
	if (value === '' || !value) {
		callbackRule(new Error('Please input the code again'));
	} else if (!value.match(/^[a-zA-Z0-9_]+$/)) {
		callbackRule(new Error('Variables must be in English or numbers only and do not contain spaces.'));
	} else {
		userState.crudCheckUnique(
			{ dataId: props.formModel._id || props.formModel.dataid || '', fieldName: 'role_name', fieldValue: value, sdProvider: sdProvider },
			callbackRule,
			'Role Name'
		);
	}
};
</script>
