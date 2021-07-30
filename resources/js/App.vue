<template>
    <v-app>
        <v-app-bar app flat class="border-b border-gray-200"> </v-app-bar>

        <the-app-sidebar />

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TheAppSidebar from "./components/TheAppSidebar.vue";

export default {
    name: "App",

    components: {
        TheAppSidebar
    }
};
</script>

<style lang="scss" scoped></style>
