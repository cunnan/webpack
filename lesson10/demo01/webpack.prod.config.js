const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

const dist_dir = 'dist_prod'

module.exports=merge(base,{
    mode:"production",
    output:{
        path:path.resolve(__dirname,dist_dir)
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'PROD MODE',
            template:'./src/index.html',
          
        }),
    ]
})