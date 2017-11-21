module.exports = {
  port: 8001,
  lazyLoad: false,
  theme: './site/theme',
  source: {
    components: './src/components',
    doc: ['CHANGELOG.md', './doc']
  },
  root: '/Flu-UI/',
  //webpack config,可在此覆盖默认配置
  webpackConfig(config) {
    return config
  }
}
