# 61 VueRouter参数传递

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>63-VueRouter-参数传递</title>
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
    <script src="js/vue-router.js"></script>
</head>
<body>
<!--
1.Vue Router传递参数
只要将Vue Router挂载到了Vue实例对象上, 我们就可以通过vue.$route拿到路由对象
只要能拿到路由对象, 就可以通过路由对象拿到传递的参数

方式一: 通过URL参数参数(?key=value&key=value), 通过this.$route.query获取
方式二: 通过占位符传递(路由规则中/:key/:key, 路径中/value/value), 通过this.$route.params获取
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <!--
    第一种传递参数的方式: 通过URL参数的方式传递
    在指定HASH的时候, 通过?key=value&key=value的方式传递
    在传递的组件的生命周期方法中通过 this.$route.query的方式来获取
    -->
    <router-link to="/one?name=lnj&age=33" tag="button">切换到第一个界面</router-link>
    <!--
    第二种传递参数的方式: 通过路由规则中的占位符传递
    在指定路由规则的时候通过/:key/:key的方式来指定占位符
    在指定HASH的时候, 通过/value/value的方式来传递值
    在传递的组件的生命周期方法中通过 this.$route.params的方式来获取
    -->
    <router-link to="/two/zs/66" tag="button">切换到第二个界面</router-link>
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
        template: "#one",
        created: function () {
            console.log(this.$route);
            console.log(this.$route.query.name);
            console.log(this.$route.query.age);
        }
    };
    const two = {
        template: "#two",
        created: function () {
            console.log(this.$route);
            console.log(this.$route.params.name);
            console.log(this.$route.params.age);
        }
    };
    // 2.定义切换的规则(定义路由规则)
    const routes = [
        // 数组中的每一个对象就是一条规则
        { path: '/one', component: one },
        { path: '/two/:name/:age', component: two }
    ];
    // 3.根据自定义的切换规则创建路由对象
    const router = new VueRouter({
        routes: routes,
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
    // console.log(vue.$route);
</script>
</body>
</html>
```

