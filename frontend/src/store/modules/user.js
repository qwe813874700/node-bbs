import * as types from '../modules-type'
import Util from '@/core/Util'

const util = new Util()

const User = {
  namespaced: false,
  state: {
    username: '',
    token: util.getToken() || ''
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    [types.SET_USER_TOKEN](state, data) {
      state.token = data
    }
  },
  actions: {
    succLogin({ commit }, data) {
      commit(types.SET_USER_TOKEN, data)
      util.setToken(data)
    }
  }
}

export default User
