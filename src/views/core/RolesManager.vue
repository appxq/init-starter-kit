<template>
	<div class="mb-5">
		<SdGrid
			:data-provider="sdProvider"
			ref="refGrid"
			:action-enable="true"
			:add-btn-enable="true"
			icon-name="el-circle-check"
			title-name="Roles Manage"
			popup-name="Role Form"
			popup-width="50%"
			add-btn-label="Add Role"
			:user-state="userState"
			:update-before="handleUpdate"
			:insert-before="handleInsert"
			:view-before="handleView">
			<SdGridColumnIndex :ref-sdgrid="refGrid" />
			<el-table-column prop="role_name" label="Name" width="200" sortable />
			<el-table-column prop="role_description" label="Description" />
			<SdGridColumnDate />
			<SdGridColumnBy />
			<template #popup>
				<RolesForm :is-insert="options.isInsert" :form-model="options.formModel" :readonly="options.readonly" :afterSave="afterSave">
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
				</RolesForm>
			</template>
		</SdGrid>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ProviderType, type SdProvider } from '~/types/SdGridType';
import { type Roles } from '~/types/Roles';
import { deepClone } from '~/utils/Util';
import RolesForm from './RolesForm.vue';
import { SdGrid, SdGridColumnIndex, SdGridColumnDate, SdGridColumnBy } from 'sd-render';
import { useConnectStateStore } from '~/stores/ConnectState';

const options = reactive({
	scrollerHeight: 0,
	isInsert: true,
	readonly: false,
	index: 0,
	formModel: {} as Roles,
});

const refGrid: any = ref(null);
const userState = useConnectStateStore();

const sdProvider = reactive<SdProvider>({
	providerId: 'getroles-all',
	providerType: ProviderType.SYS,
	options: {
		limit: 30,
		search: ['role_name'],
	},
});

function handleInsert(rowData: any, index: number) {
	options.isInsert = true;
	options.readonly = false;
	options.index = index;
	options.formModel = {
		role_name: '',
		role_description: '',
	};
}

function handleUpdate(rowData: any, index: number) {
	options.isInsert = false;
	options.readonly = false;
	options.index = index;
	options.formModel = deepClone(rowData);
	options.formModel.dataid = rowData._id;
}

function handleView(rowData: any, index: number) {
	options.isInsert = false;
	options.readonly = true;
	options.index = index;
	options.formModel = deepClone(rowData);
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
