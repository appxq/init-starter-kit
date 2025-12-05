<template>
	<el-form ref="settingFormRef" :model="settingModel" :label-position="'top'">
		<el-row :gutter="20">
			<el-col :span="10">
				<el-form-item
					label="Code"
					prop="opts_code"
					required
					:rules="([
						{ validator: uniqueCode, trigger: 'blur' },
						{ validator: FormValidators['variable'], trigger: 'blur', label: 'Code' },
					] as any)">
					<el-input v-model="settingModel.opts_code" type="text" :clearable="true" :disabled="!!readonly || readonly" />
				</el-form-item>
			</el-col>
			<el-col :span="14">
				<el-form-item label="Label" prop="opts_label" required>
					<el-input v-model="settingModel.opts_label" type="text" :clearable="true" :disabled="!!readonly || readonly" />
				</el-form-item>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col :span="10">
				<el-form-item label="Type" prop="opts_type" required>
					<el-select v-model="settingModel.opts_type.value" style="width: 100%" @change="typeChange" placeholder="Please Select..." :disabled="!!readonly || readonly">
						<el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="!!item.value ? item.value : ''"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="14">
				<el-form-item label="Group" prop="opts_group" required>
					<el-input v-model="settingModel.opts_group" type="text" :clearable="true" :disabled="!!readonly || readonly" />
				</el-form-item>
			</el-col>
		</el-row>

		<el-form-item label="Default Value" prop="opts_value">
			<SdDynamicInput
				v-model="settingModel.opts_value"
				:readonly="!!readonly || readonly"
				:data-list="settingModel.opts_datalist"
				:input-options="settingModel.opts_options"
				:input-type="!!settingModel.opts_type.value ? settingModel.opts_type.value : ''"
				:user-state="userState" />
		</el-form-item>

		<el-row :gutter="20">
			<el-col :span="10">
				<el-form-item label="Divider" prop="opts_divider">
					<el-input v-model="settingModel.opts_divider" type="text" :clearable="true" :disabled="!!readonly || readonly" />
				</el-form-item>
			</el-col>
			<el-col :span="14">
				<el-form-item label="Hint" prop="opts_hint">
					<el-input v-model="settingModel.opts_hint" type="text" :clearable="true" :disabled="!!readonly || readonly" />
				</el-form-item>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col :span="10">
				<el-form-item label="Options" prop="opts_options">
					<JsonEditorVue
						:main-menu-bar="false"
						style="width: 100%"
						:mode="Mode.tree"
						:class="appState.isDark ? 'jse-theme-dark' : ''"
						v-model="settingModel.opts_options"
						:read-only="!!readonly || readonly" />
				</el-form-item>
			</el-col>
			<el-col :span="14">
				<el-form-item label="Data List" prop="opts_datalist" v-if="!!settingModel.opts_type.value ? optionsEnable.includes(settingModel.opts_type.value) : false">
					<SdOptionsItems v-model="settingModel.opts_datalist" :readonly="!!readonly || readonly"></SdOptionsItems>
				</el-form-item>

				<el-form-item label="Auto Load" prop="opts_autoload">
					<el-radio-group v-model="settingModel.opts_autoload" size="small" :disabled="!!readonly || readonly">
						<el-radio-button value="yes">Yes</el-radio-button>
						<el-radio-button value="no">NO</el-radio-button>
					</el-radio-group>
				</el-form-item>
			</el-col>
		</el-row>

		<el-form-item v-if="!!!readonly">
			<el-button type="primary" @click.prevent="submitForm(settingFormRef)">Submit</el-button>
			<el-button @click="resetForm(settingFormRef)">Reset</el-button>
			<slot name="action"></slot>
		</el-form-item>
	</el-form>
</template>

<script lang="ts" setup>
import { type FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { type OptionsSetting, typeList } from '~/types/Setting';
import JsonEditorVue from 'json-editor-vue';
import 'vanilla-jsoneditor/themes/jse-theme-dark.css';
import { useAppStateStore } from '~/stores/AppState';
import { ProviderType, type SdProvider } from '~/types/SdGridType';
import FormValidators from '~/utils/validators';
import { Mode } from 'vanilla-jsoneditor';
import { useConnectStateStore } from '~/stores/ConnectState';
import { SdDynamicInput } from 'sd-render';

const settingFormRef = ref<FormInstance>();

const props = defineProps<{
	settingModel: OptionsSetting;
	isInsert: Boolean;
	readonly: Boolean;
	afterSave?: Function;
}>();
const userState = useConnectStateStore();
const appState = useAppStateStore();
const optionsEnable = ['select-editor', 'radio-editor', 'multiselect-editor'];
const sdProvider = reactive<SdProvider>({
	providerId: 'getsetting-all',
	providerType: ProviderType.SYS,
});

function typeChange(value: string) {
	if (!!value && value != '') {
		const selectObj = getLabelType(value);
		props.settingModel.opts_type.label = selectObj?.label;
	} else {
		props.settingModel.opts_type.label = '';
	}
}

function getLabelType(value: string) {
	return typeList.find((type) => type.value == value);
}

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid: any): Promise<void> => {
		if (valid) {
			if (props.isInsert) {
				userState.crudCreate({ data: props.settingModel, sdProvider: sdProvider }, props.afterSave);
			} else {
				userState.crudUpdate({ id: props.settingModel.dataid, data: props.settingModel, sdProvider: sdProvider }, props.afterSave);
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
	} else {
		userState.crudCheckUnique(
			{ dataId: props.settingModel._id || props.settingModel.dataid || '', fieldName: 'opts_code', fieldValue: value, sdProvider: sdProvider },
			callbackRule,
			'Code'
		);
	}
};
</script>
