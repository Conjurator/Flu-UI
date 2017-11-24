module.exports = {
  port: 8989,
  lazyLoad: false,
  theme: './site/theme',
  source: {
    components: './src/components',
    doc: ['CHANGELOG.md', './doc']
  },
  root: '/Flu-UI/',
  plugins: ['bisheng-plugin-react?lang=__react'],
  //webpack config,可在此覆盖默认配置
  webpackConfig(config) {
    return config
  }
}
