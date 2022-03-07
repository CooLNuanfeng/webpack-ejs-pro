const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pagesConfig = require('./config/pages')
const path = require('path')

const entrys = {}
const plugins = []

pagesConfig.forEach(item => {
  entrys[item.page] = path.resolve(__dirname, `src/js/${item.page}.js`)
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${item.page}.html`,
      chunks: ['common',item.page,...item.chunks],
      template: path.resolve(__dirname, `src/ejs/${item.page}.ejs`),
      meta: { ...item.meta }
    }),
  )
})

module.exports = {
  mode: 'development',
  entry: {
    common: path.resolve(__dirname, 'src/js/common.js'),
    ...entrys,
  },
  output: {
    filename: './js/[name].js',
    assetModuleFilename: 'imgs/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '../imgs/',
            // }
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
        type: 'asset/resource',
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: 'imgs/[name].[ext]',
        //       publicPath: './', // 修改公共路徑
        //       esModule: false
        //     },
        //   },
        // ]
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
            // options: {
            //   publicPath: '../imgs/',
            // }
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
    ...plugins,
  ],
}