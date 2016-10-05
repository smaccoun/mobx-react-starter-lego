const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {CLIENT, DIST, ICONS} = require('./paths');
const {preLoaders, loaders} = require('./webpack-loaders')


module.exports = {
    output: {
        filename: '[name].js',
        path: DIST
    },

    module: {

      preLoaders: [preLoaders.lint],

        loaders: [
          loaders.js,
          loaders.css,
          loaders.vendorCss,
          loaders.images,
          loaders.fonts
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    // Process the CSS with PostCSS
    postcss: () => [
        require('precss')(),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', 'ie > 10']
        }),
        require('postcss-reporter')({ // Posts messages from plugins to the terminal
            clearMessages: true
        })
    ],

    plugins: [
        new HtmlPlugin({
            title: 'Photo Organizer',
            template: `${CLIENT}/index.html`,
            favicon: `${ICONS}/favicon.ico`,
            inject: true
        })
    ]
};
