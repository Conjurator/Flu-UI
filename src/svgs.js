const req = require.context('../svgicons', true, /\.svg$/)

req.keys().forEach(fileName => {
  let m = req(fileName)
  let name = fileName.slice(2).replace('.svg', '')
  if (m && m.default) {
    m = m.default
  }
  exports[name] = m
})
