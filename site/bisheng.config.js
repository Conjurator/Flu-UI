module.exports = {
  port: 8001,
  output: './_site',
  theme: './site/theme',
  source: './src',
  plugins: ['bisheng-plugin-react?lang=__react'],
  webpackConfig(config) {
    config.module.rules = config.module.rules.concat([
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        exclude: [/\.js$/, /\.css$/, /\.scss$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ])
    return config
  }
}
