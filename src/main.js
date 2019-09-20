//  这是 mian.js  是我么项目的Js入口
// 1、导入Jquery

// import *** from ***  是Es6 中模块导入的方式

// 由于ES6的代码 ， 太高级了 ，浏览器解析不了， 所以，这一执行会报错。
import $ from 'jquery'

$(function(){
    $('li:odd').css('background', 'red');
    $('li:even').css('background', function(){
        return '#' +'D97634'
    });
})


// 经过刚才的演示 ，webpack 可以做什么事情？？

// 1、webpack 能够处理 JS 文件的相互依赖关系
// 2、webpack 能够处理JS 的兼容问题， 把高级的、浏览器不能识别的语法，转为 低级的、 浏览器能识别的语法

// 钢刚才运行的命令是： webpack  要打包的文件地址   打包好的文件地址