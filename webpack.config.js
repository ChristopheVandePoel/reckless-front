var path = require('path'),
    src = path.join(__dirname, 'src'),
    build = path.join(__dirname, 'build');

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
        }],
        noParse: [/angular2\/bundles\/.+/],
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
}