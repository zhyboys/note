# 40 移动端Touch事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>05-移动端Touch事件</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            background: red;
        }
    </style>
</head>
<body>
<div></div>
<script>
    /*
    1.Zepto是如何实现tap事件的?
    虽然tap事件是Zepto自己封装的事件, 但是无论如何封装肯定都是通过原生JS来实现的
    在原生的JS中专门为移动端新增了几个事件
    touchstart: 手指按下
    touchmove:  手指在元素上移动
    touchend :  手指抬起

    2.注意点:
    这几个事件只支持移动端, 不支持PC端
    * */
    let oDiv = document.querySelector("div");
    oDiv.ontouchstart = function () {
        console.log("手指按下");
    }
    oDiv.ontouchend = function () {
        console.log("手指抬起");
    }
    oDiv.ontouchmove = function () {
        console.log("手指移动");
    }
</script>
</body>
</html>
```

