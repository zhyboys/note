# 21 copy-plugin



## 1 说明

```html
<!--
1.什么是copy-webpack-plugin?
在打包项目的时候除了JS/CSS/图片/字体图标等需要打包以外, 可能还有一些相关的文档也需要打包
文档内容是固定不变的, 我们只需要将对应的文件拷贝到打包目录中即可
那么这个时候我们就可以使用copy-plugin来实现文件的拷贝

3.copy-webpack-plugin使用
https://www.webpackjs.com/plugins/copy-webpack-plugin/

3.1安装copy-webpack-plugin
npm install --save-dev copy-webpack-plugin

3.2配置copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
plugins: [new CopyWebpackPlugin([
            {from:"doc", to:"./doc"} //从doc目录拷贝到dist/bundle下的doc目录
        ])];
-->
```

## 2 参数报错

新版本的copyPlugin传入的参数不再是数组，而是对象，否则报错，如下：

```js
new CopyWebpackPlugin({
    patterns: [
        { from: "./src/static", to: "static" },
      ],
})
```

from路径是基于配置文件`webpack.config.js`所在的路径作为根据。

