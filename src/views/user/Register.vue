<template>
	<el-row class="mt-5 mb-10">
		<el-col :xs="0" :sm="5" :md="7" :lg="8" :xl="9"></el-col>
		<el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="6">
			<el-card shadow="never" class="box-card" header="Sign Up">
				<UserForm :user-model="userModel" :is-insert="true" :is-register="true" />
			</el-card>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import UserForm from './UserForm.vue';
import { reactive } from 'vue';

const userModel = reactive<any>({
	username: null,
	password: null,
	confirmPassword: null,
	email: null,
	profile: {
		fname: null,
		lname: null,
		tel: null,
		avatar: [],
	},
});
</script>
