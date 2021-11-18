# 22 css-plugin

全称：`MiniCssExtractPlugin`。

作用：将css单独放在一个文件中而不是直接插入header

## 01 说明

```html
<!--
1.什么是mini-css-extract-plugin?
mini-css-extract-plugin是一个专门用于将打包的CSS内容提取到单独文件的插件
> 前面我们通过style-loader打包的CSS都是直接插入到head中的

2.mini-css-extract-plugin使用
https://webpack.js.org/plugins/mini-css-extract-plugin/
-->
```

```html
<!--
2.1mini-css-extract-plugin安装
npm install --save-dev mini-css-extract-plugin

2.2配置mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
new MiniCssExtractPlugin({
    filename: './css/[name].css',
})

2.3替换style-loader
loader: MiniCssExtractPlugin.loader,

注意点: 如果相关文件资源无法显示, 需要根据打包后的结构手动设置公开路径
options: {
    publicPath: "xxx"
}
-->
```



## 02 注意

1. 需要将`style-loader`（作用是将css代码插入header标签中）替换掉，替换为`MiniCssExtractPlugin.loader`（对象名.属性）。
2. 该插件自动打包好单独的CSS文件后，会自动插入到`index.html`文件中。

