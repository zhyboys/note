# 10 v-for指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>10-常用指令v-for</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.什么是v-for指令
相当于JS中的for in循环, 可以根据数据多次渲染元素

2.v-for特点
可以遍历 数组, 字符, 数字, 对象
-->

<!--这里就是MVVM中的View-->
<div id="app">
    <ul>
<!--        <li v-for="(value, index) in list">{{index}}-&#45;&#45;{{value}}</li>-->
<!--        <li v-for="(value, index) in 'abcdefg'">{{index}}-&#45;&#45;{{value}}</li>-->
<!--        <li v-for="(value, index) in 6">{{index}}-&#45;&#45;{{value}}</li>-->
        <li v-for="(value, key) in obj">{{key}}---{{value}}</li>
    </ul>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            list: ["张三", "李四", "王五", "赵六"],
            obj: {
                name: "lnj",
                age: 33,
                gender: "man",
                class: "知播渔"
            }
        }
    });
</script>
</body>
</html>
```

