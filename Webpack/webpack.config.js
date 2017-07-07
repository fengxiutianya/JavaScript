var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    context:path.resolve(__dirname,'app'), //整个构建系统的上下文,需要在下面路径中加入 ./当前路径表示
    entry:
    {
          bootstrab:'./css.js',
          mon: './momenttest.js',
          js:'./js.js', 
          vendor: ['moment'],
        //   bootstrab:'bootstrab'
    },
    output:{
        //生产模式 增加开发时间,因为hash文件名是根据文件内容来生产文件名
        filename: '[name].js',     //转换成多个输出文件
        //开发模式
       // filename: '[name].[hash].js',     //转换成多个输出文件
        chunkFilename: "[name].js",
        path:path.resolve(__dirname,'dist'), //使用绝对路径
        pathinfo:true,     
    }, //loader 用于对模块的源代码进行转换
     module: {
        rules: [{
            test: /\.css$/,
            use:ExtractTextPlugin.extract({   //使用css-loader打包css文件
               use: 'css-loader'
            })
        },{  //用于加载字体替换
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[{
                   loader:'url-loader',
                   query:{
                        limit: 1000,
                        name: '/styles/fonts/[name].[hash].[ext]'
                   }
            
                }],

        }, {
            //用于加载图片替换
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                 loader: 'file-loader',
                 query:{
                    name: '/styles/imgs/[name].[hash].[ext]'
                    }
              }
            ]
      },{
          //csv文件加载
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {//xml文件加载
        test: /\.xml$/,
        use: 'xml-loader',
      },{
           test: /\.js$/,
            exclude: /(node_modules)/,   //指定引入的路径
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', {modules: false}]],
                    plugins: [
                        'syntax-dynamic-import',
                        'transform-async-to-generator',
                        'transform-regenerator',
                        'transform-runtime'
                        ]
                 }
             }]
           }
        
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/js.*.js','dist/bootstrab.*.js',
                'dist/vendor.*.js','dist/manifest.*.js','dist/mon.*.js'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false ,       　　　　　　　　　　//启用删除文件
                exclude:[]
            }
        ),
         new ExtractTextPlugin({
            filename:'styles/[name].css',
            
         }),   //单独打包css文件
         new webpack.ProvidePlugin({    //引入jquery之后定义新的命名空间
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
       //实现指定的类库分离成一个公用文件
       new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor','manifest'], // 指定公共 bundle 的名字。
                minChunks: Infinity
            }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest",
            inlineManifest: true
        }),
          
      
   ],
   watch:true,   //启动监听文件变化，进行自动编译
   watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,  //多长时间进行一次轮询
        ignored:/node_modules/,//忽略文件夹
    },
    devtool: "inline-source-map",
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        // progress:true,//报错无法识别，删除后也能正常刷新
    },

    
}