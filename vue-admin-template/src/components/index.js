// 该文件负责所有的公共的组件的全局注册
// 注册全局导入excel组件
import UploadExcel from './UploadExcel'
// 注册工具栏组件
import PageTools from './PageTools'
// 注册导入上传组件
import ImageUpload from './ImageUpload'
// 全屏组件
import ScreenFull from './ScreenFull'
// 动态主题
import ThemePicker from './ThemePicker'
// 语言切换
import Lang from './Lang'
// 伪页签
import TagsView from './TagsView'
export default {
  install(Vue) {
    Vue.component('PageTools', PageTools) //  注册全局的通用栏组件对象
    Vue.component('UploadExcel', UploadExcel)
    Vue.component('ImageUpload', ImageUpload) // 注册导入上传组件
    Vue.component('ScreenFull', ScreenFull)
    Vue.component('ThemePicker', ThemePicker)
    Vue.component('Lang', Lang)
    Vue.component('TagsView', TagsView)
  }
}
