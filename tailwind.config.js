const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",

    important: true,

    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue"
    ],

    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {
            colors: {
                rose: colors.rose
            }
        }
    },

    variants: {
        extend: {}
    },

    plugins: []
};
