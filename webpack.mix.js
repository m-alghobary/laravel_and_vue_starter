const mix = require("laravel-mix");
require("vuetifyjs-mix-extension");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/main.js", "public/js")
    .vuetify("vuetify-loader", "resources/js/sass/variables.scss")
    .vue()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .browserSync("http://127.0.0.1:8000");
