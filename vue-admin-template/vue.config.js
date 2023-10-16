'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Admin Template' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

let cdn = { css: [], js: [] }
let externals = {}
const isProd = process.env.NODE_ENV === 'production' // 判断当前环境是否是生产环境
if (isProd) {
  // 只有在生产环境下才排除打包
  cdn = {
    css: [
      // element-ui css
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css' // 样式表
    ],
    js: [
      // vue must at first!
      // 'https://unpkg.com/vue/dist/vue.js', // vuejs
      'https://unpkg.com/vue@3/dist/vue.global.prod.js',
      // element-ui js
      'https://unpkg.com/element-ui/lib/index.js' // elementUI
      // 'https://cdn.jsdelivr.net/npm/xlsx@0.16.6/dist/jszip.min.js',
      // 'https://cdn.jsdelivr.net/npm/xlsx@0.16.6/dist/xlsx.full.min.js'
    ]
  }
  externals = {
    'vue': 'Vue'
    // 'xlsx': 'XLSX',
    // 'element-ui': 'ELEMENT'
  }
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 代理配置
    proxy: {
      // 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制
      // localhost:8888/api/abc  => 代理给另一个服务器
      // 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通）
      // 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）
      '/api': {
        // target: 'http://ihrm-java.itheima.net/', // 跨域请求的地址
        // http://ihrm.itheima.net/
        // 备用接口
        // target: 'https://ihrm.itheima.net',
        target: 'http://ihrm.itheima.net/',
        changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域
      }

      // // 更换代理接口为/prod-api
      // '/prod-api': {
      //   // target: 'http://ihrm-java.itheima.net/', // 跨域请求的地址
      //   // http://ihrm.itheima.net/
      //   // 备用接口
      //   target: 'http://ihrm.itheima.net/',
      //   changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域
      // }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // Key是要排除的包名，value是排除包后从CDN重新引入的包的全局变量名
    // externals会用全局变量名替代引入处的包名
    externals: externals
  },
  // 配置注入webpack的属性 这个属性会注入到模板的变量中
  chainWebpack(config) {
    // 插入cdn变量
    // args 就是原有注入模板中的变量
    config.plugin('html').tap(args => {
      // 注入点变量
      // args[0] 相当于 html模板中 htmlWebpackplugin.options
      args[0].cdn = cdn
      return args
    })
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
