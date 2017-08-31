const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
