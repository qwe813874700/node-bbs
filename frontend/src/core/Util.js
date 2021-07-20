/**
 * @class 工具类
 * @description 一些常用的工具函数
 */

class Util {
  constructor() {
    this.loginToken = 'LOGIN_TOKEN'
  }
  setToken(token) {
    localStorage.setItem(this.loginToken, token)
  }
  getToken() {
    return localStorage.getItem(this.loginToken)
  }
}

export default Util

