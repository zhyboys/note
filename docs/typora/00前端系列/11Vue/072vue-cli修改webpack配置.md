# 72 vue-cli修改webpack配置

```html
<!--
1.如何配置Vue-CLI创建项目的webpack配置?
默认情况下通过Vue-CLI创建的项目已经自动给我们配置好了webpack
但是有时候默认的配置可能不能满足我们的需求, 例如我们想修改输出目录名称, 想增加一些插件等
但是Vue-CLI创建的项目里又没有webpack配置文件, 那么我们应该如何修改或增加webpack配置呢?

我们可以通过新建vue.config.js的方式来修改配置
我们可以通过在vue.config.js中的configureWebpack属性来新增webpack配置
-->
```



新建`vue.config.js`文件，配置。

```js
const path = require('path');
const webpack = require('webpack');
module.exports = {
  // output: {
  //   path: path.resolve(__dirname, 'bundle')
  // }
  /*
  Vue-CLI为了方便起见对webpack原有的属性进行了一层封装, 如果我们需要修改webpack的配置
  那么我们可以在项目中新建一个vue.config.js的文件, 然后去查询Vue-CLI的封装是否能够满足我们的需求
  如果可以满足我们的需求, 那么就使用Vue-CLI封装的属性来修改webpack的配置
  如果不可以满足我们的需求, 那么我们可以通过configureWebpack的属性来编写原生的webpack配置
  * */
  outputDir: 'bundle',
  configureWebpack: {
    // 就可以在这个对象中编写原生的webpack配置
    plugins: [
      new webpack.BannerPlugin({
        banner: '知播渔教育-www.it666.com'
      })
    ]
  }
}
```