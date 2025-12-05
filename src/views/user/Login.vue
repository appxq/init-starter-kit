<template>
	<el-scrollbar class="login-page" :height="`${options.scrollerHeight}px`">
		<el-row class="mt-20 mb-20 p-5">
			<el-col :xs="0" :sm="5" :md="7" :lg="8" :xl="9"></el-col>
			<el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="6">
				<el-card shadow="never" class="box-card">
					<el-row class="mb-3">
						<el-col :span="24" class="text-8" style="text-align: center; font-weight: 400; margin: 10px 0px">
							<span style="position: relative">
								<el-avatar v-if="options.logoType === 'img'" shape="square" :size="48" :src="APP_IMG_LOGO" style="margin-right: 130px" />
								<SvgIcon v-else :icon-name="APP_SVG_LOGO" class="mr-1 text-18" />
								<div class="ml-1" style="">
									{{ APP_NAME }}
								</div>
							</span>
						</el-col>
						<el-col :span="24" class="text-5" style="text-align: center; margin: 10px 0px; color: #626aef"> Welcome Back </el-col>
						<el-col :span="24" class="text-3.3" style="text-align: center; margin: 10px 0px">
							<el-icon><Unlock /></el-icon> Sign in to continue to {{ APP_NAME }}
						</el-col>
					</el-row>

					<el-form ref="loginFormRef" :model="loginModel" :label-position="'left'" :size="'large'" @keyup.enter.prevent="submitForm(loginFormRef)">
						<el-form-item prop="username" required>
							<el-input v-model="loginModel.username" placeholder="Username" type="text" :clearable="true" prefix-icon="User" />
						</el-form-item>
						<el-form-item prop="password" required>
							<el-input v-model="loginModel.password" placeholder="Password" type="password" :clearable="true" autocomplete="off" prefix-icon="Key" show-password />
						</el-form-item>
						<el-checkbox v-model="loginModel.remember" label="Remember me" />
						<el-row class="mb-3">
							<el-button type="primary" round plain @click.prevent="submitForm(loginFormRef)" icon="Unlock" style="width: 100%"> Login </el-button>
						</el-row>
						<el-row class="mb-3">
							<el-button type="info" icon="Key" round plain style="width: 100%" @click="router.push('/user/forgot-password')"> Forgot your password? </el-button>
						</el-row>
						<el-row class="mb-3">
							<el-button type="success" icon="User" round plain style="width: 100%" @click="router.push('/user/register')"> Sign Up </el-button>
						</el-row>
					</el-form>
				</el-card>
			</el-col>
		</el-row>
	</el-scrollbar>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { computed, onMounted, ref, reactive, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { type FormInstance } from 'element-plus';
import { APP_IMG_LOGO, APP_LOGO_TYPE, APP_NAME, APP_SLOGAN, APP_SVG_LOGO, APP_VERSION, API_URL } from '~/config/AppConfig';
import { onWindowResizeHandler } from '~/utils/Util';
import router from '~/routers';
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

const appState = useAppStateStore();
const userState = useConnectStateStore();
const options = reactive<any>({
	scrollerHeight: 0,
	logoType: APP_LOGO_TYPE,
});

onMounted(() => {
	appState.isDark = useDark();

	options.scrollerHeight = window.innerHeight;
	onWindowResizeHandler(async () => {
		await nextTick(() => {
			options.scrollerHeight = window.innerHeight;
		});
	});
});

const route = useRoute();
const route_title = computed(() => route.meta.title || 'SdForm');

let username = localStorage.getItem('user-remember');

const loginFormRef = ref<FormInstance>();
const loginModel = reactive<any>({
	username: username,
	password: null,
	remember: !!username ? true : false,
});

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid: any): Promise<void> => {
		if (valid) {
			userState.login(loginModel);
		} else {
			// return false;
		}
	});
};
</script>

<style lang="scss" scoped>
.login-page {
	background-color: #8ec5fc;
	background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

.dark .login-page {
	// background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
		radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
	background-blend-mode: multiply, multiply;
}
</style>
