const DataModel = require('../models')
const User = DataModel.User
const Verfiy = require('../util/verfiy')
const md5 = require('md5-node')

exports.users = (req, res, next) => {
  res.send('respond with a resource');
}

exports.register = (req, res, next) => { // 用户注册
  const userInfo = req.body
  const result = Verfiy.verfiyUserInfo(userInfo)
  if (result.code == -1) {
    return res.json(result)
  }
  User.findOne({
    email: userInfo.email
  }).then(data => {
    if (!data) {
      return new User({
        email: userInfo.email,
        username: userInfo.email,
        password: md5(md5(userInfo.password))
      }).save()
    } else {
      return Promise.reject()
    }
  }).then(() => {
    res.json({
      code: 0,
      msg: '注册成功'
    })
  }).catch(err => {
    res.json({
      code: -1,
      msg: '注册失败,该用户已存在'
    })
  })
}

exports.login = async (req, res, next) => {
  const userInfo = req.body
  const result = Verfiy.verfiyUserInfo(userInfo)
  if (result.code == -1) {
    return res.json(result)
  }

  const findResult = await User.findOne({
    email: userInfo.email,
    password: md5(md5(userInfo.password))
  })
  
  if (!findResult) {
    return res.json({
      code: -1,
      msg: '用户名或密码错误'
    })
  } else {
    req.session.userinfo = userInfo
    return res.json({
      code: 0,
      msg: '登录成功'
    })
  }
  
}

exports.getinfo = (req, res, next) => {
  console.log(req.session)
  if (req.session.userinfo) {}
}
