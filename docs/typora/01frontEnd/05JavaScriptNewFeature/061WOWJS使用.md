# 61 WOWJS使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>02-WOWJS使用</title>
    <style>
        *{
            
            margin: 0;
            padding: 0;
        }
        .box{
            width: 400px;
            height: 200px;
            border: 1px solid #000;
            margin: 100px auto;
        }
        .box1{
            width: 200px;
            height: 200px;
            background: red;
            float: left;
        }
        .box2{
            width: 200px;
            height: 200px;
            background: blue;
            float: right;
        }
    </style>
    <link rel="stylesheet" href="css/animate.css">
    <script src="js/wow.js"></script>
</head>
<body>
<div class="box">
    <!--
    wow这个类名是一个基类, 如果想通过wow.js添加动画, 那么就必须写上这个基类
    这里的slideInLeft就是Animate.css中的动画名称, 只要是Animate.css中的动画再wow.js中都可以使用
    -->
    <div class="box1 wow slideInLeft" data-wow-duration="5s"></div>
    <div class="box2 wow slideInRight" data-wow-delay="5s" data-wow-iteration="2"></div>
</div>
<script>
    /*
    1.什么是WOW.js?
    WOW.js是对animate.css的扩充, 让页面滚动更有趣
    通过WOW.js，可以在页面滚动的过程中逐渐释放动画效果。
    简单点理解: (wow.js + animate.css) 约等于  (swiper.js + swiper.animate.css)
    只不过swiper更加强大, 企业中使用频率更高, 所以重点掌握swiper

    2.wow.js使用
    2.1引入animate.css
    2.2引入wow.js
    2.3给需要执行动画的元素添加类名
    2.4在JavaScript中初始化wow.js
     */
    new WOW().init();
</script>
</body>
</html>
```