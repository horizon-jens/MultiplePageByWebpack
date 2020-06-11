### 安装依赖
```
npm i
```

### 新建页面
```
npm run new 页面名称
// windows下无法直接运行，可能需要使用window shell工具
// windows下使用建议直接复制 views 下的现有模板，并手动配置 page.config.js
```

### 启动开发
```
npm run dev
```

### 打包
```
npm run build
```

### 项目结构
```
├── README.md
├── config
│   ├── page.config.js  // 页面配置文件
│   ├── webpack.base.js
│   ├── webpack.dev.js  // webpack 本地服务配置
│   └── webpack.prod.js // webpack 打包配置
├── dist
├── gulpfile.js // gulp任务文件
│   └── index.js
├── new.sh  // mac系统下 自动生成页面脚本 windows下无法直接运行
├── package-lock.json
├── package.json
├── postcss.config.js
└── src
    ├── assets
    │   ├── css
    │   │   └── global.less
    │   ├── font
    │   │   ├── ... // 字体文件
    │   ├── img
    │   │   └── bg.jpg
    │   └── js
    └── views
        ├── detail
        │   ├── detail.less // 样式文件
        │   ├── index.html  // 页面模板
        │   └── main.js // 入口文件
        ├── index
        │   ├── index.html
        │   ├── index.less
        │   └── main.js
        └── ...
```
