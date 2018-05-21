const fs = require('fs')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/styles/main.scss', 'utf-8')
      }
    }
  }
}