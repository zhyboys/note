# 74 vue-ElementUI优化



## 01 说明

```html
<!--
1.elementUI优化
默认情况下无论我们有没有使用到某个组件, 在打包的时候都会将elementUI中所有的组件打包到我们的项目中
这样就导致了我们的项目体积比较大, 用户访问比较慢

2.如何优化
为了解决这个问题, elementUI推出了按需导入, 按需打包. 也就是只会将我们用到的组件打包了我们的项目中
没有用到的组件不会被打包
https://element.eleme.cn/#/zh-CN/component/quickstart
-->
```



## 02 安装

安装 babel-plugin-component：

```sh
npm install babel-plugin-component -D
```



## 03 配置

然后，将 .babelrc 修改为：

<p style="color:red">坑:"es2015"不要写，而是修改为这个文件之前的那个，否则报错</p>

```js
{
  "presets": [["es2015", { "modules": false }]],
  // presets: [
  //   ['@vue/cli-plugin-babel/preset', { 'modules': false }]
  // ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```



## 04 按需引入

在main.js中用什么组件引入什么组件

```js
// 1.导入elementUI和elementUI的CSS文件
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Row, Button, Switch } from 'element-ui'

// 2.告诉Vue, 我们需要在项目中使用elementUI
// Vue.use(ElementUI)
Vue.use(Row)
Vue.use(Button)
Vue.use(Switch)
```