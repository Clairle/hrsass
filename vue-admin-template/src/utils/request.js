// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
// 导入vuex获取token
import store from '@/store'
// 导入element-ui提示消息
import { Message } from 'element-ui'
// 路由模块
import router from '@/router'
// 时间戳设置模块
import { getTimeStamp } from '@/utils/auth'

const TimeOut = 3600 // 定义超时时间（秒）

const service = axios.create({ // 创建一个axios实例
  // 如果执行 npm run dev  值为 /api 正确  /api 这个代理只是给开发环境配置的代理
  // 如果执行 npm run build 值为 /prod-api  没关系  运维应该在上线的时候 给你配置上 /prod-api的代理
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000// 定义5秒超时
})

// 请求拦截器
service.interceptors.request.use(config => {
  // config 是请求的配置信息
  // 注入token
  if (store.getters.token) {
    // 只有在有token的情况下 才有必要去检查时间戳是否超时
    if (IsCheckTimeOut()) {
      // 如果它为true表示 过期了
      store.dispatch('user/logout') // 删除cookies
      // 跳转到登录页
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config // 返回配置
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
// service.interceptors.response.use(response => {}, error =>{})
service.interceptors.response.use(response => {
  // axios默认加了一层data
  const { success, message, data } = response.data
  if (success) {
    // 此时认为业务执行成功了
    return data // 返回用户所需要的数据
  } else {
    // 当业务失败的时候
    Message.error(message) // 提示消息
    // console.log(new Error(message))
    return Promise.reject(new Error(message))
  }
}, error => {
  if (error.response && error.response.data && error.response.data.code === 10002) {
    // 当等于10002的时候 表示 后端告诉我token超时了
    store.dispatch('user/logout') // 登出action 删除token
    router.push('/login')
    return Promise.reject(error)
  } else {
    Message.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
})

// 检查是否超时的函数
function IsCheckTimeOut() {
  var currentTime = Date.now() // 当前时间戳
  var timestamp = getTimeStamp() // 缓存了的时间戳
  return (currentTime - timestamp) / 1000 > TimeOut // 返回布尔值
}

export default service // 导出axios实例
