<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <!-- 传入一个isRoot属性用以与下面的循环节点相区别，来正确配置下拉菜单 -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <!-- 静态组织架构 -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <!-- 传入内容 插槽内容 会循环多次 有多少节点 就循环多少次 -->
          <!-- slot-scope 接收传递给插槽的数据-->
          <!-- slot-scope="obj" obj可以被解构为节点和数据 slot-scope="{ slot,data }"-->
          <tree-tools slot-scope="{ data }" :tree-node="data" @editDepts="editDepts" @delDepts="getDepartments" @addDepts="addDepts" />
        </el-tree>
      </el-card>
    </div>
    <add-dept ref="addDepts" :show-dialog.sync="showDialog" :tree-node="node" @addDepts="getDepartments" />
  </div>
</template>

<script>
// 树形复用结构
import TreeTools from './components/tree-tools'
// 组织架构数据获取
import { getDepartments } from '@/api/departments'
// 将数组转化成树形结构
import { transListToTreeData } from '../../utils'
// 新增组织架构弹层
import AddDept from './components/add-dept'
export default {
  components: {
    TreeTools,
    AddDept
  },
  data() {
    return {
      defaultProps: {
        label: 'name' // 树形架构从哪个属性读取数据
      },
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
        { name: '行政部', manager: '刘备' }, { name: '人事部', manager: '孙权' }
      ],
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人' },
      showDialog: false, // 控制弹出层显示
      node: null // 记录当前操作的节点
    }
  },
  created() {
    this.getDepartments() // 调用接口数据获取方法
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人', id: '' } // 这里添加一个id用来再后面的表单校验中可以找到同级节点
      this.departs = transListToTreeData(result.depts, '') // 还需要将数组转换成树形结构
    },
    // 添加部门节点
    addDepts(node) {
      this.showDialog = true
      // 因为node是当前的点击的部门， 此时这个部门应该记录下来,
      this.node = node
    },
    // 编辑部门节点
    editDepts(node) {
      this.showDialog = true
      this.node = node // 记录操作的节点
      // 父组件调用子组件方法,因为表单数据要在子组件中呈现
      // 给子组件加上ref，可以获取子组件的数据和方法 console.log(this.$refs.addDepts)
      this.$refs.addDepts.getDepartDetail(node.id)
    }
  }
}
</script>

<style scoped>

</style>
