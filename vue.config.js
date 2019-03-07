const path = require('path'),
  resolve = dir => {
    return path.join(__dirname, dir)
  },
  BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: true,
  productionSourceMap: false
}
