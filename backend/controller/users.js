const DataModel = require('../models')
const User = DataModel.User
const Verfiy = require('../util/verfiy')

exports.users = (req, res, next) => {
  res.send('respond with a resource');
}

exports.register = (req, res, next) => {
  const userInfo = req.body
  if (!userInfo.email || !userInfo.password) {
    return res.json({
      code: -1,
      msg: '账号或密码不能为空'
    })
  }

  if (!Verfiy.isEmail(userInfo.email)) {
    return res.json({
      code: -1,
      msg: '用户名只能为邮箱地址'
    })
  }

  if (userInfo.email.length < 6) {
    return res.json({
      code: -1,
      msg: '密码至少为6位'
    })
  }

  User.findOne({
    email: userInfo.email
  }).then((data) => {
    if (!data) {
      
    }
  }).catch(err => {

  })


}