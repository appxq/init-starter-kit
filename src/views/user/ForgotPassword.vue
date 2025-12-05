<template>
	<el-row class="mt-5 mb-10">
		<el-col :xs="0" :sm="5" :md="7" :lg="8" :xl="9"></el-col>
		<el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="6">
			<el-card shadow="never" class="box-card" header="Forgot Password">
				<el-form ref="forgotPasswordFormRef" :model="forgotPw" :label-width="!!token ? '140px' : '80px'" @submit.prevent="submitForm(forgotPasswordFormRef)">
					<el-form-item
						label="E-Mail"
						prop="email"
						required
						v-if="!token"
						:rules="[
							{
								required: true,
								message: 'Please input email address',
								trigger: 'blur',
							},
							{
								type: 'email',
								message: 'Please input correct email address',
								trigger: ['blur', 'change'],
							},
						]">
						<el-input v-model="forgotPw.email" type="text" :clearable="true" prefix-icon="Message" />
					</el-form-item>
					<el-form-item v-if="!!token" label="Password" prop="password" required :rules="[{ validator: validatePass, trigger: 'blur' }]">
						<el-input v-model="forgotPw.password" type="password" :clearable="true" autocomplete="new-password" />
					</el-form-item>
					<el-form-item v-if="!!token" label="Confirm Password" prop="confirmPassword" required :rules="[{ validator: validatePass2, trigger: 'blur' }]">
						<el-input v-model="forgotPw.confirmPassword" type="password" :clearable="true" autocomplete="new-password" />
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="submitForm(forgotPasswordFormRef)">Submit</el-button>
						<el-button @click="resetForm(forgotPasswordFormRef)">Reset</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { API_URL } from '~/config/AppConfig';
import { ElMessage, type FormInstance } from 'element-plus';
import router from '~/routers';

const forgotPasswordFormRef = ref<FormInstance>();
const route = useRoute();
const token = ref(!!route.query.token ? route.query.token : null);
const forgotPw = reactive({
	email: null,
	password: null,
	confirmPassword: null,
});

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid: any): Promise<void> => {
		if (valid) {
			if (!!token.value) {
				confirmPassword();
			} else {
				forgotPassword();
			}
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
		if (forgotPw.confirmPassword !== '') {
			if (!forgotPasswordFormRef.value) return;
			forgotPasswordFormRef.value.validateField('confirmPassword', () => {});
		}
		callback();
	}
};

const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('Please input the password again'));
	} else if (value !== forgotPw.password) {
		callback(new Error("Two inputs don't match!"));
	} else {
		callback();
	}
};

function confirmPassword() {
	axios
		.post(`${API_URL}/user/confirm-password`, { token: token.value, newPassword: forgotPw.password })
		.then((response) => {
			// If the login is successful, save the user data and token
			if (!!response && !!response.data && !!response.data.message) {
				ElMessage.success(response.data.message);
			} else {
				ElMessage.success('You have changed your password.');
			}

			router.push('/user/login');
		})
		.catch((error) => {
			// If the login fails, display an error message
			// console.log(error);
			if (!!error.response && !!error.response.data && !!error.response.data.message) {
				ElMessage.warning(error.response.data.message);
			} else {
				ElMessage.warning(error.message);
			}
		});
}

function forgotPassword() {
	axios
		.post(`${API_URL}/user/forgot-password`, { email: forgotPw.email })
		.then((response) => {
			// If the login is successful, save the user data and token
			if (!!response && !!response.data && !!response.data.message) {
				ElMessage.success(response.data.message);
			} else {
				ElMessage.success('Please check your email');
			}
			resetForm(forgotPasswordFormRef.value);
		})
		.catch((error) => {
			// If the login fails, display an error message
			// console.log(error);
			if (!!error.response && !!error.response.data && !!error.response.data.message) {
				ElMessage.warning(error.response.data.message);
			} else {
				ElMessage.warning(error.message);
			}
		});
}
</script>
