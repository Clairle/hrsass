import router from '@/router'
import store from '@/store' // 引入store实例 和组件中的this.$store是一回事
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式

const whiteList = ['/login', '/404'] // 定义白名单 所有不受权限控制的页面

// 前置守卫
// next是前置守卫必须必须必须执行的钩子  next必须执行 如果不执行 页面就死了
// next()  执行下一个钩子函数
// next(false) 跳转终止
// next(地址) 跳转到某个地址

router.beforeEach(async function(to, from, next) {
  NProgress.start() // 开启进度条
  // 首先判断有无token
  if (store.getters.token) {
    //   如果有token 继续判断是不是去登录页
    if (to.path === '/login') {
      //  表示去的是登录页
      next('/') // 跳到主页
    } else {
      // 有token且没有获取过用户资料的才用请求获取
      // 如果没有id才表示当前用户资料没有获取过
      if (!store.getters.userId) {
        // async 函数所return的内容 用 await就可以接收到
        const { roles } = await store.dispatch('user/getUserInfo')
        // 得到筛选后的动态路由
        console.log(roles)
        const routes = await store.dispatch('permission/filterRoutes', roles.menus)
        router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])// 添加动态路由到路由表

        // 在添加路由之后应该使用 **next(to.path)**，
        // 否则会使刷新页面之后 权限消失，这属于一个vue-router的**已知缺陷**
        next(to.path)
      } else {
        next()// 直接放行
      }
    }
  } else {
    // 如果没有token
    if (whiteList.indexOf(to.path) > -1) {
      // 如果找到了 表示在在名单里面
      next()
    } else {
      next('/login') // 跳到登录页
    }
  }
  NProgress.done() // next()不进入后置守卫时，关闭进度条
})

// 后置守卫
router.afterEach(function() {
  NProgress.done() // 关闭进度条
})
