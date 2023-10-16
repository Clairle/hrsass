// 处理token 设置时间戳
import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
// 用户后台api
import { login, getUserInfo, getUserDetailById } from '@/api/user'
// 从router中引入重置路由方法
import { resetRouter } from '@/router'

// 状态
const state = {
  token: getToken(), // 设置token初始状态   token持久化 => 放到缓存中
  userInfo: {} // 存放用户资料
}
// 修改状态
const mutations = {
  // 登录处理
  setToken(state, token) {
    state.token = token // 将数据设置给vuex
    // 同步给缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 将vuex的数据置空
    removeToken() // 同步到缓存
  },

  // 设置用户信息
  setUserInfo(state, result) {
    state.userInfo = result // 将信息存放到state
  },

  // 删除用户信息
  removeUseInfo(state) {
    state.userInfo = {}
  }
}
// 执行异步
const actions = {
  // 封装一个登录的action
  // data认为是 { mobile,password }
  // 只要用async标记了函数 那么这个函数本身就是promise对象
  async login(context, data) {
    const result = await login(data) // 拿到token
    context.commit('setToken', result) // 设置token
    setTimeStamp() // 拿到token说明登录成功,设置当前的时间戳
  },

  async getUserInfo(context) { // 等会在权限拦截器处调用
    const result = await getUserInfo() // 请求得到用户资料
    const baseInfo = await getUserDetailById(result.userId) // 获取用户的详情 用户的详情数据(包含头像)
    context.commit('setUserInfo', { ...result, ...baseInfo }) // 合并数据发送给mutations处理然后发送给state存储
    return result
  },

  // 登出操作
  logout(context) {
    // 删除token
    context.commit('removeToken')
    // 删除用户资料
    context.commit('removeUseInfo')
    // 重置路由
    resetRouter()
    // 要清空permission模块下的state数据
    // 如果加上 root: true 就表示commit此时是根级的commit
    // 这样就可以实现命名子模块调用命名子模块下的mutation
    context.commit('permission/setRouters', [], { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
