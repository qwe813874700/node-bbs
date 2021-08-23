/**
 * @class 请求类
 * @description 将所有请求封装到这
 */
import request from 'api/request/request'
import store from '@/store'

class Request {
  register(data) {
    return request({
      url: '/users/register',
      method: 'post',
      data
    })
  }
  login(data) {
    return request({
      url: '/users/login',
      method: 'post',
      data
    })
  }
  getinfo(data) {
    return request({
      url: '/users/getinfo',
      method: 'get',
      data
    })
  }
}

export default Request
