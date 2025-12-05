import { API_URL, APP_VERSION } from '~/config/AppConfig';
import { defineStore } from 'pinia';
import { type OptionsSetting } from '~/types/Setting';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { deepClone } from '~/utils/Util';

export const useAppStateStore = defineStore('appState', {
	state: () => ({
		isDark: true as any,
		optionsSetting: {} as OptionsSetting,
		appVersion: APP_VERSION,
		loading: false,
		title: '',
		settingData: [] as any[],
		params: {} as any,
		roles: [],
	}),
	actions: {
		async getParams() {
			await axios
				.get(`${API_URL}/core/setting/get-params`)
				.then((response) => {
					if (!!response.data && !!response.data.data) {
						this.settingData = deepClone(response.data.data);
						this.settingData.forEach((item: any) => {
							this.params[item.opts_code] = item.opts_value;
						});
					} else {
						this.params = {};
						this.settingData = [];
					}
				})
				.catch((error) => {
					this.params = [];
					this.settingData = [];
					if (!!error.response && !!error.response.data && !!error.response.data.message) {
						ElMessage.warning(error.response.data.message);
					} else {
						ElMessage.warning(error.message);
					}
				});
		},
		setParam(code: string, value: any) {
			this.params[code] = value;
		},
	},
});
