/**
 * 复制scss文件到lib目录
 */

const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')

const sourceDir = path.resolve(__dirname, '../src')

const targetDir = path.resolve(__dirname, '../lib')

let hasError = false

var readFile = (dir, callback) => {
  var files = fs.readdirSync(dir)
  files.forEach((file, index) => {
    //如果是文件的话，检查一下类型，直接copy过去
    var filePath = path.resolve(dir, file)
    if (fs.lstatSync(filePath).isFile()) {
      if (path.extname(filePath) === '.scss') {
        var target = path.resolve(targetDir, path.relative(sourceDir, filePath))
        fse.copy(filePath, target, err => {
          if (err) {
            console.log(err)
            hasError = true
          }
        })
      }
    } else {
      readFile(filePath)
    }
  })
}

readFile(sourceDir)

if (hasError) {
  console.log('copy .scss file to lib failed!')
} else {
  console.log('copy .scss file to lib successful!')
}
