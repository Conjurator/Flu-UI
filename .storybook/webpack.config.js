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
                },
                include: path.resolve(__dirname, '../')
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            use: [
              {
                loader: 'file-loader',
                options: {},
                include: path.resolve(__dirname, '../')
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
