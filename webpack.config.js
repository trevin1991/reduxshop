module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
/*
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_moduldes/,
            loader: 'babel-loader'
        }]
*/
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};