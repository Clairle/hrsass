<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <template v-slot:before>
          <span>共166条记录</span>
        </template>
        <template v-slot:after>
          <el-button size="small" type="warning" @click="exportData">普通excel导出</el-button>
          <el-button size="small" type="danger">导出</el-button>
          <el-button size="small" type="success" @click="$router.push('/import')">excel导入</el-button>
          <el-button size="small" type="primary" @click="showDialog = true">新增员工</el-button>
        </template>
      </page-tools>
      <!-- 表格和分页 -->
      <el-card v-loading="loading">
        <el-table :data="list">
          <el-table-column label="序号" sortable="" type="index" />
          <el-table-column label="姓名" sortable="" prop="username" />
          <el-table-column label="头像" align="center">
            <template slot-scope="{row}">
              <img
                v-imagerror="require('@/assets/common/bigUserHeader.png')"
                :src="row.staffPhoto"
                style="border-radius: 50%; width: 100px; height: 100px; padding: 10px"
                alt="头像"
                @click="showQrCode(row.staffPhoto)"
              >
            </template>
          </el-table-column>
          <el-table-column label="工号" sortable="" prop="workNumber" />
          <el-table-column label="聘用形式" sortable="" prop="formOfEmployment" :formatter="formatEmployment" />
          <el-table-column label="部门" sortable="" prop="departmentName" />
          <el-table-column label="入职时间" sortable="" prop="timeOfEntry">
            <template slot-scope="{ row }">
              {{ row.timeOfEntry | formatDate }}
            </template>
          </el-table-column>
          <el-table-column label="账户状态" align="center" sortable="" prop="enableState">
            <template slot-scope="{ row }">
              <el-switch :value="row.enableState === 1" />
            </template>
          </el-table-column>
          <el-table-column label="操作" sortable="" fixed="right" width="280">
            <template slot-scope="{ row }">
              <el-button :disabled="!checkPermission('POINT-USER-UPDATE')" type="text" size="small" @click="$router.push(`/employees/detail/${row.id}`)">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small" @click="editRole(row.id)">角色</el-button>
              <el-button type="text" size="small" @click="deleteEmployee(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center" align="middle" style="height: 60px">
          <el-pagination
            layout="prev, pager, next"
            :page-size="page.size"
            :current-page="page.page"
            :total="page.total"
            @current-change="changePage"
          />
        </el-row>
      </el-card>
    </div>
    <add-employee :show-dialog.sync="showDialog" />
    <!-- 放置一个二维码弹层 -->
    <el-dialog title="图片二维码" :visible.sync="showCodeDialog">
      <el-row type="flex" justify="center">
        <canvas ref="myCanvas" />
      </el-row>
    </el-dialog>
    <!-- 编辑角色弹出层 -->
    <edit-role ref="editRole" :show-role-dialog.sync="showRoleDialog" :user-id="userId" />
  </div>
</template>

<script>
// 员工列表数据,删除员工
import { getEmployeeList, delEmployee } from '@/api/employees'
// 聘用形式枚举文件
import EmployeeEnum from '@/api/constant/employees'
// 添加员工弹出层
import AddEmployee from './components/add-employee'
// 格式化时间
import { formatDate } from '@/filters'
// 转化二维码工具
import QrCode from 'qrcode'
// 角色弹出层
import editRole from './components/assign-role'
export default {
  components: {
    AddEmployee,
    editRole
  },
  data() {
    return {
      loading: false,
      list: [], // 列表数据
      page: {
        page: 1,
        size: 10,
        total: 0
      },
      showDialog: false, // 显示员工弹出
      showCodeDialog: false, // 显示二维码的弹层
      userId: null, // 记录当前点击的id
      showRoleDialog: false // 角色弹层显示
    }
  },
  created() {
    this.getEmployeeList()
  },
  methods: {
    // 翻页组件
    changePage(newPage) {
      this.page.page = newPage
      this.getEmployeeList()
    },
    // 绑定和渲染表单数据
    async getEmployeeList() {
      this.loading = true
      const { total, rows } = await getEmployeeList(this.page)
      this.page.total = total
      this.list = rows
      this.loading = false
    },
    // 格式化聘用形式
    formatEmployment(row, column, cellValue, index) {
      const obj = EmployeeEnum.hireType.find(item => item.id === cellValue)
      return obj ? obj.value : '未知'
    },
    // 删除按钮
    async deleteEmployee(id) {
      try {
        await this.$confirm('您确定删除该员工吗')
        await delEmployee(id)
        this.getEmployeeList()
        this.$message.success('删除员工成功')
      } catch (error) {
        console.log(error)
      }
    },

    // 普通excel导出
    exportData() {
      // 表头对应关系
      const headers = {
        '姓名': 'username',
        '手机号': 'mobile',
        '入职日期': 'timeOfEntry',
        '聘用形式': 'formOfEmployment',
        '转正日期': 'correctionTime',
        '工号': 'workNumber',
        '部门': 'departmentName'
      }
      // 这里使用懒加载模块 => 只有当点击按钮的时候才去加载这个模块
      import('@/vendor/Export2Excel').then(async excel => {
        const { rows } = await getEmployeeList({ page: 1, size: this.page.total })
        const data = this.formatJson(headers, rows)
        // 复杂表头
        const multiHeader = [['姓名', '主要信息', '', '', '', '', '部门']]
        // 合并单元格
        const merges = ['A1:A2', 'B1:F1', 'G1:G2']
        excel.export_json_to_excel({
          header: Object.keys(headers),
          data,
          filename: '员工资料表',
          multiHeader, // 复杂表头
          merges // 合并选项
        })
      })
      // import('@/vendor/Export2Excel').then(async excel => {
      //   excel.export_json_to_excel({
      //     // [{ username: '张三', mobile: 123 }]  => [[ '张三', 123 ]] 数据类型转换后放这里
      //     header: ['sfds', 'sdfsf'],
      //     data: [['sdfsfd', '5454']]
      //   })
      // })
    },
    // 该方法负责将数组转化成二维数组
    formatJson(headers, rows) {
      return rows.map(item => {
        // item是一个对象  { mobile: 132111,username: '张三'  }
        return Object.keys(headers).map(key => {
          // 判断 字段
          if (headers[key] === 'timeOfEntry' || headers[key] === 'correctionTime') {
            // 格式化日期
            return formatDate(item[headers[key]])
          } else if (headers[key] === 'formOfEmployment') {
            const obj = EmployeeEnum.hireType.find(obj => obj.id === item[headers[key]])
            return obj ? obj.value : '未知'
          }
          return item[headers[key]]
        })
      })
      // console.log(rows.map(item => Object.keys(headers).map(key => item[headers[key]])))
      // return rows.map(item => Object.keys(headers).map(key => item[headers[key]]))
    },
    // 显示二维码方法
    showQrCode(url) {
      if (url) {
        this.showCodeDialog = true
        // 页面的渲染是异步的,数据更新了，但是dom还没有加载出来,ref没有用
        this.$nextTick(() => {
          QrCode.toCanvas(this.$refs.myCanvas, url)// 将地址转化成二维码
        })
      } else {
        this.$message.warning('该用户还未上传头像')
      }
    },
    // 编辑角色
    async editRole(id) {
      this.userId = id
      await this.$refs.editRole.getUserDetailById(id) // 使用await等数据加载完成后再弹出聊天框
      this.showRoleDialog = true
    }
  }
}
</script>

<style>

</style>
