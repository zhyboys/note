# 09 v-show

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>09-常用指令v-show</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.什么是v-show指令
v-show和v-if的能够一样都是条件渲染, 取值为true就显示, 取值为false就不显示

2.v-if和v-show区别
v-if: 只要取值为false就不会创建元素
v-show: 哪怕取值为false也会创建元素, 只是如果取值是false会设置元素的display为none

3.v-if和v-show应用场景
由于取值为false时v-if不会创建元素, 所以如果需要切换元素的显示和隐藏, 每次v-if都会创建和删除元素
由于取值为false时v-show会创建元素并设置display为none, 所有如果需要切换元素的显示和隐藏,
不会反复创建和删除, 只是修改display的值
所以: 如果企业开发中需要频繁切换元素显示隐藏, 那么推荐使用v-show, 否则使用v-if
-->

<!--这里就是MVVM中的View-->
<div id="app">
<!--    <p v-show="show">我是true</p>-->
<!--    <p v-show="hidden">我是false</p>-->
<!--    <p v-show="true">我是true</p>-->
<!--    <p v-show="false">我是false</p>-->
<!--    <p v-show="age >= 18">我是true</p>-->
<!--    <p v-show="age < 18">我是false</p>-->
    <p v-show="show">我是段落1</p>
    <p v-show="hidden">我是段落2</p>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            show: true,
            hidden: false,
            age: 18
        }
    });
</script>
</body>
</html>
```

