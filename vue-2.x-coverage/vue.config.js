const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue.js code coverage app'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    }
  }
}
