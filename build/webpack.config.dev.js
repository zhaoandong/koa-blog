var webpack = require("webpack"),
    path = require("path"),
    assets = path.resolve(__dirname, "../"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    AssetsWebpackPlugin = require('assets-webpack-plugin');
    // ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = Object.assign({}, {
    devtool: "source-map",
    devServer: "../assets/dist",
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css') 
    ],
    entry: {
      'index': [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/js/index.js']
    },
    output: {
        path: "/public/",
        filename: "[name].js",
        publicPath: "/public/"
    },
    module:{
        loaders:[{
            test:/\.js$/,
            loader:"babel-loader",
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(['css','sass'])
        },
        {
            test: /\.(png|jpg|jpeg)(\?.*)?$/,
            loader: 'url?limit=5120'
        },
        {
            test: /\.tpl$/,
            loader: 'html'
        }]
    }
});