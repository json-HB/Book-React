let webpack = require("webpack");
let htmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");
let bulildPath = path.resolve(__dirname,"build");

module.exports = {
    entry: {
        // polyfill: ['babel-polyfill']     //如果是要强力增强兼容性，比如要在低版本桌面浏览器上用，就加上'babel-polyfill'，把整个babel环境都打进去
        vendor: ['react', 'react-dom'],
        router: ['react-router'],
        app: "./src/js/route/main.js"
    },
    output : {
        path: bulildPath,
        filename: "[name].js"
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loaders:["style","css"]
        },
        {
            test:/\.js|jsx$/,
            loader:"babel-loader",
            exclude:/node_modules/,
            query:{
                "presets":["react","es2015","stage-1"],
                    "plugins": ["transform-decorators-legacy",['import', [
                  {
                    "libraryName": "antd",
                    "libraryDirectory": "lib", 
                    "style": true
                  },
                  {
                    "libraryName": "antd-mobile",
                    "libraryDirectory": "lib",
                    "style": true
                  }]
                  ]]
            }
        },
        {
            test:/\.less$/,
            loaders:['style','css','less']
        },
        { test:/\.(png|woff|svg|ttf|eot)$/,loader:'url-loader?limit=10000'}
        ]
    },
    resolve:{
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions:["",".web.js",".js",".json",".less",".jsx"]
    },
    plugins:[
    new htmlWebpackPlugin({
        title:"book-react",
        hash:true,
        template:'./build.html',
        favicon:"test.ico",
        inject: true,
        minify: {
            removeAttributeQuotes: true // 移除属性的引号
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
        }
    }),
    new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
    // 去重插件
        new webpack.optimize.DedupePlugin(),

    new webpack.NoErrorsPlugin(),
    new webpack.BannerPlugin("json-hb"),
      new webpack.optimize.CommonsChunkPlugin({
            name: ['router', 'vendor'],
            minChunks: Infinity
        }),
    ]
}