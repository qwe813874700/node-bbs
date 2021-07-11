const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src')) //根据目录的层级来决定，也可以自行设
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('api', resolve('./src/api'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "./src/assets/styles/variables.scss";
              @import "./src/assets/styles/mixin.scss";
            `
      }
    }
  },
  devServer: {
    port: 80,
    host: 'localhost',
    proxy: 'http://127.0.0.1:3000',
    https: false,
    open: true
  }
}