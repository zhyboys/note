# 55 swiper基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>02-swiper基本使用</title>
    <link rel="stylesheet" href="css/swiper.css">
    <script src="js/swiper.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .swiper-container{
            width: 400px;
            height: 300px;
            border: 1px solid #000;
            margin: 100px auto;
        }
        .swiper-container>ul{
            list-style: none;
        }
    </style>
</head>
<body>
<div class="swiper-container">
    <ul class="swiper-wrapper">
        <li class="swiper-slide">Slide 1</li>
        <li class="swiper-slide">Slide 2</li>
        <li class="swiper-slide">Slide 3</li>
    </ul>
</div>
<script>
    /*
     1.什么是swiper?
     Swiper是纯javascript打造的滑动特效插件，面向PC、平板电脑等移动终端。
     Swiper能实现触屏焦点图、触屏Tab切换等常用效果。
     Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！
     
     2.如何使用:
     2.1引入swiper对应的css和js文件
     2.2按照框架的需求搭建三层结构
     2.3创建一个Swiper对象, 将容器元素传递给它
      */
    let mySwiper = new Swiper ('.swiper-container');
</script>
</body>
</html>
```

