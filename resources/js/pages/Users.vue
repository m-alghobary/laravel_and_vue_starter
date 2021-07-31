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
                <v-text-field
                    v-model="search"
                    label="Search"
                    dense
                    outlined
                    hide-details
                    append-icon="mdi-magnify"
                ></v-text-field>
                <v-spacer class="hidden sm:block"></v-spacer>
            </v-toolbar>

            <v-divider />

            <v-data-table :headers="headers" :items="users">
                <template #item.image="{ value }">
                    <v-avatar size="36px">
                        <v-img :src="randomAvatar()"></v-img>
                    </v-avatar>
                </template>

                <template #item.actions="{ item }">
                    <app-action-btn>Edit</app-action-btn>
                </template>
            </v-data-table>
        </v-card>
    </app-layout>
</template>

<script>
import AppActionBtn from "../components/AppActionBtn.vue";
import AppLayout from "../components/AppLayout.vue";
import { usersActions } from "../store/mapper";

export default {
    components: { AppLayout, AppActionBtn },
    name: "Users",

    data: () => ({
        search: "",
        loading: false,
        users: [],
        headers: [
            { text: "NO", value: "id" },
            { text: "Profile", value: "image" },
            { text: "User name", value: "name" },
            { text: "Email", value: "email" },
            { text: "Phone", value: "phone" },
            { text: "Role", value: "role" },
            { text: "Actions", value: "actions" }
        ]
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
            const rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            return `https://randomuser.me/api/portraits/men/${rand}.jpg`;
        }
    }
};
</script>

<style lang="scss" scoped></style>
