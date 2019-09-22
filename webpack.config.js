const path = require('path');

// 启用热更新的 第2步
// const webpack = require('webpack')(webpack 4版本的不需要直接使用 host：true 就可以了)

// 导入在内存中生成的HTML 页面的插件
// 只要是插件，都一定要放到 plugins: 中去

// 这个插件的两个作用：
// 1、自动在内存中根据指定的页面生成一个内存的页面，
// 2、自动，把打包好的 bundle.js 追加到页面中。
const htmlWebpackPlugin = require('html-webpack-plugin')
// 这个配置文件，起始就是一个JS文件，通过 Node 中的模块操作，向外暴露一个配置对象
module.exports = {
      //  在配置文件中， 需要手动去指定 出口和入口
      entry:  path.join(__dirname, './src/main.js'),// 入口，表示要打包那个文件。
      output: {
          path: path.join(__dirname, './dist'), //制动 打包好的文件，输出到那个目录中去
          filename: 'bundle.js' // 这个是指定输出的文件名称
      },
    //   mode: 'development' // 设置mode
    devServer:{   //这是配置 dev-serve 命令参数的第二中形式，相对来说，这种方式麻烦一些
        //    " --open --port 3000 --contentBase src --hot"
       open: true, // 自动打开浏览器
       port: 3000, //设置启动时候运行的端口
       contentBase: 'src', //指定托管的根目录
       hot: true  // 启动热更新
    },
    plugins: [  // 配置插件节点
        // new webpack.HotModuleReplacementPlugin(),   new 一个热更新的 模板对象 这是启用热更新的第三步 （适用于 webpack 3版本）
        new htmlWebpackPlugin({  // 穿件一个 在内存中 生成HTML 页面的插件
            template: path.join(__dirname, './src/index.html'), // 指定模板页面，将会根据指定的页面路径去生成内存中的页面
            filename: 'index.html'  // 指定生成页面的名称
        })
    ],
    module: { // 这个节点，用于配置 所有第三方模块 加载器
       rules: [  // 所有第三方模块 的 匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 配置处理 .css文件的第三方loader,
            // **注意： 此处 style-loader和css-loader顺序不能反(从后面直接调用到前面)
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 这是 配置less 第三方加载器 规则
            {test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader']},
             // 这是 配置sass 第三方加载器 规则
             {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=7631&name=[hash:8]-[name].[ext]']},
            //  图片配置 的loader
            // limit 给定的值，是图片的大小，单位是byte， 如果我们引用的 图片，大于或等于给定的limit值，
            // 则不会转为base64格式的字符串，如果 图片小于给定的 limit 值，则会被转为 base64 的字符串
            // name=[name].[ext]  表示图片原来的名字是什么名字，打包后名字不变，图片格式不变（此处为固定写法）
            // [hash:8] 表示在图片名字前面拼接8位任意的哈希值。
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},  // 处理字体文件
            // {test: /\.(ttf|eot|svg|woff|woff2)$/}
       ]
    }
}

// 当我们在控制台， 直接输入，webpack 命令执行的时候， webpack 做了一下几步
// 1、首先 ，webpack 发现，我们并没有通过命令的形式， 给他指定入口和出口
// 2、webpack 就会去项目的根目录 中去查找一个 webpack.config.js 的配置文件
// 3、当找到配置文件后， webpack 回去解析执行这个配置文件，当解析执行完配置文件后， 就得到了 配置文件中，
// 导出的配置对象
// 4、当 webpack 拿到 配置对象后， 就拿到了 配置对象中，指定的入口 和出口，然后进行打包构建
