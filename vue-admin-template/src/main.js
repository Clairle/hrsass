import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import Component from '@/components' // 导入自定义组件模块

import * as filters from '@/filters' // 引入工具类

import VuePrint from 'vue-print-nb'// 打印插件

import checkPermission from './layout/mixin/checkPermission'

import i18n from '@/lang' // 引入i18n实例

import * as directives from '@/directives'
// 注册自定义指令
// 遍历所有的导出的指令对象 完成自定义全局注册
Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})

// 注册全局的过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.use(Component) // 全局注册自定义组件模块

Vue.use(VuePrint) // 注册打印插件

Vue.mixin(checkPermission) // 全局混入检查对象

// 注册element-ui语言包
Vue.use(ElementUI, {
  // t方法是去找 对应的语言下的 显示值
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
