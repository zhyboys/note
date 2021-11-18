# 20 clean-plugin

> 清除上一次打包留下来的（但这次打包不会用到的）（位于dist/bundle目录下的）垃圾。
>
> 原理：先清空打包目录再打包。

**webpack官网没，但常用**

```html
<!--
1.什么是clean-webpack-plugin?
webpack-clean-plugin会在打包之前将我们指定的文件夹清空
应用场景每次打包前将dist目录清空, 然后再存放新打包的内容, 避免新老混淆问题

3.clean-webpack-plugin使用（文档链接）
https://github.com/johnagan/clean-webpack-plugin
-->

<!--
3.1安装clean-webpack-plugin
npm install --save-dev clean-webpack-plugin
3.2配置clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [new CleanWebpackPlugin()]
-->
```



配置`webpack.config.js`

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
new CleanWebpackPlugin()
```

