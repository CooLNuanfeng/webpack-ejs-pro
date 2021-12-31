const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    common: path.resolve(__dirname, '../src/js/common.js'),
    index: path.resolve(__dirname, '../src/js/index.js'),
    detail: path.resolve(__dirname, '../src/js/detail.js')
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader','css-loader']
      },
      {
        test: /\.ejs$/, 
        use: {
          loader: 'ejs-loader',
          options: {
            esModule: false,
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['common','index'],
      template: path.resolve(__dirname, '../src/ejs/index.ejs'),
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      chunks: ['common','detail'],
      template: path.resolve(__dirname, '../src/ejs/detail.ejs'),
    }),
  ],
}