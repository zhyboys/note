# 55 vuex共享数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>57-Vuex-基本使用</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.什么是Vuex?
vuex 是 Vue 配套的 公共数据管理工具，它可以把一些共享的数据，保存到 vuex 中，
方便整个程序中的任何组件直接获取或修改我们的公共数据

注意点:
只有需要共享的才放到vuex上, 不需要共享的数据依然放到组件自身的data上
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <father></father>
</div>
<template id="father">
    <div>
        <son1 @parentchange="change"></son1>
        <son2 :parentnum="num"></son2>
    </div>
</template>
<template id="son1">
    <div>
        <!--需求: 在第一个子组件中添加两个按钮和一个输入框, 要求通过按钮控制输入框中的数据+1和-1-->
        <button @click="add">增加</button>
        <button @click="sub">减少</button>
        <input type="text" :value="count">
    </div>
</template>
<template id="son2">
    <div>
        <!--需求: 在第二个子组件中展示第一个子组件中的数据-->
        <!--
        注意点:
        1.如果想要在子组件中使用父组件中的数据, 那么必须通过父组件传递
        2.如果想要在子组件中使用祖先组件中的数据, 那么就必须一层一层的传递
        3.兄弟组件之间不能直接传递数据, 如果兄弟组件之间想要传递数据, 那么就必须借助父组件
        -->
        <!--
        注意点:
        虽然通过借助父组件能够实现兄弟组件之间的数据传递, 但是这种方式非常的复杂, 非常的不推荐
        那么当前在企业开发中我们遇到了两个问题:
        1.如果想要在子组件中使用祖先组件中的数据, 那么就必须一层一层的传递(非常麻烦)
        2.兄弟组件之间不能直接传递数据, 如果兄弟组件之间想要传递数据, 那么就必须借助父组件(非常麻烦)
        解决方案: 使用Vuex
        -->
        <p>{{parentnum}}</p>
    </div>
</template>
<script>
    // 爸爸组件
    Vue.component("father", {
        template: "#father",
        data: function(){
            return {
                num: 0
            }
        },
        methods: {
            change(newCount){
                this.num = newCount;
            }
        },
        // 儿子组件
        components: {
            "son1": {
                template: "#son1",
                data: function () {
                    return {
                        count: 0
                    }
                },
                methods: {
                    add(){
                        /*
                        如何实现儿子中的数据和父亲中的数据同步
                        1.父亲给儿子传递一个方法
                        2.在儿子中修改数据
                        3.儿子中修改完数据, 调用父亲传递过来的方法, 并且将修改之后的数据传递给父亲的方法
                        4.在父亲的方法中保存最新的数据
                        * */
                        this.count = this.count + 1;
                        this.$emit("parentchange", this.count);
                    },
                    sub(){
                        this.count = this.count - 1;
                        this.$emit("parentchange", this.count);
                    }
                }
            },
            "son2": {
                template: "#son2",
                props: ["parentnum"]
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