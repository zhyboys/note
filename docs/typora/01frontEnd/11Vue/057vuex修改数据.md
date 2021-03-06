# 57 vuex修改数据

注意：新增actions，用于保存触发mutations中保存的方法的方法（项目中用了）

## 01 vuex修改数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>59-Vuex-修改共享数据</title>
    <script src="js/vue.js"></script>
    <script src="js/vuex.js"></script>
</head>
<body>
<!--
1.当前在企业开发中我们遇到了两个问题:
1.如果想要在子组件中使用祖先组件中的数据, 那么就必须一层一层的传递(非常麻烦)
2.兄弟组件之间不能直接传递数据, 如果兄弟组件之间想要传递数据, 那么就必须借助父组件(非常麻烦)
解决方案: 使用Vuex

2.什么是Vuex?
vuex 是 Vue 配套的 公共数据管理工具，它可以把一些共享的数据，保存到 vuex 中，
方便整个程序中的任何组件直接获取或修改我们的公共数据

注意点:
必须在引入Vue之后再引入Vuex
只有需要共享的才放到vuex上, 不需要共享的数据依然放到组件自身的data上
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <father></father>
</div>
<template id="father">
    <div>
        <son1></son1>
        <son2></son2>
    </div>
</template>
<template id="son1">
    <div>
        <!--需求: 在第一个子组件中添加两个按钮和一个输入框, 要求通过按钮控制输入框中的数据+1和-1-->
        <button @click="add">增加</button>
        <button @click="sub">减少</button>
        <input type="text" :value="this.$store.state.count">
    </div>
</template>
<template id="son2">
    <div>
<!--        <p>{{this.$store.state.count}}</p>-->
        <button @click="add">增加</button>
        <button @click="sub">减少</button>
        <input type="text" :value="this.$store.state.count">
    </div>
</template>

<script>
    const store = new Vuex.Store({
        // state: 用于保存共享数据
        state: {
            count: 0
        },
        // mutations: 用于保存修改共享数据的方法
        mutations: {
            // 注意点: 在执行mutations中定义的方法的时候, 系统会自动给这些方法传递一个state参数
            //         state中就保存了共享的数据
            mAdd(state){
                state.count = state.count + 1;
            },
            mSub(state){
                state.count = state.count - 1;
            }
        }
    });
    // 爸爸组件
    Vue.component("father", {
        template: "#father",
        store: store,
        // 儿子组件
        components: {
            "son1": {
                template: "#son1",
                methods: {
                    add(){
                        // 注意点: 在Vuex中不推荐直接修改共享数据
                        // this.$store.state.count = this.$store.state.count + 1;
                        this.$store.commit("mAdd");
                    },
                    sub(){
                        // this.$store.state.count = this.$store.state.count - 1;
                        this.$store.commit("mSub");
                    }
                }
            },
            "son2": {
                template: "#son2",
                methods: {
                    add(){
                        // 注意点: 在Vuex中不推荐直接修改共享数据
                        // 如果多个组件都修改了共享的数据, 那么后期数据发生了错误, 我们如果需要去调试错误
                        // 就需要把每一个修改了共享数据的组件都检查一遍, 这样非常低效, 非常的不利于我们去维护
                        // this.$store.state.count = this.$store.state.count + 1;
                        this.$store.commit("mAdd");
                    },
                    sub(){
                        // this.$store.state.count = this.$store.state.count - 1;
                        this.$store.commit("mSub");
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



## 02 actions用法

```js
mutations: {
  changeFullScreen (state, flag) {
    state.isFullScreen = flag
  }
},
actions: {
  setFullScreen ({ commit }, flag) {
    commit('changeFullScreen', flag)
  }
},
```

其它组件中调用

```js
this.$store.dispatch('setFullScreen', true)
```



## 03 actions简化

```js
import { mapActions } from 'vuex'

methods: {
  ...mapActions(['setFullScreen']),
}
    
this.setFullScreen(true)
```
