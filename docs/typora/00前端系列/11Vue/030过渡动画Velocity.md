# 30 过渡动画Velocity

1. **找到钩子函数** vue官网-->起步-->过渡 。
2. **下载安装**  百度npmjs搜velocity-animate。
3. **导入使用**详见`02项目使用`。



## 01 普通使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>31-Vue-过渡动画</title>
    <script src="js/vue.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            background: red;
        }
    </style>
</head>
<body>
<!--
1.配合Velocity实现过渡动画
在Vue中我们除了可以自己实现过渡动画以外, 还可以结合第三方框架实现过渡动画

1.1导入Velocity库
1.2在动画执行过程钩子函数中编写Velocity动画
-->

<!--这里就是MVVM中的View-->
<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter">
        <div class="box" v-show="isShow"></div>
    </transition>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            isShow: true
        },
        // 专门用于存储监听事件回调函数
        methods: {
            toggle(){
                this.isShow = !this.isShow;
            },
            beforeEnter(el){
            },
            enter(el, done){
                Velocity(el, {opacity: 1, marginLeft: "500px"}, 3000);
                done(); //告诉它动画执行完毕了
            },
            afterEnter(el){

            }
        },
        // 专门用于定义计算属性的
        computed: {
        }
    });
</script>
</body>
</html>
```



## 02 项目使用

更多丰富内容没写，详见课时124.

### 2.1 安装

```
npm i velocity-animate
```



### 2.2 导入使用

```js
import velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui' // 引入velocity官方写好的动画库
```

使用方法如上