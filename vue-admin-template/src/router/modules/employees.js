// 导出属于员工的路由规则
import Layout from '@/layout'

export default {
  path: '/employees', // 路径
  name: 'employees',
  component: Layout, // 组件
  // 配置二级路的路由表
  children: [{
    path: '', // 什么都写表示默认路由，且在/employees路径下可以同时显示Layout和employees两个组件
    name: 'employees',
    component: () => import('@/views/employees'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '员工管理',
      icon: 'people'
    }
  }, {
    path: 'detail/:id', // query传参 动态路由传参
    component: () => import('@/views/employees/detail'),
    hidden: true, // 不在左侧菜单显示，不然会和上面组件产生冲突
    meta: {
      title: '员工详情'// 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
    }
  }, {
    path: 'print/:id', // 二级默认路由
    component: () => import('@/views/employees/print'), // 按需加载
    hidden: true,
    meta: {
      title: '打印', // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
      icon: 'people'
    }
  }]
}
