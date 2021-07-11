/**
 * @class 请求类
 * @description 将所有请求封装到这
 */
import request from 'api/request/request'


class Request {
  register(data) {
    return request({
      url: '/users/register',
      method: 'post',
      data
    })
  }
}

export default Request
