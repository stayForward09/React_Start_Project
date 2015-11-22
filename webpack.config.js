var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/static',
            to: '/'
        }])
    ],

    devServer: {
        historyApiFallback: true
    }
};
