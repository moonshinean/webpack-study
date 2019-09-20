const path = require('path')
// 这个配置文件，起始就是一个JS文件，通过 Node 中的模块操作，向外暴露一个配置对象
module.exports = {
      //  在配置文件中， 需要手动去指定 出口和入口
      entry:  path.join(__dirname, './src/main.js'),// 入口，表示要打包那个文件。 
      output: {
          path: path.join(__dirname, './dist'), //制动 打包好的文件，输出到那个目录中去
          filename: 'bundle.js' // 这个是指定输出的文件名称
      },
      mode: 'development' // 设置mode
}

// 当我们在控制台， 直接输入，webpack 命令执行的时候， webpack 做了一下几步
// 1、首先 ，webpack 发现，我们并没有通过命令的形式， 给他指定入口和出口
// 2、webpack 就会去项目的根目录 中去查找一个 webpack.config.js 的配置文件
// 3、当找到配置文件后， webpack 回去解析执行这个配置文件，当解析执行完配置文件后， 就得到了 配置文件中，
// 导出的配置对象
// 4、当 webpack 拿到 配置对象后， 就拿到了 配置对象中，指定的入口 和出口，然后进行打包构建