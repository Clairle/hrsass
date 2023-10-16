<template>
  <el-row type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%">
    <el-col>
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <el-dropdown @command="operateDepts">
            <span>操作<i class="el-icon-arrow-down" /></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add" :disabled="!checkPermission('add-dept')">添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot" command="edit">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot" command="del">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
// 删除部门接口
import { delDepartments } from '@/api/departments'
export default {
// 用props数组来接收数据
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: false // 默认为false
    }
  },
  methods: {
    operateDepts(type) {
      if (type === 'add') {
        // 添加子部门的操作
        // 告诉父组件 点击的哪个节点 显示弹层
        this.$emit('addDepts', this.treeNode)
      } else if (type === 'edit') {
        //  编辑部门的操作
        this.$emit('editDepts', this.treeNode)
      } else {
        //  删除操作
        this.$confirm('确定要删除该部门吗').then(() => {
          return delDepartments(this.treeNode.id) // 返回promise对象
        }).then(() => {
          this.$emit('delDepts') // 删除成功后，让父组件重新获取数据
          this.$message.success('删除部门成功')
        })
      }
    }
  }
}
</script>

<style>

</style>
