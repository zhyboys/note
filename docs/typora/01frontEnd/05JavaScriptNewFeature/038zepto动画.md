# 38 zepto动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>03-zepto动画</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            background: red;
            /*display: none;*/
        }
    </style>
    <script src="js/zepto.js"></script>
    <script src="js/event.js"></script>
    <script src="js/fx.js"></script>
    <script src="js/fx_methods.js"></script>
    <!--<script src="js/jquery-3.1.1.js"></script>-->

</head>
<body>
<button>我是按钮</button>
<div></div>
<script>
    /*
    1.zepto动画
    Zepto是模块化开发的, zepto.js核心模块中只包含了基础功能
    如果想使用动画必须引入动画模块

    2.zepto动画注意点
    由于zepto是一个轻量级的针对现代高级浏览器的 JavaScript库
    不需要兼容低级浏览器, 所以zepto中的动画是通过CSS3属性来实现动画的
    而jQuery中是通过DOM来实现动画的
    * */
    $("button").click(function () {
        // $("div").animate({marginLeft: 500}, 2000);
        // $("div").hide(2000);
        // $("div").show(2000);
        $("div").toggle(2000);
    });
</script>
</body>
</html>
```

