# 06 v-cloak指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>06-常用指令-v-cloak</title>
    <style>
        [v-cloak] { display: none }
    </style>
</head>
<body>
<!--
1.Vue数据绑定过程
1.1会先将未绑定数据的界面展示给用户
1.2然后再根据模型中的数据和控制的区域生成绑定数据之后的HTML代码
1.3最后再将绑定数据之后的HTML渲染到界面上

正是在最终的HTML被生成渲染之前会先显示模板内容
所以如果用户网络比较慢或者网页性能比较差, 那么用户会看到模板内容

2.如何解决这个问题
利用v-cloak配合 [v-cloak]:{display: none}默认先隐藏未渲染的界面
等到生成HTML渲染之后再重新显示

3.v-cloak指令作用:
数据渲染之后自动显示元素
-->

<!--这里就是MVVM中的View-->
<div id="app">
    <p v-cloak>{{ name }}</p>
</div>
<!--
<div id="app">
    <p> 李南江 </p>
</div>
-->
<script src="js/vue.js"></script>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            name: "李南江",
        }
    });
</script>
</body>
</html>
```

