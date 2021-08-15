# 56 vuex共享数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>58-Vuex-共享数据</title>
    <script src="js/vue.js"></script>
    <!--1.导入Vuex-->
    <!--注意点: 在导入Vuex之前必须先导入Vue-->
    <script src="js/vuex.js"></script>
</head>
<body>
<!--
1.当前在企业开发中我们遇到了两个问题:
1.如果想要在子组件中使用祖先组件中的数据, 那么就必须一层一层的传递(非常麻烦)
2.兄弟组件之间不能直接传递数据, 如果兄弟组件之间想要传递数据, 那么就必须借助父组件(非常麻烦)
解决方案: 使用Vuex

2.什么是Vuex?
vuex 是 Vue 配套的 公共数据管理工具，我们可以将共享的数据保存到 vuex 中，
方便整个程序中的任何组件都可以获取和修改vuex中保存的公共数据

注意点:
必须在引入Vue之后再引入Vuex
只有需要共享的才放到vuex上, 不需要共享的数据依然放到组件自身的data上
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <grandfather></grandfather>
</div>
<template id="grandfather">
    <div>
        <p>{{this.$store.state.msg}}</p>
        <father></father>
    </div>
</template>
<template id="father">
    <div>
        <!--4.在使用Vuex中保存的共享数据的时候, 必须通过如下的格式来使用-->
        <p>{{this.$store.state.msg}}</p>
        <son></son>
    </div>
</template>
<template id="son">
    <div>
        <p>{{this.$store.state.msg}}</p>
    </div>
</template>

<script>
    // 2.创建Vuex对象
    const store = new Vuex.Store({
        // 这里的state就相当于组件中的data, 就是专门用于保存共享数据的
        state: {
            msg: "知播渔"
        },
    });
    // 爷爷组件
    Vue.component("grandfather", {
        template: "#grandfather",
        // 3.在祖先组件中添加store的key保存Vuex对象
        // 只要祖先组件中保存了Vuex对象 , 那么祖先组件和所有的后代组件就可以使用Vuex中保存的共享数据了
        store: store,
        // 爸爸组件
        components: {
            "father": {
                template: "#father",
                // 儿子组件
                components: {
                    "son": {
                        template: "#son",
                    }
                }
            }
        }
    });
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
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
        },
    });
</script>
</body>
</html>
```

