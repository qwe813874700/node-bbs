const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log('数据库连接成功')
}).catch(err => {
  console.log(err)
})

exports.User = require('./user')
exports.Topic = require('./topic')