# 12 v-bind绑定类名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>12-常用指令-绑定类名</title>
    <script src="js/vue.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .size{
            font-size: 100px;
        }
        .color{
            color: red;
        }
        .active{
            background: skyblue;
        }
    </style>
</head>
<body>
<!--
1.v-bind指令的作用
v-bind指令给"任意标签"的"任意属性"绑定数据
对于大部分的属性而言我们只需要直接赋值即可, 例如:value="name"
但是对于class和style属性而言, 它的格式比较特殊

2.通过v-bind绑定类名格式
:class="['需要绑定类名', ...]"

3.注意点:
3.1直接赋值一个类名(没有放到数组中)默认回去Model中查找
:class="需要绑定类名"
2.2数组中的类名没有用引号括起来也会去Model中查找
:class="[需要绑定类名]"
2.3数组的每一个元素都可以是一个三目运算符按需导入
:class="[flag?'active':'']"
2.4可以使用对象来替代数组中的三目运算符按需导入
:class="[{'active': true}]"
2.5绑定的类名太多可以将类名封装到Model中
obj: {
    'color': true,
    'size': true,
    'active': false,
}

4.绑定类名企业应用场景
从服务器动态获取样式后通过v-bind动态绑定类名
这样就可以让服务端来控制前端样式
常见场景: 618 双11等
-->

<!--这里就是MVVM中的View-->
<div id="app">
<!--    <p class="size color active">我是段落</p>-->
    <!--
    注意点:
    如果需要通过v-bind给class绑定类名, 那么不能直接赋值
    默认情况下v-bind会去Model中查找数据, 但是Model中没有对应的类名, 所以无效, 所以不能直接赋值
    -->
<!--    <p :class="size">我是段落</p>-->
    <!--
    注意点:
    如果想让v-bind去style中查找类名, 那么就必须把类名放到数组中
    但是放到数组中之后默认还是回去Model中查找
    -->
<!--    <p :class="[size]">我是段落</p>-->
    <!--
    注意点:
    将类名放到数组中之后, 还需要利用引号将类名括起来才会去style中查找
    -->
<!--    <p :class="['size', 'color', 'active']">我是段落</p>-->
    <!--
    注意点:
    如果是通过v-bind类绑定类名, 那么在绑定的时候可以编写一个三目运算符来实现按需绑定
    格式: 条件表达式 ? '需要绑定的类名' : ''
    -->
<!--    <p :class="['size', 'color', flag ? 'active' : '']">我是段落</p>-->
    <!--
    注意点:
    如果是通过v-bind类绑定类名, 那么在绑定的时候可以通过对象来决定是否需要绑定
    格式: {'需要绑定的类名' : 是否绑定}
    -->
<!--    <p :class="['size', 'color',{'active' : false}]">我是段落</p>-->
    <!--
    注意点:
    如果是通过v-bind类绑定类名, 那么还可以使用Model中的对象来替换数组
    -->
    <p :class="obj">我是段落</p>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            flag: false,
            obj:{
                'size': false,
                'color': false,
                'active': true,
            }
        }
    });
</script>
</body>
</html>
```

