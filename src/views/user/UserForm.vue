<template>
	<el-form ref="userFormRef" :model="userModel" :label-position="'top'" @keyup.enter.prevent="submitForm(userFormRef)">
		<el-form-item label="Username" prop="username" required :rules="[{ validator: uniqueUser, trigger: 'blur' }]">
			<el-input v-model="userModel.username" type="text" :clearable="true" prefix-icon="User" :disabled="!isInsert || !!readonly" autocomplete="new-password" />
		</el-form-item>
		<el-form-item v-if="isInsert" label="Password" prop="password" required :rules="[{ validator: validatePass, trigger: 'blur' }]">
			<el-input v-model="userModel.password" type="password" :clearable="true" autocomplete="new-password" prefix-icon="Key" :disabled="!!readonly" />
		</el-form-item>
		<el-form-item v-if="isInsert" label="Confirm Password" prop="confirmPassword" required :rules="[{ validator: validatePass2, trigger: 'blur' }]">
			<el-input v-model="userModel.confirmPassword" type="password" :clearable="true" autocomplete="new-password" prefix-icon="Key" :disabled="!!readonly" />
		</el-form-item>
		<el-form-item
			label="E-Mail"
			prop="email"
			required
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
				{ validator: uniqueEmail, trigger: 'blur' },
			]">
			<el-input v-model="userModel.email" type="text" :clearable="true" prefix-icon="Message" :disabled="!isInsert || !!readonly" />
		</el-form-item>

		<el-form-item label="First Name" prop="profile.fname" required>
			<el-input v-model="userModel.profile.fname" type="text" :clearable="true" :disabled="!!readonly" />
		</el-form-item>
		<el-form-item label="Last Name" prop="profile.lname" required>
			<el-input v-model="userModel.profile.lname" type="text" :clearable="true" :disabled="!!readonly" />
		</el-form-item>
		<el-form-item label="Mobile Phone" prop="profile.tel" :rules="[{ validator: checkTel, trigger: 'blur' }]">
			<el-input v-model="userModel.profile.tel" type="text" :clearable="true" :disabled="!!readonly" />
		</el-form-item>

		<el-form-item label="Avatar" v-if="!isInsert">
			<el-upload
				class="avatar-uploader"
				:class="{ hideUploadDiv: uploadBtnHidden }"
				:action="API_URL + '/v1/files/upload-avatar'"
				:headers="{
					Authorization: `Bearer ${userState.user?.token}`,
				}"
				:show-file-list="true"
				:data="dataUpload"
				list-type="picture-card"
				v-model:file-list="userModel.profile.avatar"
				:limit="1"
				:disabled="!!readonly"
				:on-success="handleUploadSuccess"
				:before-upload="beforeUpload">
				<el-icon><Plus /></el-icon>
				<template #file="{ file }">
					<div>
						<img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
						<el-image
							ref="imageRef"
							style="width: 100%; height: 100%"
							:src="file.url"
							:preview-src-list="previewList"
							:initial-index="options.previewIndex"
							fit="cover"
							preview-teleported />

						<span class="el-upload-list__item-actions">
							<!-- <span v-if="!!!readonly" class="el-upload-list__item-delete" @click="handleCardPreview(file)">
						<el-icon><CircleCheck /></el-icon>
					</span> -->

							<slot name="action" :file="file"></slot>

							<span class="el-upload-list__item-preview" @click="handleCardPreview(file)">
								<el-icon><zoom-in /></el-icon>
							</span>

							<span v-if="!!!readonly" class="el-upload-list__item-delete" @click="handleRemove(file)">
								<el-icon><Delete /></el-icon>
							</span>
						</span>
					</div>
				</template>
			</el-upload>
		</el-form-item>
		<el-form-item v-if="!!!readonly">
			<el-button type="primary" @click.prevent="submitForm(userFormRef)">Submit</el-button>
			<el-button @click="resetForm(userFormRef)">Reset</el-button>
			<slot name="action"></slot>
		</el-form-item>
	</el-form>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ElMessage, type FormInstance, type UploadFile, type UploadProps } from 'element-plus';
import { computed, reactive, ref } from 'vue';
import { API_URL } from '~/config/AppConfig';
import { deepClone } from '~/utils/Util';
import { getRegExp } from '~/utils/validators';
import { type SdUserModel } from '~/types/User';
import { useConnectStateStore } from '~/stores/ConnectState';

const userState = useConnectStateStore();

const props = defineProps<{
	userModel: SdUserModel;
	isInsert: Boolean;
	disableUpdateUser?: Boolean;
	isRegister?: Boolean;
	readonly?: Boolean;
	afterSave?: Function;
}>();

const dataUpload = reactive({});
const options = reactive({ previewIndex: 0 });
const uploadBtnHidden = ref(props.userModel.profile.avatar.length >= 1);

const userFormRef = ref<FormInstance>();
const imageRef: any = ref(null);

const previewList = computed(() => {
	return props.userModel.profile.avatar.map((el: any) => el.url);
});

