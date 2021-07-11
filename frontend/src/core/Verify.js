/**
 * @class  校验
 * @description 一些常用的校验函数
 */

class Verify {

  /**
   * @description 校验是否存在空额
   * @param {String} str 需要检验的字符串
   */
  isHasSpace(str) {
    return str.indexOf(' ') > -1
  }
  /**
   * @description 校验密码是否符合
   * @param {String} password 用于密码的规则校验
   */
  verifyPasswordData(password) {
    if (password == '') {
      return {
        code: -1,
        msg: '请输入密码'
      }
    } else if (password.length < 6) {
      return {
        code: -1,
        msg: '密码长度至少为6位'
      }
    } else if (this.isHasSpace(password)) {
      return {
        code: -1,
        msg: '密码中不能含有空格'
      }
    } else {
      return {
        code: 0
      }
    }
  }
}

export default Verify
