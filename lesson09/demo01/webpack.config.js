const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    mode:"development",
    entry:'./src/index.js',
    devServer: {
        contentBase: './dist',
        hot: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
            }),
        new webpack.HotModuleReplacementPlugin()
    ]
}