const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
	if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
		ElMessage.error('Avatar picture must be JPG or PNG format!');
		return false;
	}

	if (rawFile.size / 1024 / 1024 > 15) {
		ElMessage.error('Avatar picture size can not exceed 15MB!');
		return false;
	}
	return true;
};

const handleRemove = async (uploadFile: UploadFile) => {
	const bodyData = uploadFile.response;

	await axios
		.delete(`${API_URL}/v1/files/remove-one`, {
			data: bodyData,
			headers: {
				Authorization: `Bearer ${userState.user?.token}`,
			},
		})
		.then((response) => {
			props.userModel.profile.avatar = props.userModel.profile.avatar.filter((file) => {
				return file.uid !== uploadFile.uid;
			});
			uploadBtnHidden.value = props.userModel.profile.avatar.length >= 1;
		})
		.catch((error) => {
			console.log(error);
		});
};

const handleUploadSuccess: UploadProps['onSuccess'] = (response, uploadFile, uploadFiles) => {
	if (!!uploadFiles[0] && !!uploadFiles[0].response) {
		uploadFiles[0].url = response.filePath;
	}

	props.userModel.profile.avatar = deepClone(uploadFiles);
	uploadBtnHidden.value = props.userModel.profile.avatar.length >= 1;
};

const handleCardPreview: UploadProps['onPreview'] = (uploadFile) => {
	options.previewIndex = previewList.value.indexOf(uploadFile.url);
	imageRef.value.$el.children[0].click();
};

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid: any): Promise<void> => {
		if (valid) {
			if (props.isInsert) {
				if (!!props.isRegister && props.isRegister) {
					userState.register(props.userModel);
				} else {
					if (!!props.afterSave) {
						userState.create(props.userModel, props.afterSave);
					} else {
						userState.create(props.userModel);
					}
				}
			} else {
				const updateUser = !!props.disableUpdateUser ? false : true;

				if (!!props.afterSave) {
					userState.update(props.userModel, updateUser, props.afterSave);
				} else {
					userState.update(props.userModel, updateUser);
				}
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

const validatePass = (rule: any, value: string, callback: any) => {
	if (value === '' || !value) {
		callback(new Error('Please input the password'));
	} else if (value.length < 6) {
		callback(new Error('A password must be 6 characters long.'));
	} else {
		if (props.userModel.confirmPassword !== '') {
			if (!userFormRef.value) return;
			userFormRef.value.validateField('confirmPassword');
		}
		callback();
	}
};

const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('Please input the password again'));
	} else if (value !== props.userModel.password) {
		callback(new Error("Two inputs don't match!"));
	} else {
		callback();
	}
};

const checkTel = (rule: any, value: any, callback: any) => {
	const fn = new Function('return ' + getRegExp('mobilePhone'));
	const reg = fn();

	if (!!value && value !== '' && value.length > 0 && !reg.test(value)) {
		callback(new Error('Please input must mobile phone number format'));
	} else {
		callback();
	}
};

const uniqueUser = (rule: any, value: any, callback: any) => {
	if (value === '' || !value) {
		callback(new Error('Please input the username again'));
	} else if (value.length < 4) {
		callback(new Error('A username must be 4 characters long.'));
	} else {
		if (props.isInsert) {
			axios
				.get(`${API_URL}/user/check-unique/${value}`)
				.then((response) => {
					// If the login is successful, save the user data and token
					if (response.data.notExists) {
						callback();
					} else {
						callback(new Error('Username already exists when people register'));
					}
				})
				.catch((error) => {
					// If the login fails, display an error message
					// console.log(error);
					if (!!error.response && !!error.response.data && !!error.response.data.message) {
						ElMessage.warning(error.response.data.message);
					} else {
						ElMessage.warning(error.message);
					}
					callback(new Error('Username not approved'));
				});
		} else {
			callback();
		}
	}
};

const uniqueEmail = (rule: any, value: any, callback: any) => {
	if (value === '' || !value) {
		callback(new Error('Please input the email again'));
	} else {
		if (props.isInsert) {
			axios
				.get(`${API_URL}/user/check-unique/${value}`)
				.then((response) => {
					// If the login is successful, save the user data and token
					if (response.data.notExists) {
						callback();
					} else {
						callback(new Error('Email already exists when people register'));
					}
				})
				.catch((error) => {
					// If the login fails, display an error message
					// console.log(error);
					if (!!error.response && !!error.response.data && !!error.response.data.message) {
						ElMessage.warning(error.response.data.message);
					} else {
						ElMessage.warning(error.message);
					}
					callback(new Error('Email not approved'));
				});
		} else {
			callback();
		}
	}
};
</script>

<style lang="scss" scoped>
.hideUploadDiv {
	:deep(div.el-upload--picture-card) {
		display: none;
	}
	:deep(div.el-upload--text) {
		display: none;
	}
	:deep(div.el-upload__tip) {
		display: none;
	}
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>
