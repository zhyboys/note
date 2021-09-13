# 52 v-slot指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>54-Vue组件-v-slot指令</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.什么是v-slot指令?
v-slot指令是Vue2.6中用于替代slot属性的一个指令
在Vue2.6之前, 我们通过slot属性告诉Vue当前内容填充到哪一个具名插槽
从Vue2.6开始, 我们通过v-slot指令告诉Vue当前内容填充到哪一个具名插槽

注意点: v-slot指令只能用在template标签上
        可以使用#号替代v-slot:
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <father></father>
</div>
<template id="father">
    <div>
        <son>
            <!--这里通过slot属性告诉Vue,当前的内容是要填充到哪一个插槽中的-->
            <!--
            <div slot="one">我是追加的内容1</div>
            <div slot="one">我是追加的内容11</div>
            <div slot="two">我是追加的内容2</div>
            <div slot="two">我是追加的内容22</div>
            -->
            <!--
            <template v-slot:one>
                <div>我是追加的内容1</div>
                <div>我是追加的内容11</div>
            </template>
            <template v-slot:two>
                <div>我是追加的内容2</div>
                <div>我是追加的内容22</div>
            </template>
            -->
            <!--v-bind: :  v-on: @-->
            <template #one>
                <div>我是追加的内容1</div>
                <div>我是追加的内容11</div>
            </template>
            <template #two>
                <div>我是追加的内容2</div>
                <div>我是追加的内容22</div>
            </template>
        </son>
    </div>
</template>
<template id="son">
    <div>
        <div>我是头部</div>
        <slot name="one">我是one默认内容</slot>
        <slot name="two">我是two默认内容</slot>
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

