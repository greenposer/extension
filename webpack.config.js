const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/js/popup.js',

    output: {
        path: './bin',
        filename: 'bundle.js'
    },

    devtool: "source-map",

    module: {
        loaders: [{
            test: /.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loader: "style-loader!css"
        },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "React": "react"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {configFile: '.eslintrc'}
            }
        })
    ],

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    }
};
