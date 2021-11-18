# 23 压缩CSS代码

搭配css-plugin使用。

如果将`webpack.config.js`文件中的模式改为production模式，则 js 代码在打包时会自动被压缩。

**以下压缩也必须在production模式下进行**

> 由于css代码压缩需要配置优化项optimization，这会覆盖默认配置
>
> 导致 js 代码在production模式下不会自动压缩
>
> 所以需要在配置项新下载 JS 代码压缩插件

```js
<!--
3.mini-css-extract-plugin压缩css
https://www.npmjs.com/package/mini-css-extract-plugin

3.1安装JS代码压缩插件
npm install --save-dev terser-webpack-plugin

3.2安装CSS代码压缩插件
npm install --save-dev optimize-css-assets-webpack-plugin

3.3导入插件
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

3.4配置webpack优化项---直接写在配置文件根部，第一个花括号里
optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
}
注意: 由于配置了webpack的optimization.minimizer项目会覆盖默认的JS压缩选项,
所以JS代码也需要通过插件自己压缩
-->
```

