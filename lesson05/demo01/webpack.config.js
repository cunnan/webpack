const path=require('path')
module.exports={
    entry:{
        index:"./src/index.js",
        home:"./src/home.js",
        setting:"./src/setting.js"
    },
    mode:"development",
    output:{
        filename:"[name]_[hash:6]_bundle.js",
        path:path.join(__dirname,'release'),
        //publicPath: 'https://cdn.example.com/assets/'
    }
}