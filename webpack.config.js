const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/popup.js',
eslint: { configFile: '.eslintrc' },

    output: {
        path: './bin',
        filename: 'bundle.js'
    },

    devtool: "source-map",

    module: {
        loaders: [{
            test: /.jsx?$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, 
         {
        test: /\.less$/,
        loader: "style!css!less"
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

    plugins: [new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "React": "react"
    })],

    resolve: {
        root: path.join(__dirname, 'src'),
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
};
