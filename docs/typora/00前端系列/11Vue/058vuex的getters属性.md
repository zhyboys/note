# 58 vuex的getters属性

新学mapGetters辅助函数

vuex的新操作详见**课时121 vuex的优化**

## 01 getters属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>60-Vuex-getters</title>
    <script src="js/vue.js"></script>
    <script src="js/vuex.js"></script>
</head>
<body>
<!--
1.什么是Vuex的getters?
Vuex的getters属性就和组件的计算属性一样, 会将数据缓存起来, 只有数据发生变化才会重新计算【用于获取的属性】
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <father></father>
</div>
<template id="father">
    <div>
<!--        {{formart}}-->
<!--        {{formart}}-->
<!--        {{formart}}-->
<!--        {{this.$store.state.msg}} "www.it666.com"-->
<!--        {{this.$store.state.msg}} "www.it666.com"-->
<!--        {{this.$store.state.msg}} "www.it666.com"-->
        {{this.$store.getters.formart}}
        {{this.$store.getters.formart}}
        {{this.$store.getters.formart}}
    </div>
</template>

<script>
    const store = new Vuex.Store({
        // state: 用于保存共享数据
        state: {
            msg: "知播渔"
        },
        // mutations: 用于保存修改共享数据的方法
        mutations: {
        },
        getters: {
            formart(state){
                console.log("getters方法被执行了");
                return state.msg + "www.it666.com"
            }
        }
    });
    // 爸爸组件
    Vue.component("father", {
        template: "#father",
        store: store,
        // data: function () {
        //     return {
        //         msg: "知播渔"
        //     }
        // },
        // computed: {
        //     formart(){
        //         console.log("计算属性的方法被执行了");
        //         return this.msg + "www.it666.com";
        //     }
        // }
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



## 02 mapGetters辅助函数

原来获取Vuex中的数据

```js
this.$store.state.isFullScreen
```

学了getters后获取Vuex中的数据

```js
this.$store.getters.isFullScreen
```

使用mapGetters获取数据

```js
import { mapGetters } from 'vuex'

computed: {
  ...mapGetters(['isFullScreen'])
}

this.isFullScreen
```



## 03 vuex的文件优化1

```js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
})
```

把state等部分用js文件分开。



## 04 vuex的文件优化2

actions中提交方法都是字符串，写错不报错，为解决这个问题，新建mutations·type.js文件放常量（将方法名声明为常量）

```JS
export const SET_FULL_SCREEN = 'SET_FULL_SCREEN'
```

```js
import { SET_FULL_SCREEN } from './mutations·type'

export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  }
}
```

```js
import { SET_FULL_SCREEN } from './mutations·type'

export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  }
}
```