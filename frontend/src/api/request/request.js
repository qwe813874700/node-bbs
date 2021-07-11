import axios from 'axios'

const server = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

server.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err);
})

axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default server