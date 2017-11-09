var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './web/index.js',

    output: {
        path: path.resolve(__dirname, 'web/dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'web'),
        compress: true,
        port: 9001,
        host: 'localhost',
        open: true
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}