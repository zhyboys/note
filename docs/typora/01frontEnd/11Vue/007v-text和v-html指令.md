# 07 v-text和v-html指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>07-常用指令v-text和v-html</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.什么是v-text指令
v-text就相当于过去学习的innerText

2.什么是v-html指令
v-html就相当于过去学习的innerHTML
-->

<!--这里就是MVVM中的View-->
<div id="app">
    <!--插值的方式: 可以将指定的数据插入到指定的位置-->
<!--    <p>++++{{ name }}++++</p>-->
    <!--插值的方式: 不会解析HTML-->
<!--    <p>++++{{ msg }}++++</p>-->
    <!--v-text的方式: 会覆盖原有的内容-->
<!--    <p v-text="name">++++++++</p>-->
    <!--v-text的方式: 也不会解析HTML-->
<!--    <p v-text="msg">++++++++</p>-->
    <!--v-html的方式: 会覆盖原有的内容-->
    <p v-html="name">++++++++</p>
    <!--v-html的方式:会解析HTML-->
    <p v-html="msg">++++++++</p>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            name: "李南江",
            msg: "<span>我是span</span>"
        }
    });
</script>
</body>
</html>
```