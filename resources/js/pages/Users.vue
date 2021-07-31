<template>
	<app-layout title="Users">
		<template #actions>
			<v-btn color="primary">
				<v-icon class="d-none d-sm-block me-2">mdi-plus</v-icon>
				<v-icon class="d-sm-none d-block">mdi-plus</v-icon>
				<span class="d-none d-sm-block"> New User </span>
			</v-btn>
		</template>
		<v-card>
			<v-toolbar flat color="white">
				<v-text-field v-model="search" label="Search" dense outlined hide-details append-icon="mdi-magnify"></v-text-field>
				<v-spacer class="hidden sm:block"></v-spacer>
			</v-toolbar>

			<v-divider />

			<v-data-table :loading="loading" :headers="headers" :items="users" :class="{ 'users-table': !loading }" :search="search">
				<template #item.image="{ value }">
					<v-avatar size="36px">
						<v-img :src="randomAvatar()"></v-img>
					</v-avatar>
				</template>

				<template #item.age="{ value }">
					{{ `${value} years` }}
				</template>

				<template #item.role="{ value }">
					<v-chip outlined :color="value === 1 ? 'success' : 'info'" small>
						{{ value === 1 ? 'Admin' : 'Writer' }}
						<v-icon right> {{ value === 1 ? 'mdi-account-tie' : 'mdi-fountain-pen-tip' }} </v-icon>
					</v-chip>
				</template>

				<template #item.actions="{ item }">
					<div class="space-x-2">
						<app-action-btn>Edit</app-action-btn>
						<app-action-btn icon="mdi-delete" color="error">Delete</app-action-btn>
					</div>
				</template>
			</v-data-table>
		</v-card>
	</app-layout>
</template>

<script>
import AppActionBtn from '../components/AppActionBtn.vue';
import AppLayout from '../components/AppLayout.vue';
import { usersActions } from '../store/mapper';

export default {
	components: { AppLayout, AppActionBtn },
	name: 'Users',

	data: () => ({
		search: '',
		loading: false,
		users: [],
		headers: [
			{ text: 'NO', value: 'id' },
			{ text: 'Profile', value: 'image' },
			{ text: 'User name', value: 'name' },
			{ text: 'Email', value: 'email' },
			{ text: 'Age', value: 'age' },
			{ text: 'Phone', value: 'phone' },
			{ text: 'Role', value: 'role' },
			{ text: 'Actions', value: 'actions' },
		],
	}),

	computed: {},

	async created() {
		this.loading = true;

		try {
			this.users = await this.getUsers();
		} catch (err) {
			console.log(err);
		} finally {
			this.loading = false;
		}
	},

	methods: {
		...usersActions,

		randomAvatar() {
			const rand = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
			return `https://randomuser.me/api/portraits/men/${rand}.jpg`;
		},
	},
};
</script>

<style lang="scss">
.users-table thead > tr:last-child > th {
	border-bottom: 4px solid rgba(0, 0, 0, 0.12) !important;
}
</style>
