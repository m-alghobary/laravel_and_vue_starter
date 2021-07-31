<template>
    <v-tooltip top>
        <template #activator="{ on }">
            <v-btn
                icon
                small
                outlined
                :color="color"
                v-on="{ ...$listeners, ...on }"
            >
                <v-icon size="14"> {{ icon }} </v-icon>
            </v-btn>
        </template>
        <span> <slot /> </span>
    </v-tooltip>
</template>

<script>
export default {
    name: "AppActionBtn",

    props: {
        color: {
            type: String,
            default: "success"
        },

        icon: {
            type: String,
            default: "mdi-pencil"
        }
    }
};
</script>

<style lang="scss" scoped></style>
