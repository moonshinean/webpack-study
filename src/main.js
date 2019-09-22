//  这是 mian.js  是我么项目的Js入口
// 1、导入Jquery

// import *** from ***  是Es6 中模块导入的方式

// 由于ES6的代码 ， 太高级了 ，浏览器解析不了， 所以，这一执行会报错。
import $ from 'jquery'

// 使用 import 语法，导入 css 样式表。
import './css/index.css'

import './css/index.less'
import './css/index.sass'
// 注意： webpack，默认只能打包处理Js 类型的文件，无法处理 其他非js类型的文件；
// 如果要处理 非JS类型的文件，我们需要手动安装一些 合适的 第三方 loader 加载器；
// 1、如果箱套打包处理css文件，需要手动安装 npm i style-loader css-loader -D
// 2、打开 webpack.config.js 这个配置文件，在里面，新增一个配置节点，叫做 module，它是一个对象
// 在这个module 对象身上，有个rules属性， 这个rules 属性是个数组，这个数组中，存放了，所有第三方文件的匹配和处理规则;


// 注意：webpack 处理第三方文件类型的过程
// 1、发现这个 需要处理的文件是不是JS文件， 然后就去 配置文件中，查找有没有对应的第三方 loder 规则
// 2、如果能找到对应的规则，就会调用对应的 loader 处理，这种文件类型；
// 3、在调用loader 的时候，是从后往前调用的：
// 4、当最后一个loader 调用完毕，会把处理的结果，直接交给webpack 进行打包合并。 最终输出到 bundle.js中去

$(function(){
    $('li:odd').css('background', 'green');
    $('li:even').css('background', function(){
        return '#' +'D97634'
    });
})


// 经过刚才的演示 ，webpack 可以做什么事情？？

// 1、webpack 能够处理 JS 文件的相互依赖关系
// 2、webpack 能够处理JS 的兼容问题， 把高级的、浏览器不能识别的语法，转为 低级的、 浏览器能识别的语法

// 钢刚才运行的命令是： webpack  要打包的文件地址   打包好的文件地址


// 使用 webpack-dev-server 这个工具，来实现自动打编译的功能
// 1、运行 npm i webpack-dev-server -D 把这个工具安装到项目本地开发依赖
// 2、安装完毕后，这个 工具的用法，和webpack 命令的用法，完全一样
// 3、由于是在本地安装的 webpack-dev-server，所以无法当做脚本命令在终端中直接运行；(只有安装到全局-g的工具，才能在终端中正常执行)
// 4、注意： webpack-dev-server 这个工具, 如果想要正常运行， 需求，在本地项目中，需要在安装webpack
// 5、webpack-dev-server 帮我们 打包生成的 bundle.js 文件，并没有存放在 实际的 物理磁盘；而是，直接托管到了 电脑内存中 ，
// 所以，我们在项目根目录中,根本找不到这个打包好的 bundle.js
// 6、我们可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了咱们的项目的根目录中，虽然我们看不见它，但是，可以认为  和dist
// src node_modules 平级，有一个看不见的文件, 叫做 bundle.js