var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); //通过npm安装的
var webpack = require("webpack");//访问内置的插件
module.exports = {
   // entry:'./app/index.js',  //入口文件  也可以是一个数组 {main:'index.js',test:'join.js'}
    entry:{
        index:'./app/index.js',
        search:'./app/search.js'
    },
    output:{
        filename:'[name].js',     //转换成多个输出文件
        path:path.resolve(__dirname,'dist')
    }, //loader 用于对模块的源代码进行转换
    module:{
        rules:[
            {test:/\.css$/,use:'css-loader'},
            {test:/\.ts$/,loader:'ts-loader'},
            {test:/\.css$/,use: 
                [{loader:'style-loader'},
                 {
                 loader:'css-loader',
                 options:{
                     modules:true
                    }
                }
             ]
           }
        ]
    },
    plugin:[
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template:'./index.html '})
    ]
    
}