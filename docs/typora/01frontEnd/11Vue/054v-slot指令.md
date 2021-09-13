# 54 v-slot指令

企业开发中使用v-slot替代slot属性和slot-scope属性。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>56-Vue组件-v-slot指令</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。
它取代了 slot 和 slot-scope

也就是说我们除了可以通过v-slot指令告诉Vue内容要填充到哪一个具名插槽中
还可以通过v-slot指令告诉Vue如何接收作用域插槽暴露的数据

v-slot:插槽名称="作用域名称"
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <father></father>
</div>
<template id="father">
    <div>
        <son>
            <!--
            <template slot-scope="abc">
                <li v-for="(name, index) in abc.names">{{name}}</li>
            </template>
            -->
            <!--
            <template v-slot:default="abc">
                <li v-for="(name, index) in abc.names">{{name}}</li>
            </template>
            -->
            <!--
            <template #default="abc">
                <li v-for="(name, index) in abc.names">{{name}}</li>
            </template>
            -->
            <template #one="abc">
                <li v-for="(name, index) in abc.names">{{name}}</li>
            </template>
        </son>
    </div>
</template>
<template id="son">
    <div>
        <div>我是头部 {{names}}</div>
<!--        <slot v-bind:names="names">我是默认内容 {{names}}</slot>-->
        <slot name="one" v-bind:names="names">我是默认内容 {{names}}</slot>
        <div>我是底部</div>
    </div>
</template>
<script>
    // 父组件
    Vue.component("father", {
        template: "#father",
        // 子组件
        components: {
            "son": {
                template: "#son",
                data:function () {
                    return {
                        names: ["zs", "ls", "ww", "zl"]
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
        }
    });
</script>
</body>
</html>
```

