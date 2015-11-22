var path = require('path');

module.exports = {

    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './js/main.js'
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
    }
};
