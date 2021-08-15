# 25 webpack-dev-server



## 01 说明

```html
<!--
1.什么是webpack-dev-server?
webpack-dev-server和watch一样可以监听文件变化
webpack-dev-server可以将我们打包好的程序运行在一个服务器环境下
webpack-dev-server可以解决企业开发中"开发阶段"的跨域问题

2.webpack-dev-server使用

2.1安装webpack-dev-server
https://www.npmjs.com/package/webpack-dev-server
npm install webpack-dev-server --save-dev

2.2配置webpack-dev-server
devServer: {
        contentBase: "./bundle",
        open: true,//更新后自动浏览器打开
        port: 9090
    }

2.3 运行命令
"start": "npx webpack-dev-server --config webpack.config.js"
-->
```



## 02 运行报错

> Error: Cannot find module 'webpack-cli/bin/config-yargs'

解决：

0. 原因webpack-cli与dev-server版本不兼容。

1. 卸载当前的 webpack-cli `npm uninstall webpack-cli`
2. 安装 webpack-cli 3.* 版本 `npm install webpack-cli@3.3.12  --save-dev`