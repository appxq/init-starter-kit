<template>
	<el-row class="mt-5 mb-10">
		<el-col :xs="0" :sm="5" :md="7" :lg="8" :xl="9"></el-col>
		<el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="6">
			<el-card shadow="never" class="box-card">
				<template #header>
					<div class="card-header">
						<span>Profile</span>
						<el-button class="button ml-1" plain type="danger" @click.prevent="deleteAccount(userModel)"> Delete Account</el-button>
					</div>
				</template>
				<UserForm :user-model="userModel" :isInsert="false" />
			</el-card>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import UserForm from './UserForm.vue';
import { reactive } from 'vue';
import { isEmptyObj } from '~/utils/Util';
import { ElMessageBox } from 'element-plus';
import { useConnectStateStore } from '~/stores/ConnectState';

const userState = useConnectStateStore();

const userModel = reactive<any>({
	user_id: userState.user?.user_id,
	username: userState.user?.username,
	email: userState.user?.email,
	profile: {
		fname: userState.user?.fname,
		lname: userState.user?.lname,
		tel: userState.user?.tel,
		avatar: !isEmptyObj(userState.user?.avatar) ? userState.user?.avatar : [],
		position: userState.user?.position,
		certificate_code: userState.user?.certificate_code,
		person_code: userState.user?.person_code,
	},
});

function deleteAccount(data: any) {
	ElMessageBox.confirm('Are you sure you want to delete this account?', 'Confirmation', {
		confirmButtonText: 'OK',
		cancelButtonText: 'Cancel',
		type: 'warning',
	})
		.then(() => {
			userState.delete(data);
		})
		.catch(() => {
			//canceled
		});
}
</script>

<style lang="scss" scoped>
.el-card {
	:deep(.card-header) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	:deep(.el-card__header) {
		padding: 15px;
	}
	:deep(.el-card__body) {
		padding: 25px;
	}
}
</style>
