# 59 VueRouter基本使用

踩坑`routes: routes`中是routes而**不是**route**r**s

<p style="border:2px solid red;color:green">2021年3月13日复习再次踩坑！！！</p>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>61-VueRouter-基本使用</title>
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
    </style>
    <script src="js/vue.js"></script>
    <!--1.导入Vue Router-->
    <!--注意点: 必须先导入Vue之后再导入Vue Router-->
    <script src="js/vue-router.js"></script>
</head>
<body>
<!--
1.什么是Vue Router?
Vue Router和v-if/v-show一样, 是用来切换组件的显示的
v-if/v-show是标记来切换(true/false)
Vue Router用哈希来切换(#/xxx)
比v-if/v-show强大的是Vue Router不仅仅能够切换组件的显示, 还能够在切换的时候传递参数

2.Vue Router使用
2.1导入Vue Router
2.2定义路由规则
2.3根据路由规则创建路由对象
2.4将路径对象挂载到Vue实例中
2.5修改URL哈希值
2.6通过<router-view>渲染匹配的组件
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <a href="#/one">切换到第一个界面</a>
    <a href="#/two">切换到第二个界面</a>
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
        // 数组中的每一个对象就是一条规则
        { path: '/one', component: one },
        { path: '/two', component: two }
    ];
    // 3.根据自定义的切换规则创建路由对象
    const router = new VueRouter({
        routes: routes
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

