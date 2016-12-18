let webpack = require("webpack");
let htmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");
let bulildPath = path.resolve(__dirname,"build");

module.exports = {
    entry: "./src/js/route/main.js",
    output : {
        path: bulildPath,
        filename: "build.js"
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
        template:'./template.html',
        favicon:"test.ico",
        // inject: true,
        // minify: {
        //     removeAttributeQuotes: true // 移除属性的引号
        // }
    }),
    new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        }),
    // new webpack.optimize.UglifyJsPlugin({
    // compress: {
    //   warnings: false
    //     }
    // }),
    new webpack.NoErrorsPlugin(),
    new webpack.BannerPlugin("json-hb")
    ]
}