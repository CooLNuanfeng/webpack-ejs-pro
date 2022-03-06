const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    common: path.resolve(__dirname, '../src/js/common.js'),
    index: path.resolve(__dirname, '../src/js/index.js'),
    detail: path.resolve(__dirname, '../src/js/detail.js')
  },
  output: {
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../imgs/',
            }
          },
          {
            loader:'css-loader',
          },
          { 
            loader: 'less-loader',
            options: {
              additionalData: `@import url('./common.css');`,
            },
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[ext]',
              publicPath: './', // 修改公共路徑
              esModule: false
            }
          },
        ]
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/, 
        use: {
          loader: 'ejs-loader',
          options: {
            esModule: false,
          }
        }
      },
      {
        test: /\.s?css$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../imgs/',
            }
          },
          {
            loader:'css-loader',
          },
          { 
            loader: 'sass-loader',
          }
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
    }),
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