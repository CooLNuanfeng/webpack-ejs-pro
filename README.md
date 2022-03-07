## 说明
通过webpack构建传统页面脚手架


## 目录结构

```
.
├── README.md
├── config
│   └── pages.js //页面配置
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── ejs
│   │   ├── detail.ejs
│   │   └── index.ejs
│   ├── images
│   │   ├── 3Dclass.png
│   │   ├── edit.png
│   │   └── love.png
│   ├── js
│   │   ├── common.js
│   │   ├── detail.js
│   │   └── index.js
│   └── style
│       ├── common.css
│       ├── detail.less
│       ├── header.less
│       └── index.less
└── webpack.config.js
```


## 配置

```
page:  src/js/ 下的入口文件名称,
chunks: 同HtmlWebpackPlugin chunks配置, 需要与page参数对应,
template: src/ejs/ ejs模块路径，同page名称一一对应
meta: 同HtmlWebpackPlugin meta配置
```