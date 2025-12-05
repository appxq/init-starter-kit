import { defineAclRules, createAcl } from 'vue-simple-acl';
import { type SdUserLogin } from '~/types/User';
import { computed } from 'vue';
import router from '~/routers';
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

const user = computed(() => useConnectStateStore().user);

const rules = () =>
	defineAclRules<SdUserLogin>(async (setRule) => {
		// setRule('unique-ability', callbackFunction(user, arg1, arg2, ...) { });
		// setRule(['unique-ability-1', 'unique-ability-2'], callbackFunction(user, arg1, arg2, ...) { });
		// Define a simple rule for ability with no argument
		const appState = useAppStateStore();
		const params: any = appState.params;

		let roles = ['super', 'admin', 'manager', 'auth', 'user', 'guest'];
		if (!!params['sys_roles_list'] && Array.isArray(params['sys_roles_list'])) {
			roles = params['sys_roles_list'];
		}

		roles = roles.concat(appState.roles);

		roles.forEach((item: any, index: number) => {
			setRule(item, (user) => !!user.roles && user.roles.includes(item));
		});
	});

const acl = createAcl({
	user, // short for user: user
	rules, // short for rules: rules
	router,
	// other optional vue-simple-acl options here ...
	onDeniedRoute: '/unauthorized',
});

export default acl;
