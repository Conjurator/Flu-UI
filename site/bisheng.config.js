

module.exports = {
  port: 8001,
  lazyLoad: false,
  theme: './site/theme',
  // source: ['./src/components', './doc', 'CHANGELOG.md'],
  source: {
    components: './src/components',
    doc: './doc',
    changelog: 'CHANGELOG.md'
  },
  root: '/Flu-UI/',
  plugins: ['bisheng-plugin-react?lang=__react'],
  //webpack config,可在此覆盖默认配置
  webpackConfig(config) {
    return config
  }
}
