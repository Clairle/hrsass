// 自定义指令可以采用统一的文件来管理
// **`src/directives/index.js`**,这个文件负责管理所有的自定义指令

export const imagerror = {
  // 指令对象 会在当前的dom元素插入到节点之后执行
  inserted(dom, options) {
    // options是 指令中的变量的解释  其中有一个属性叫做 value
    // dom 表示当前指令作用的dom对象
    // 当src=null时但不出错
    dom.src = dom.src || options.value
    // 当图片有地址 但是地址没有加载成功的时候 会报错 会触发图片的一个事件 => onerror
    dom.onerror = function() {
      dom.src = options.value
    }
  },
  // 该钩子函数会在组件更新之后执行
  componentUpdated(dom, options) {
    dom.src = dom.src || options.value
  }
}
