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

        // this is the default name, so you can skip it
        // at this directory our bundle file will be available
        // make sure port 8090 is used when launching webpack-dev-server
        // publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
