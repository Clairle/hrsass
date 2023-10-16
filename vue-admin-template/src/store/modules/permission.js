// 引入静态路由和动态路由
import { asyncRoutes, constantRoutes } from '@/router'
const state = {
  routes: constantRoutes
}
const mutations = {
  setRouters(state, newRoutes) {
    // 应该是每次更新 都应该在静态路由的基础上进行追加
    state.routes = [...constantRoutes, ...newRoutes]
  }
}
const actions = {
  // 第二个参数为当前用户的所拥有的菜单权限
  filterRoutes(context, menus) {
    const routes = []
    menus.forEach(key => {
      //  asyncRoutes 找 有没有对象中的name属性等于 key的
      routes.push(...asyncRoutes.filter(item => item.name === key))
    })
    context.commit('setRouters', routes) // 将动态路由提交给mutations
    return routes
    // 因为左侧菜单栏是通过遍历vuex中state中的路由进行渲染的
    // 而真正的路由是配置的，所以需要return给路由用
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
