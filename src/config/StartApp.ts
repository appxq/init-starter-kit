import { ProviderType, type SdProvider } from '~/types/SdGridType';
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

export const initApp = async function () {
	try {
		const appState = useAppStateStore();
		await appState.getParams();

		const userState = useConnectStateStore();
		await userState.refreshToken();

		if (!!userState.user && !!userState.user.token) {
			const dpRoles: SdProvider = {
				providerId: 'getroles-all',
				providerType: ProviderType.SYS,
			};

			await userState.crudGetAll(
				{ sdProvider: dpRoles, totalEnable: false },
				(reply: any) => {
					appState.roles = reply.data.map((item: any) => {
						return item.role_name;
					});
				},
				() => {
					appState.roles = [];
				}
			);
		}
	} catch {
		// catch error to start app on success or failure
	}
};

export const getUser = function () {
	try {
		const userState = useConnectStateStore();
		let user = userState.user;
		if (user != null) {
			return user;
		}
		return {};
	} catch {
		// catch error to start app on success or failure
		return {};
	}
};
