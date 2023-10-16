<template>
  <el-dialog title="新增员工" :visible="showDialog" @close="btnCancel">
    <el-form ref="addEmployee" :model="formData" :rules="rules" label-width="120px">
      <el-form-item prop="username" label="姓名">
        <el-input v-model="formData.username" style="width:50%" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="formData.mobile" style="width:50%" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="入职时间" prop="timeOfEntry">
        <el-date-picker v-model="formData.timeOfEntry" style="width:50%" placeholder="请选择入职时间" />
      </el-form-item>
      <el-form-item label="聘用形式" prop="formOfEmployment">
        <el-select v-model="formData.formOfEmployment" style="width:50%" placeholder="请选择">
          <el-option v-for="item in EmployeeEnum.hireType" :key="item.id" :label="item.value" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="工号" prop="workNumber">
        <el-input v-model="formData.workNumber" style="width:50%" placeholder="请输入工号" />
      </el-form-item>
      <el-form-item label="部门" prop="departmentName">
        <el-input v-model="formData.departmentName" style="width:50%" placeholder="请选择部门" @focus="getDepartments" />
        <!-- 放置一个树形组件 el-tree默认显示的字段 label    默认找节点的字段是children-->
        <el-tree v-if="showTree" v-loading="loading" :data="treeData" :props="{ label: 'name'}" :default-expand-all="true" @node-click="selectNode" />
      </el-form-item>
      <el-form-item label="转正时间" prop="correctionTime">
        <el-date-picker v-model="formData.correctionTime" style="width:50%" placeholder="请选择转正时间" />
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-button @click="btnCancel">取消</el-button>
          <el-button type="primary" @click="btnOK">确定</el-button>
        </el-col>
      </el-row>
    </template>
  </el-dialog>
</template>

<script>
// 部门数据
import { getDepartments } from '@/api/departments'
// 转化树形
import { transListToTreeData } from '@/utils'
// 聘用形式数据
import EmployeeEnum from '@/api/constant/employees'
// 新增员工接口
import { addEmployee } from '@/api/employees'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      EmployeeEnum, // 引入文件的数据变成data中的数据，以便后续渲染
      formData: {
        username: '',
        mobile: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        timeOfEntry: '',
        correctionTime: ''
      },
      rules: {
        username: [{ required: true, message: '用户姓名不能为空', trigger: 'blur' }, {
          min: 1, max: 4, message: '用户姓名为1-4位'
        }],
        mobile: [{ required: true, message: '手机号不能为空', trigger: 'blur' }, {
          pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur'
        }],
        formOfEmployment: [{ required: true, message: '聘用形式不能为空', trigger: 'blur' }],
        workNumber: [{ required: true, message: '工号不能为空', trigger: 'blur' }],
        departmentName: [{ required: true, message: '部门不能为空', trigger: 'change' }],
        timeOfEntry: [{ required: true, message: '入职时间', trigger: 'blur' }]
      },
      treeData: [], // 定义数组接收树形数据
      showTree: false, // 控制树形的显示或者隐藏
      loading: false // 控制树的显示或者隐藏进度条
    }
  },
  methods: {
    // 获取部门数据转化成树形
    async getDepartments() {
      this.loading = true
      this.showTree = true
      const { depts } = await getDepartments()
      this.treeData = transListToTreeData(depts, '')
      this.loading = false
    },

    // 赋值部门表单数据
    selectNode(node) {
      // console.log(arguments)  // 打印函数的所有参数
      this.formData.departmentName = node.name // 传递名称给v-model绑定的formData.formOfEmployment
      this.showTree = false
    },

    // 确定按钮
    async btnOK() {
      try {
        await this.$refs.addEmployee.validate() // 表单验证
        await addEmployee(this.formData) // 调用新增接口
        this.$message.success('新增员工成功')
        // this.$parent 当前的父组件实例 用this.$parent的前提条件是 该组件不能位于 非原生组件内部 也就是 插槽内容
        // $children 当前的子组件集合
        // $parent用的非常少 对于组件放置的位置有很高的要求，不能讲组件放置于类似element组件的内部
        this.$parent.getEmployeeList && this.$parent.getEmployeeList()
        this.$parent.showDialog = false // 关闭弹出层
      } catch (error) {
        console.log(error)
      }
    },

    // 取消按钮
    btnCancel() {
      // 重置数据为空
      this.formData = {
        username: '',
        mobile: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        timeOfEntry: '',
        correctionTime: ''
      }
      this.$refs.addEmployee.resetFields() // 重置表单校验
      this.$emit('update:showDialog', false) // 这只写法配合父组件的 .sync方式
    }
  }
}
</script>

<style>

</style>
