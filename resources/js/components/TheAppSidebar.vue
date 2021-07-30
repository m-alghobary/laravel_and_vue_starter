<template>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        app
    >
        <v-list-item class="px-2 py-[3.5px]">
            <v-list-item-avatar>
                <v-img
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                ></v-img>
            </v-list-item-avatar>

            <v-list-item-title>John Leider</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-item-group color="primary">
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    :to="item.to"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "TheAppSidebar",

    data: () => ({
        drawer: true,
        items: [
            { title: "Home", icon: "mdi-home-city", to: "/" },
            { title: "Users", icon: "mdi-account-group-outline", to: "/users" }
        ],
        mini: true
    })
};
</script>

<style lang="scss" scoped></style>
