<template>
	<el-row class="mt-5 mb-10">
		<el-col :xs="0" :sm="5" :md="7" :lg="8" :xl="9"></el-col>
		<el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="6">
			<el-card shadow="never" class="box-card" header="Change Password">
				<el-form ref="changePasswordFormRef" :model="changePw" :label-width="'140px'" @keyup.enter.prevent="submitForm(changePasswordFormRef)">
					<el-form-item label="Username" prop="username" required>
						<el-input v-model="changePw.username" type="text" :clearable="true" prefix-icon="User" :disabled="true" autocomplete="new-password" />
					</el-form-item>
					<el-form-item label="Old Password" prop="password" required>
						<el-input v-model="changePw.password" type="password" :clearable="true" autocomplete="new-password" />
					</el-form-item>
					<el-divider />
					<el-form-item label="New Password" prop="newPassword" required :rules="[{ validator: validatePass, trigger: 'blur' }]">
						<el-input v-model="changePw.newPassword" type="password" :clearable="true" autocomplete="new-password" />
					</el-form-item>
					<el-form-item label="Confirm Password" prop="confirmPassword" required :rules="[{ validator: validatePass2, trigger: 'blur' }]">
						<el-input v-model="changePw.confirmPassword" type="password" :clearable="true" autocomplete="new-password" />
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click.prevent="submitForm(changePasswordFormRef)">Submit</el-button>
						<el-button @click="resetForm(changePasswordFormRef)">Reset</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { type FormInstance } from 'element-plus';
import { useConnectStateStore } from '~/stores/ConnectState';

const userState = useConnectStateStore();

const changePasswordFormRef = ref<FormInstance>();
const changePw = reactive({
	username: userState.user?.username,
	password: null,
	newPassword: null,
	confirmPassword: null,
});

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid: any): Promise<void> => {
		if (valid) {
			userState.changePassword(changePw);
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

const validatePass = (rule: any, value: string, callback: any) => {
	if (value === '' || !value) {
		callback(new Error('Please input the password'));
	} else if (value.length < 6) {
		callback(new Error('A password must be 6 characters long.'));
	} else {
		if (changePw.confirmPassword !== '') {
			if (!changePasswordFormRef.value) return;
			changePasswordFormRef.value.validateField('confirmPassword', () => {});
		}
		callback();
	}
};

const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('Please input the password again'));
	} else if (value !== changePw.newPassword) {
		callback(new Error("Two inputs don't match!"));
	} else {
		callback();
	}
};
</script>
