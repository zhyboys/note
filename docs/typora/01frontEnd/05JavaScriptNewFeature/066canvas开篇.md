# 66 canvas开篇

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>01-Canvas开篇</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        canvas{
            background: red;
        }
    </style>
</head>
<body>
<!--1.在body中创建一个canvas标签-->
<!--
注意点
canvas标签有默认的宽度和高度
默认的宽度是300px
默认的高度是150px
-->
<canvas></canvas>
<script>
    /*
    1.什么是Canvas？
    Canvas是H5新增的一个标签, 我们可以通过JS在这个标签上绘制各种图案
    Canvas 拥有多种绘制路径、矩形、圆形、字符以及图片的方法。
    * */
    // 2.通过js代码拿到canvas标签
    let oCanvas = document.querySelector("canvas");
    // 3.从canvas标签中获取到绘图工具
    let oCtx = oCanvas.getContext("2d");
    // 4.通过绘图工具在canvas标签上绘制图形
    // 4.1设置路径的起点
    oCtx.moveTo(50, 50);
    // 4.2设置路径的终点
    oCtx.lineTo(200, 50);
    // 4.3告诉canvas将这些点连接起来
    oCtx.stroke();
</script>
</body>
</html>
```

