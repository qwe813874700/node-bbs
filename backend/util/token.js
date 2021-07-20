const jwt = require('jsonwebtoken')

const jwtScrect = 'bbs_token'

const setToken = (username, userid) => {
  return new Promise((reslove, reject) => {
    const token = jwt.sign({
      username,
      userid
    }, jwtScrect, {
      expiresIn: '24h'
    })
    reslove(token)
  })
}

const getToken = (token) => {
  return new Promise((reslove, reject) => {
    if (!token) {
      reject({
        error: 'token为空'
      })
    } else {
      const info = jwt.verify(token, jwtScrect);
      reslove(info)
    }
  })
}

const verfiyToken = (req, res, next) => {
  const token = req.headers['authorization']
  if (token == undefined) {
    return next();
  } else {
    getToken(token).then(data => {
      req.data = data
      return next()
    }).catch(err => {
      return next()
    })
  }
}

const resultToken = (err, req, res, next) => {
  if (err.status === 401) {
    return res.json({
      code: 401,
      msg: 'Token已失效'
    })
  }
}

module.exports = {
  setToken,
  getToken,
  verfiyToken,
  resultToken
}