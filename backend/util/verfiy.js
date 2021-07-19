const isEmail = (str) => {
  return /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(str)
}

const verfiyUserInfo = (userInfo) => {
  console.log(userInfo)
  if (!userInfo.email || !userInfo.password) {
    return {
      code: -1,
      msg: '账号或密码不能为空'
    }
  }
  if (!isEmail(userInfo.email)) {
    return {
      code: -1,
      msg: '用户名只能为邮箱地址'
    }
  }
  if (userInfo.email.length < 6) {
    return {
      code: -1,
      msg: '密码至少为6位'
    }
  }
  return {
    code: 0
  }
}



module.exports = {
  isEmail,
  verfiyUserInfo
}