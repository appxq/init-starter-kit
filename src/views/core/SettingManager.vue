<template>
	<div class="mb-5">
		<SdGrid
			:data-provider="sdProvider"
			ref="refGrid"
			icon-name="el-set-up"
			title-name="Setting Manage"
			popup-name="Setting Form"
			popup-width="50%"
			add-btn-label="Add Setting"
			:user-state="userState"
			:update-before="handleUpdate"
			:insert-before="handleInsert"
			:view-before="handleView">
			<SdGridColumnIndex :ref-sdgrid="refGrid" />
			<el-table-column prop="opts_code" label="Code" width="250" sortable />
			<el-table-column prop="opts_label" label="Label" width="250" sortable />
			<el-table-column prop="opts_group" label="Group" width="180" sortable />
			<el-table-column prop="opts_type.label" label="Type" width="140" sortable />
			<el-table-column prop="opts_value" label="Raw Value" min-width="250">
				<template #default="scope">
					<el-text truncated>{{ scope.row.opts_value }}</el-text>
				</template>
			</el-table-column>
			<el-table-column prop="opts_hint" label="Hint" min-width="200" />
			<el-table-column
				prop="opts_autoload"
				column-key="opts_autoload"
				label="Auto Load"
				width="120"
				:filters="[
					{ text: 'Yes', value: 'yes' },
					{ text: 'No', value: 'no' },
				]">
				<template #default="scope">
					{{ scope.row.opts_autoload == 'yes' ? 'Yes' : 'No' }}
				</template>
			</el-table-column>
			<SdGridColumnDate />
			<SdGridColumnBy />

			<template #popup>
				<SettingForm :is-insert="options.isInsert" :setting-model="options.settingModel" :readonly="options.readonly" :afterSave="afterSave">
					<template #action>
						<el-button
							@click="
								() => {
									if (!!refGrid) {
										refGrid.showPopupFlag = false;
									}
								}
							"
							>Cancel</el-button
						>
					</template>
				</SettingForm>
			</template>
		</SdGrid>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ProviderType, type SdProvider } from '~/types/SdGridType';
import { type OptionsSetting } from '~/types/Setting';
import { deepClone } from '~/utils/Util';
import SettingForm from './SettingForm.vue';
import { useConnectStateStore } from '~/stores/ConnectState';
import { SdGrid, SdGridColumnIndex, SdGridColumnDate, SdGridColumnBy } from 'sd-render';

const options = reactive({
	scrollerHeight: 0,
	isInsert: true,
	readonly: false,
	index: 0,
	settingModel: {} as OptionsSetting,
});

const refGrid = ref();
const userState = useConnectStateStore();

const sdProvider = reactive<SdProvider>({
	providerId: 'getsetting-all',
	providerType: ProviderType.SYS,
	options: {
		limit: 30,
		search: ['opts_code', 'opts_label', 'opts_group'],
	},
});

function handleInsert(rowData: any, index: number) {
	options.isInsert = true;
	options.readonly = false;
	options.index = index;
	options.settingModel = {
		opts_code: '',
		opts_label: '',
		opts_group: 'Other',
		opts_type: { value: 'text-editor', label: 'Text Input' },
		opts_value: null,
		opts_datalist: [],
		opts_options: {},
		opts_divider: null,
		opts_hint: null,
		opts_autoload: 'yes',
	};
}

function handleUpdate(rowData: any, index: number) {
	options.isInsert = false;
	options.readonly = false;
	options.index = index;
	options.settingModel = deepClone(rowData);
	options.settingModel.dataid = rowData._id;
}

function handleView(rowData: any, index: number) {
	options.isInsert = false;
	options.readonly = true;
	options.index = index;
	options.settingModel = deepClone(rowData);
}

function afterSave(formData: any) {
	if (!!refGrid.value) {
		refGrid.value.showPopupFlag = false;
		if (options.isInsert) {
			refGrid.value.reloadData();
		} else {
			if (!!formData.data) {
				refGrid.value.rawData[options.index] = deepClone(formData.data);
				refGrid.value.rawData[options.index]._id = formData.id;
			}
		}
	}
}
</script>
