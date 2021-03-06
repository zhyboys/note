# 13 v-bind绑定样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>13-常用指令-绑定样式</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.如何通过v-bind给style属性绑定数据
1.1将数据放到对象中
:style="{color:'red','font-size':'50px'}"
1.2将数据放到Model对象中
obj: {
    color: 'red',
    'font-size': '80px',
}

2.注意点
2.1如果属性名称包含-, 那么必须用引号括起来
2.2如果需要绑定Model中的多个对象, 可以放到一个数组中赋值
-->

<!--这里就是MVVM中的View-->
<div id="app">
<!--    <p style="color: red">我是段落</p>-->
    <!--
    注意点:
    和绑定类名一样, 默认情况下v-bind回去Model中查找, 找不到所以没有效果
    -->
<!--    <p :style="color: red">我是段落</p>-->
    <!--
    注意点:
    我们只需要将样式代码放到对象中赋值给style即可
    但是取值必须用引号括起来
    -->
<!--    <p :style="{color: 'red'}">我是段落</p>-->
    <!--
    注意点:
    如果样式的名称带-, 那么也必须用引号括起来才可以
    -->
<!--    <p :style="{color: 'red', 'font-size': '100px'}">我是段落</p>-->
<!--    <p :style="obj">我是段落</p>-->
    <!--
    注意点:
    如果Model中保存了多个样式的对象 ,想将多个对象都绑定给style, 那么可以将多个对象放到数组中赋值给style即可
    -->
    <p :style="[obj1, obj2]">我是段落</p>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            obj1:{
                "color": "blue",
                "font-size": "100px"
            },
            obj2: {
                "background-color": "red"
            }
        }
    });
</script>
</body>
</html>
```