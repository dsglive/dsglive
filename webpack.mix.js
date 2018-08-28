let mix = require("laravel-mix");

/* Allow Us To Compile Stylus in app.js */
mix.webpackConfig({
    // added support for inline source map
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            }
        ]
    },
    resolve: {
        /* Path Shortcuts */
        alias: {
            /* root */
            "~": path.resolve(__dirname, "resources/assets/js"),
            Components: path.resolve(__dirname, "resources/assets/js/components"),
            Routes: path.resolve(__dirname, "resources/assets/js/routes"),
            Pages: path.resolve(__dirname, "resources/assets/js/pages"),
            /* vuex modules */
            Modules: path.resolve(__dirname, "resources/assets/js/modules"),
            Layouts: path.resolve(__dirname, "resources/assets/js/layouts"),
            Partials: path.resolve(__dirname, "resources/assets/js/partials"),
            Services: path.resolve(__dirname, "resources/assets/js/services"),
            Api: path.resolve(__dirname, "resources/assets/js/api"),
            Mixins: path.resolve(__dirname, "resources/assets/js/mixins"),
            /* Jquery Plugins */
            Plugins: path.resolve(__dirname, "resources/assets/js/plugins")
        }
    }
});
mix.options({
    extractVueStyles: false,
    processCssUrls: true,
    purifyCss: false,
    uglify: {
        uglifyOptions: {
            // fixes error on sweetalert2
            compress: {
                unused: false
            }
        }
    },
    postCss: []
});
mix.js("resources/assets/js/app.js", "public/js");
mix.sass("resources/assets/sass/app.scss", "public/css");
// turn on sourcemap for this feature branch for debugging purposes
mix.sourceMaps();

if (mix.inProduction()) {
    /* extract all vendor */
    //! This Will Cause Error if You Are running 'npm run dev'
    //! Only Use This For Production
    mix.extract(["axios", "vue", "vuetify"]);
    mix.version();
    mix.disableNotifications();
}
