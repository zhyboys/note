# 60 animateCSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>01-AnimateCSS使用</title>
    <link rel="stylesheet" href="css/animate.css">
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            background: red;
            margin: 100px auto;
            /*animation-iteration-count: 3;*/
            /*animation-delay: 6s;*/
        }
        @keyframes myFadeIn {
            from {
                opacity: 0;
                transform: scale(2);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .myFadeIn {
            -webkit-animation-name: myFadeIn;
            animation-name: myFadeIn;
        }
    </style>
</head>
<body>
<!--animated这个类名是animated.css的基类, 但凡需要通过animated.css来添加动画, 都需要添加这个基类-->
<!--<div class="animated"></div>-->
<!--<div class="animated bounce"></div>-->
<!--<div class="animated bounce infinite delay-3s"></div>-->
<!--<div class="animated bounce"></div>-->
<div class="animated myFadeIn"></div>
<script>
    /*
        1.什么是Animate.css?
        其实swiper-animate就是参考Animate.css演变出来的一个插件,
        Animate.css和swiper-animate一样都是用于快速添加动画的,
        所以会用swiper-animate就会用Animate.css

        2.Animate.css的使用:
        2.1引入animate.css的文件
        2.2给需要执行动画的元素添加类名
    */
</script>
</body>
</html>
```

