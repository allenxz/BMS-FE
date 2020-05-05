import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8090'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// request拦截器
axios.interceptors.request.use(
  config => {
    // 根据条件加入token-安全携带
    config.headers['token'] = localStorage.getItem('token') || ''
    return config
  },
  error => {
    // 请求错误处理
    Promise.reject(error)
  }
)

axios.interceptors.response.use(undefined, err => {
  if (err) {
    return Promise.reject(err)
  }
})

export default axios
