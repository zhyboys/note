# 37 zepto选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>02-zepto选择器</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            background: red;
            margin-bottom: 20px;
        }
        .one{
            background: green;
        }
        #two{
            background: blue;
        }
    </style>
    <script src="js/zepto.js"></script>
    <script src="js/event.js"></script>
    <script src="js/selector.js"></script>

</head>
<body>
<button>我是按钮</button>
<div></div>
<div class="one"></div>
<div id="two"></div>
<script>
    /*
    1.Zepto选择器
    Zepto是模块化开发的, zepto.js核心模块中只包含了基础功能
    如果想使用高级的选择器必须引入高级选择器模块
    * */
    $("button").click(function () {
        // $("div").css({backgroundColor: "yellow"});
        // $(".one").css({backgroundColor: "yellow"});
        // $("#two").css({backgroundColor: "yellow"});
        $("div:first").css({backgroundColor: "yellow"});
    });
</script>
</body>
</html>
```