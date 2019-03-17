const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

const dist_dir = 'dist_dev'

module.exports=merge(base,{
    mode:"development",
    output:{
        path:path.resolve(__dirname,dist_dir)
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'DEV MODE',
            template:'./src/index.html',   
        }),
    ]
})