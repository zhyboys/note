# 11 v-bind

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>10-常用指令v-bind</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.什么是v-bind指令
在企业开发中想要给"元素"绑定数据, 我们可以使用{{}}, v-text, v-html
但是如果想给"元素的属性"绑定数据, 就必须使用v-bind
所以v-bind的作用是专门用于给"元素的属性"绑定数据的

2.v-bind格式
v-bind:属性名称="绑定的数据"
:属性名称="绑定的数据"

3.v-bind特点
赋值的数据可以是任意一个合法的JS表达式
例如: :属性名称="age + 1"
-->

<!--这里就是MVVM中的View-->
<div id="app">
<!--    <p>{{name}}</p>-->
<!--    <p v-text="name"></p>-->
<!--    <p v-html="name"></p>-->
    <!--注意点: 如果要给元素的属性绑定数据, 那么是不能够使用插值语法的-->
<!--    <input type="text" value="{{name}}">-->
    <!--注意点: 虽然通过v-model可以将数据绑定到input标签的value属性上
                但是v-model是有局限性的, v-model只能用于input/textarea/select
                但是在企业开发中我们还可能需要给其它标签的属性绑定数据-->
<!--    <input type="text" v-model="name">-->
<!--    <input type="text" v-bind:value="name">-->
<!--    <input type="text" :value="name">-->
    <input type="text" :value="age + 1">
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            name: "知播渔666",
            age: 18
        }
    });
</script>
</body>
</html>
```