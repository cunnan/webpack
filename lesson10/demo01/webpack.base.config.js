const CleanWebpackPlugin=require('clean-webpack-plugin');

const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin')
module.exports={
   entry:{
       index:"./src/index.js"
   },
  
   module:{
       rules:[
           {
               test:/\.css$/,
               use:ExtractTextWebpackPlugin.extract({
                   fallback:'style-loader',
                   use:'css-loader'
               })
           },
           {
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })
           },
           {
                test:/\.(png|jpg|jpeg|svg|gif)/,
                use:'file-loader'
           }
       ]
   },
   plugins:[
        new CleanWebpackPlugin(),
      
       new ExtractTextWebpackPlugin("styles.css"),
   ]
}