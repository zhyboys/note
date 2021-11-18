# 28 HMR热更新上

**没什么用**

虽然能禁止浏览器自动刷新，但是，新改动的代码依然会起作用，只是js动态添加的数据不会像刷新一样被清空了。

在2021年的今天，我不安装HMR只用默认的devServer也能实现这效果。也就是觉得**HMR没什么用**了。

## 01 说明

```html
<!--
1.什么是HMR?
1.1通过webpack-dev-server自动打包并没有真正的放到指定的目录中
因为读写磁盘是非常耗时和消耗性能的,
所以为了提升性能webpack-dev-server将转换好的内容直接放到了内存中
1.2通过webpack-dev-server可以实现实时监听打包内容的变化,
每次打包之后都会自动刷新网页, 但是正是因为每当内容被修改时都会自动刷新网页
所以给我们带来了很多不便, 这时就需要通过HMR插件来优化调试开发
1.3HMR(HotModuleReplacementPlugin)热更新插件,
会在内容发生改变的时候时时的更新修改的内容但是不会重新刷新网站(重新刷新网页会导致js动态添加数【比如点击按钮新增段落】据重置)

2.HMR使用:
HotModuleReplacementPlugin是一个内置插件, 所以不需要任何安装直接引入webpack模块即可使用
2.1在devServer中开启热更新
hot: true, // 开启热更新
hotOnly: true // 即使热更新不生效，浏览器也不自动刷新
2.2在webpack.config.js中创建热更新插件
new Webpack.HotModuleReplacementPlugin()

3.注意点:
如果是通过style-loader来处理CSS, 那么经过前面两步就已经实现了热更新
如果是通过MiniCssExtractPlugin.loader来处理CSS, 那么还需要额外配置MiniCssExtractPlugin.loader
options:{
    hmr: true
}
-->
```



## 02 使用

内部插件，不用下载

`webpack.config.js`配置

```js
const Webpack = require("webpack");

module.exports = {
    /*
    devServer: 自动检测文件变化配置
    * */
    devServer: {
        contentBase: "./bundle",
        open: true,
        port: 9090,
        proxy: [{
            context: ["/user", "/login"],
            target: "http://127.0.0.1:3000",
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
            pathRewrite:{"": "/api"} // 路径重写, 将路径中的api替换为空
        }],
        hot: true, // 开启热更新, 只要开启了热更新就不会自动刷新网页了===新增==
        hotOnly: true // 哪怕不支持热更新也不要刷新网页===新增==
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
}

```



## 03 额外配置

> 如果使用的是`style-loader`[将css插入HTML]，**不需要**此额外配置。
>
> 如果使用的是`MiniCssExtractPlugin.loader`[将CSS单独打包到一个文件中]，**需要**此配置才能热更新CSS，否则编辑css文件后，没效果

```js
// loader: "style-loader"
loader: MiniCssExtractPlugin.loader,
options:{
    hmr: true //关键
}
```



## 04 版本更新

新版本这样配置，不然报错

```js
  devServer: {
    hot: "only",
  },
```

