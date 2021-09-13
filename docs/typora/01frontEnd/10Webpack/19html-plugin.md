# 19 html-plugin

> 在dist/bundle目录自动生成index.html文件



## 01 安装

自己进行



## 02 配置

配置`webpack.config.js`

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入
module.exports = {
    /*
    plugins: 告诉webpack需要新增一些什么样的功能
    * */
    plugins: [new HtmlWebpackPlugin({
        // 下面的配置位于插件文档
        // 指定打包的模板, 如果不指定会自动生成一个空的
        template: "./index.html",
        minify: {
            // 告诉htmlplugin打包之后的html文件需要压缩
            collapseWhitespace: true,
        }
    })]

}
```



## 03 说明与原文

```html
<!--
1.什么是插件(plugin)?
plugin 用于扩展webpack的功能
当然loader也是变相的扩展了webpack ，但是它只专注于转化文件这一个领域。
而plugin的功能更加的丰富，而不仅局限于资源的加载。
-->
<!--
2.什么是HtmlWebpackPlugin?
HtmlWebpackPlugin会在打包结束之后自动创建一个index.html, 并将打包好的JS自动引入到这个文件中

3.HtmlWebpackPlugin使用
https://www.webpackjs.com/plugins/html-webpack-plugin/
3.1安装HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin
3.2配置HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [new HtmlWebpackPlugin()]

4.HtmlWebpackPlugin高级使用
https://github.com/jantimon/html-webpack-plugin#configuration
默认情况下HtmlWebpackPlugin生成的html文件是一个空的文件,
如果想指定生成文件中的内容可以通过配置模板的方式来实现
 plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    })]

默认情况下生成html文件并没有压缩,
如果想让html文件压缩可以设置
new HtmlWebpackPlugin({
    template: "index.html",
    minify: {
        collapseWhitespace: true
    }
})]
-->
```

