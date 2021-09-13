# 70 vue-cli基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>73-Vue-CLI3基本使用</title>
</head>
<body>
<!--
1.什么是Vue-CLI(Command Line Interface)?
Vue-CLI是vue官方提供的脚手架工具,
默认已经帮我们搭建好了一套利用webpack管理vue的项目结构

2.如何安装Vue-cli和使用Vue-CLI?
安装脚手架工具: npm install -g @vue/cli
检查是否安装成功: vue --version
通过脚手架创建项目: vue create project-name

3.通过Vue-CLI生成的项目结构解读
3.1在Vue-CLI2.x中生成的项目结构中我们能够看到build文件夹和config文件夹
这两个文件夹中存储了webpack相关的配置, 我们可以针对项目需求修改webpack配置
3.2在Vue-CLI3以后生成的项目结构中已经没有了build文件夹和config文件夹
这么做的目的是为了化繁为简, 让初学者不用关心webpack, 只用关心如何使用Vue

node_modules文件夹: 存储了依赖的相关的包
public文件夹: 任何放置在 public 文件夹的静态资源都会被简单的复制，
              而不经过 webpack。你需要通过绝对路径来引用它们
              一般用于存储一些永远不会改变的静态资源或者webpack不支持的第三方库
src文件夹: 代码文件夹
 |----assets文件夹: 存储项目中自己的一些静态文件(图片/字体等)
 |----components文件夹: 存储项目中的自定义组件(小组件,公共组件)
 |----views文件夹: 存储项目中的自定义组件(大组件,页面级组件,路由级别组件)
 |----router文件夹: 存储VueRouter相关文件
 |----store文件夹: 存储Vuex相关文件
 |----App.vue:根组件
 |----main.js:入口js文件
-->
</body>
</html>
```



手动创建项目需要配置

```
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass) //dart快速模式
? Pick a linter / formatter config: Standard// 标准模式
? Pick additional lint features: Lint on save, Lint and fix on commit
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files// 配置文件生成为单独文件
? Save this as a preset for future projects? No // 是否保存此次配置下次接着用？

```

