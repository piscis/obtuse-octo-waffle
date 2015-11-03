var webpack = require('webpack');
module.exports = {
    entry: './app/app.tsx',
    output: {
        path: __dirname+'/build/',
        filename: 'app/bundle.js'
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    // Add minification
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.tsx$/, loader: 'ts' }
        ]
    }
}