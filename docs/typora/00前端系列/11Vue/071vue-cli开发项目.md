# 71 vue-cli开发项目

自动修复配置：

设置-->eslint-->选择手动配置-->找到自己项目路径的eslint文件--->应用



> 这文档不重要

**不重要，文件太多，内容不完善，主要教组件、路由、Vuex的使用。**

**不重要，文件太多，内容不完善，主要教组件、路由、Vuex的使用。**

**不重要，文件太多，内容不完善，主要教组件、路由、Vuex的使用。**

**不重要，文件太多，内容不完善，主要教组件、路由、Vuex的使用。**

## 01 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>第一个通过Vue-CLI开发的项目</title>
</head>
<body>
<div id="app"></div>
</body>
</html>
```



## 02 Vue

```vue
<!--template用于编写当前组件的结构代码的-->
<template>
    <div id="app">
      <!--
      <p>{{msg}}</p>
      <button @click="say">我是按钮</button>
      <One></One>
      <button @click="getName">获取共享数据</button>
      -->
      <router-link to="/one">Go to One</router-link>
      <router-link to="/two">Go to Two</router-link>
      <router-view></router-view>
    </div>
</template>
<!--script用于编写当前组件的业务代码-->
<script>
// import One from './components/One.vue'
// import Two from './components/Two.vue'

export default {
  name: 'App',
  data: function () {
    return {
      msg: '知播渔'
    }
  },
  methods: {
    say () {
      console.log('say')
    },
    getName () {
      // console.log(this.name)
      console.log(this.$store.state.name)
    }
  },
  components: {
    // One: One,
    // Two: Two
  }
}
</script>
<!--style用于编写当前组件的样式代码的-->
<style scoped>
/*p{*/
/*  background: #f00;*/
/*}*/
</style>
```



## 03  JavaScript

```js
import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  render: c => c(App)
})
```