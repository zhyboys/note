# 041 Express脚手架使用

安装

```bash
npm install express-generator -g
```

创建项目

```bash
express 项目名
```

启动项目

```bash
cd 项目名
npm install
npm start # 启动项目
```

【可选】安装自己的插件

```
nodemon
cross-env
这两个安装好后需要配置，与之前node一样的配置，主要再package.json的启动命令。
    "dev": "cross-env NODE_ENV=dev nodemon bin/www.js",
    "build": "cross-env NODE_ENV=pro nodemon bin/www.js"
```



脚手架的方便在于自动创建文件目录。
