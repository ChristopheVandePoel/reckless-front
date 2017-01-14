var path = require('path'),
    src = path.join(__dirname, 'src'),
    build = path.join(__dirname, 'build');

var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'app': path.join(src, 'index.ts')
    },
    output: {
        path: build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: [
                /node_modules/
            ]
        }, {
            test: /\.html$/,
            loader: 'raw'
        },],
        noParse: [/angular2\/bundles\/.+/],
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html']
    },
    plugins: [new HtmlWebpackPlugin()]
}