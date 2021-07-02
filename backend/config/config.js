/**
 * config 所有需要配置的参数全都放在这里, 后续直接配置就可直接使用
 */

const path = require('path')

module.exports = {
  db: 'mongodb://localhost/nodebbs', // 数据库地址,
  port: 3000 // 程序运行的端口
}