# 60 VueRouter的router-link

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>62-VueRouter-基本使用</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .onepage, .twopage{
            width: 500px;
            height: 500px;
        }
        .onepage{
            background: pink;
        }
        .twopage{
            background: skyblue;
        }
        /*.router-link-active{*/
        /*    background: red;*/
        /*}*/
        .nj-active{
            background: skyblue;
        }
    </style>
    <script src="js/vue.js"></script>
    <!--1.导入Vue Router-->
    <!--注意点: 必须先导入Vue之后再导入Vue Router-->
    <script src="js/vue-router.js"></script>
</head>
<body>
<!--
1.什么是router-link?
通过a标签确实能设置URL的hash,但是这种方式并不专业
在Vue Router中提供了一个专门用于设置hash的标签 router-link

2.router-link特点
默认情况下Vue会将router-link渲染成a标签, 但是我们可以通过tag来指定到底渲染成什么

3.给router-link设置选中样式
默认情况下我们可以通过重写router-link-active类名来实现设置选中样式
但是我们也可以通过linkActiveClass来指定选中样式

4.重定向路由
{ path: '被重定向值', redirect: '重定向之后的值' }
-->
<!--这里就是MVVM中的View-->
<div id="app">
   <!-- <a href="#/one">切换到第一个界面</a>
    <a href="#/two">切换到第二个界面</a>-->
    <!--
    如果是通过router-link来设置URL的HASH值, 那么不用写#, 那么是通过to属性来设置HASH值
    -->
    <!--
    默认情况下Vue在渲染router-link的时候, 是通过a标签来渲染的
    如果在企业开发中不想使用a标签来渲染, 那么可以通过tag属性来告诉vue通过什么标签来渲染
    -->
    <router-link to="/one" tag="button">切换到第一个界面</router-link>
    <router-link to="/two" tag="button">切换到第二个界面</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</div>
<template id="one">
    <div class="onepage">
        <p>我是第一个界面</p>
    </div>
</template>
<template id="two">
    <div class="twopage">
        <p>我是第二个界面</p>
    </div>
</template>
<script>

    // 1.定义组件
    const one = {
        template: "#one"
    };
    const two = {
        template: "#two"
    };
    // 2.定义切换的规则(定义路由规则)
    const routes = [
        // 重定向路由
        { path: '/', redirect: '/two' },
        // 数组中的每一个对象就是一条规则
        { path: '/one', component: one },
        { path: '/two', component: two }
    ];
    // 3.根据自定义的切换规则创建路由对象
    const router = new VueRouter({
        routes: routes,
        // 指定导航激活状态样式类名
        linkActiveClass: "nj-active"
    });

    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 4.将创建好的路由对象绑定到Vue实例上
        router: router,
        // 这里就是MVVM中的Model
        data: {
        },
        // 专门用于存储监听事件回调函数
        methods: {
        },
        // 专门用于定义计算属性的
        computed: {
        },
        // 专门用于定义局部组件的
        components: {
            one: one,
            two: two
        }
    });
</script>
</body>
</html>
```



