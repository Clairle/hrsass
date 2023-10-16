const Koa = require('koa') // 引入Koa包
const serve =require('koa-static')
const  { historyApiFallback } = require('koa2-connect-history-api-fallback');
const path = require('path')
const proxy = require('koa2-proxy-middleware')
const app = new Koa() // 实例化一个web服务
app.use(historyApiFallback({
    whiteList: ['/prod-api']
})) // 放在静态化服务之前

// 跨域
app.use(proxy({
    targets: {
      // (.*) means anything
      '/prod-api/(.*)': {
          target: 'http://ihrm.itheima.net/api', //后端服务器地址
          changeOrigin: true,
          pathRewrite: { 	
              '/prod-api': ""
          }
      }
    }
}))

app.use(serve(__dirname+ "/public")) // 静态化服务
app.listen(3333, function() {
    console.log('人资项目启动，访问地址http://localhost:3333')
})
// node app启动