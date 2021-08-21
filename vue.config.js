const port = process.env.port || process.env.npm_config_port || 80 // dev port
module.exports = {
  publicPath: './',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: `http://106.14.246.234:5210`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    disableHostCheck: true
  }
}
