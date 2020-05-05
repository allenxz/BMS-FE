import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'

// import Mock from './utils/mock' // 模拟数据，会拦截请求
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080' 
axios.defaults.headers.common['token'] = localStorage.getItem('token')
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //Mock,
  render: h => h(App)
}).$mount('#app')
