# 39 zepto-tap事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            margin: 0 auto;
            background: red;
        }
    </style>
    <!--<script src="js/jquery-3.1.1.js"></script>-->
    <script src="js/zepto.js"></script>
    <script src="js/event.js"></script>
    <script src="js/touch.js"></script>


</head>
<body>
<div></div>
<script>
    /*
    1.无论PC端还是移动端都支持click事件
    而且不仅仅是jQuery和Zepto支持, 原生的JS也支持
    * */
    /*
    let oDiv = document.querySelector("div");
    oDiv.onclick = function () {
        console.log("被点击了");
    }
    */
    /*
    $("div").click(function () {
        console.log("被点击了");
    });
    */
    /*
    2.移动端click事件注意点
    在企业开发中如果需要在移动端监听点击事件, 一般不会使用click来监听
    因为移动端的事件很多(单击/双击/轻扫/捏合/拖拽等等)
    所以如果通过click来监听,系统需要花费100~300毫秒判断到底是什么事件
    而移动端对事件的响应速度要求很高, 事件响应越快用户体验就越好
    所以如果需要在移动端监听点击事件, 那么请使用tap事件

    3.tap事件
    tap事件是Zepto自己封装的一个事件, 解决了原生click事件100~300毫秒的延迟问题
    * */
    $("div").tap(function () {
        console.log("被点击了");
    });
</script>
</body>
</html>
```

