/**
 * 自动生成svg引用脚本，在svgicons目录添加svg后，执行此脚本，自动更新svgicons/index.js中对svg文件的引用
 */

const fs = require('fs')
const path = require('path')

const scourePath = path.resolve(__dirname, '../svgicons')
const targetPath = path.resolve(__dirname, '../src')

fs.readdir(scourePath, (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  const svgNameList = files.filter(file => file.endsWith('.svg')).map(file => {
    return `export { ${file.replace('.svg', '')} } from '../svgicons/${file}'`
  })
   fs.writeFile(`${targetPath}/svgs.js`, svgNameList.join('\n'), err => {
     if (err) {
       console.log(err)
       return
     }
     console.log('the sgvicons/index.js has beed updated!')
   })
})
