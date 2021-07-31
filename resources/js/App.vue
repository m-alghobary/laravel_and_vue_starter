<template>
    <v-app>
        <v-app-bar app flat class="border-b border-gray-200">
            <h3 class="text-lg uppercase font-medium tracking-wide">
                <span class="text-rose-600 font-semibold">S</span>tudy
                <span class="text-rose- font-semibold">C</span>enter
            </h3>
        </v-app-bar>

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
