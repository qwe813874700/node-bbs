module.exports = {
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