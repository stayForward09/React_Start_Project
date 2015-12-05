var path = require('path');

var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/stylesheets/base.scss'),
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
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/static',
            to: '/'
        }]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('css/[name].css')
    ],

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true
    }
};
