/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-09-16 09:58:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 14:54:21
 */
//安装所有的包都要注意版本，不要随意安装
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve (dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    entry: {
        main: './src/main',
    },
    output: {
        path: resolve('dist'),
        filename: "bundle.js",
        // publicPath:"dist/"  //这里不配置publicPath，容易导致dist/dist，目录重叠

    },

    module: {
        rules: [           
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除这些文档，也可以设置include
                use: {
                    loader: 'babel-loader',
                    //注意包和vue-cli的区别和版本，安装时-D
                    // "@babel/core": "^7.19.1",
                    // "@babel/preset-env": "^7.19.1",
                    // "babel-loader": "^8.2.5",
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"]
            },
            {
                test: /\.less/,
                use: [ "style-loader", "css-loader", 'less-loader']
            },            
            {
                test: /\.(gif|jpg|JPEG|png)\??.*$/,  
                use: [
                    {
                      loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
                      // 配置limit, 超过8k, 不转64base格式, 
                      //而使用file-loader复制, 随机名, 输出文件
                      //file-loader不需要特别配置，只需要安装一下就可以了
                      options: {
                        limit: 8 * 1024,
                        name: 'assets/images/[name].[ext]',//将图片文件统一保存至assets/images文件夹
                      },
                    },
                  ],           
            },
            { // 字体图标打包到font目录
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1 * 1024,//超过1k, 不转64base格式, 
                            // 配置输出的文件名
                            name: 'assets/fonts/[name].[ext]',
                        }
                    }
                ]
            }
           
        ]
    },
//     resolve: {
//         extensions: ['.js', '.vue'],
//         alias: {
//             'vue': 'vue/dist/vue.esm.js',
//             '@': resolve('../src'),
//             '@views': resolve('../src/views'),
//             'assets': resolve('../src/assets/'),
//             'store': resolve('../src/store/'),
//             'jquery': resolve('../src/common/js/jquery.js')
//         }
//     },
    // 增加一个plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',//需要在html中配置<title><%= htmlWebpackPlugin.options.title %></title>
            filename:'index.html',
            template: './public/index.html', // 以此为基准生成打包后html文件，打包的js文件会默认引入对应的html文件            
        })
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
        // new CleanWebpackPlugin('dist/*.*', {
        //     root: __dirname,
        //     verbose: true,
        //     dry: false
        // })
   ],
};