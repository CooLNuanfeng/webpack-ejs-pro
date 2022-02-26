## 说明
通过webpack构建传统页面基本配置

## 后续
- css 单独分离及less,scss接入
- 修改config，添加页面级配置
- 添加loader

## 目录结构

```
.
├── README.md
├── config
│   └── webpack.config.js
├── package-lock.json
├── package.json
└── src
    ├── components
    │   ├── footer.ejs
    │   └── header.ejs
    ├── ejs
    │   ├── detail.ejs
    │   └── index.ejs
    ├── js
    │   ├── common.js
    │   ├── detail.js
    │   └── index.js
    └── style
        ├── detail.css
        └── index.css
```