// 导入vuex数据
import store from '@/store'

export default {
  methods: {
    // 有权限就返回true 没权限返回false
    checkPermission(key) {
      const userInfo = store.state.user.userInfo
      if (userInfo && userInfo.roles && userInfo.roles.points && userInfo.roles.points.length) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}
