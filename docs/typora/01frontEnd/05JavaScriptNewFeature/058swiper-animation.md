# 58 swiper-animation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>05-swiper-animation</title>
    <link rel="stylesheet" href="css/swiper.css">
    <link rel="stylesheet" href="css/swiper.animate.min.css">
    <script src="js/swiper.js"></script>
    <script src="js/swiper.animate1.0.3.min.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        p{
            width: 200px;
            height: 200px;
            line-height: 200px;
            text-align: center;
            background: #f00;
            margin: 0 auto;
        }
        @keyframes myFadeIn {
            0% {
                opacity: 0;
                transform: scale(2);
            }

            100% {
                opacity: 1;
                transform: scale(0.5);
            }
        }

        .myFadeIn {
            -webkit-animation-name: myFadeIn;
            animation-name: myFadeIn
        }
    </style>
</head>
<body>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <!--
            swiper-animate-effect：切换效果，例如 fadeInUp
            swiper-animate-duration：可选，动画持续时间（单位秒），例如 0.5s
            swiper-animate-delay：可选，动画延迟时间（单位秒），例如 0.3s
            -->
            <p class="ani" swiper-animate-effect="myFadeIn">内容</p>
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
</div>
<script>
    var mySwiper = new Swiper ('.swiper-container', {
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
    });
</script>
</body>
</html>
```

