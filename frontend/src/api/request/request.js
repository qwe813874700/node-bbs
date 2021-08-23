import axios from 'axios'
import store from '@/store'

const server = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

server.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, (err) => {
  return Promise.reject(err);
})

server.interceptors.response.use((response) => {
  
  // 对响应数据做点什么
  return Promise.resolve(response.data);
}, (error) => {
  console.log(error)
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default server
