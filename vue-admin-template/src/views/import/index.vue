<template>
  <upload-excel :on-success="success" />
</template>

<script>
// 批量导入接口
import { importEmployee } from '@/api/employees'
export default {
  methods: {
    async success({ header, results }) {
      console.log(arguments)
      // 中英文对应关系
      const userRelations = {
        '入职日期': 'timeOfEntry',
        '手机号': 'mobile',
        '姓名': 'username',
        '转正日期': 'correctionTime',
        '工号': 'workNumber'
      }
      // 将results的中文key改成英文
      const newArr = results.map(item => {
        const userInfo = {}
        Object.keys(item).map(key => {
          if (userRelations[key] === 'timeOfEntry' || userRelations[key] === 'correctionTime') {
            userInfo[userRelations[key]] = new Date(this.formatDate(item[key], '/'))
          } else {
            userInfo[userRelations[key]] = item[key] // 将results中的中文对应的值 赋值给英文key
          }
        })
        return userInfo // 指定map函数返回值
      })
      await importEmployee(newArr) // 调用批量导入接口
      this.$message.success('批量导入员工成功')
      this.$router.back()
    },

    // excel中的时间不是一个标准时间 需要一个转化方法
    formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + ''
      const month = time.getMonth() + 1 + ''
      const date = time.getDate() + ''
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
    }
  }
}
</script>

<style>

</style>
