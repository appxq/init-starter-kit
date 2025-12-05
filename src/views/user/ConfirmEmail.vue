<template>
	<el-row class="mt-5 mb-10">
		<el-col :xs="0" :sm="5" :md="7" :lg="8" :xl="9"></el-col>
		<el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="6">
			<el-card shadow="never" class="box-card" header="Confirm E-Mail">
				<el-alert v-if="!verifyToken || !verifySuccess" title="Verify Token invalid" type="error" show-icon :closable="false" />
				<el-alert v-if="!!verifyToken && verifySuccess" title="Thank you for signing up." type="success" show-icon :closable="false" />
			</el-card>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import {} from '~/utils/Util';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { API_URL } from '~/config/AppConfig';
import { ElMessage } from 'element-plus';

const route = useRoute();
const verifyToken = ref(!!route.query.token ? route.query.token : null);
const verifySuccess = ref(false);

onMounted(() => {
	if (!!verifyToken.value) {
		axios
			.post(`${API_URL}/user/confirm-email`, { verifyToken: verifyToken.value })
			.then((response) => {
				// If the login is successful, save the user data and token
				if (response.data.verify) {
					verifySuccess.value = true;
				} else {
					verifySuccess.value = false;
				}
			})
			.catch((error) => {
				// If the login fails, display an error message
				// console.log(error);
				verifyToken.value = null;
				verifySuccess.value = false;
				if (!!error.response && !!error.response.data && !!error.response.data.message) {
					ElMessage.warning(error.response.data.message);
				} else {
					ElMessage.warning(error.message);
				}
			});
	}
});
</script>
