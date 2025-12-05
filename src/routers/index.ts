import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

//can, anyCan, notCan
const routes: Array<RouteRecordRaw> = [
	{
		path: '',
		name: 'home',
		meta: {
			title: 'Home',
		},
		component: () => import('~/views/MainPage.vue'),
	},
	{
		path: '/user/login',
		name: 'login',
		meta: {
			title: 'Log In',
		},
		component: () => import('~/views/user/Login.vue'),
	},
	{
		path: '/user/profile',
		name: 'profile',
		meta: {
			title: 'Profile',
		},
		component: () => import('~/views/user/Profile.vue'),
	},
	{
		path: '/user/register',
		name: 'register',
		meta: {
			title: 'Register',
		},
		component: () => import('~/views/user/Register.vue'),
	},
	{
		path: '/user/confirm',
		name: 'confirm',
		meta: {
			title: 'Confirm Email',
		},
		component: () => import('~/views/user/ConfirmEmail.vue'),
	},
	{
		path: '/user/forgot-password',
		name: 'forgot-password',
		meta: {
			title: 'Forgot Password',
		},
		component: () => import('~/views/user/ForgotPassword.vue'),
	},
	{
		path: '/user/change-password',
		name: 'change-password',
		meta: {
			title: 'Change Password',
		},
		component: () => import('~/views/user/ChangePassword.vue'),
	},
	{
		path: '/user/user-manage',
		name: 'user-manage',
		meta: {
			title: 'User Manage',
			anyCan: ['super', 'admin', 'manager'],
		},
		component: () => import('~/views/user/UserManage.vue'),
	},
	{
		path: '/admin/files-manager',
		name: 'files-manager',
		meta: {
			title: 'Files Manager',
			anyCan: ['super', 'admin'],
		},
		component: () => import('~/views/core/FilesManager.vue'),
	},
	{
		path: '/admin/setting-manager',
		name: 'setting-manager',
		meta: {
			title: 'Setting Manager',
			anyCan: ['super', 'admin'],
		},
		component: () => import('~/views/core/SettingManager.vue'),
	},
	{
		path: '/unauthorized',
		name: 'unauthorized',
		meta: {
			title: 'Unauthorized',
		},
		component: () => import('~/components/layouts/Unauthorized.vue'),
	},
	{
		path: '/admin/roles-manager',
		name: 'roles-manager',
		meta: {
			title: 'Roles Manager',
			anyCan: ['super', 'admin'],
		},
		component: () => import('~/views/core/RolesManager.vue'),
	},
	{
		path: '/module',
		name: 'app-list',
		meta: {
			title: 'App List',
		},
		component: () => import('~/views/modules/AppList.vue'),
	},
	{
		path: '/module/app-viewer',
		name: 'app-viewer',
		meta: {
			title: 'App Viewer',
		},
		component: () => import('~/views/modules/AppViewer.vue'),
	},
	{
		path: '/sdform/public-app',
		name: 'public-app',
		meta: {
			title: 'Public App',
		},
		component: () => import('~/views/modules/PublicApp.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

router.beforeEach(async (to, from) => {
	//before load page
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/user/login', '/user/register', '/user/forgot-password', '/user/confirm', '/sdform/public-app'];
	const authRequired = !publicPages.includes(to.path);
	const userState = useConnectStateStore();
	const appState = useAppStateStore();
	appState.loading = true;

	if (authRequired && !userState.user) {
		userState.returnUrl = to.fullPath;
		return '/user/login';
	} else if (publicPages.includes(to.path) && !!userState.user) {
		return '/';
	}
});

router.afterEach((to, from) => {
	//after load page
	const appState = useAppStateStore();
	appState.loading = false;
});
