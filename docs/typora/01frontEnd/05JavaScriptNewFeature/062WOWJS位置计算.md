# 62 WOWJS位置计算

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>03-WOWJS位置计算</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 400px;
            height: 800px;
            margin: 0 auto;
            border: 1px solid #000;
            overflow: auto;
            overflow-x: hidden;
            background: #fff !important;
        }
        div{
            width: 400px;
            height: 200px;
            line-height: 200px;
            text-align: center;
            margin: 0 auto;
        }
        div:nth-child(odd){
            background: red;
        }
        div:nth-child(even){
            background: blue;
        }
    </style>
    <link rel="stylesheet" href="css/animate.css">
    <script src="js/wow.js"></script>
</head>
<body>
<!--
<div class="wow slideInLeft">我是第1个div</div>
<div class="wow slideInRight">我是第2个div</div>
<div class="wow slideInLeft">我是第3个div</div>
<div class="test wow slideInRight" data-wow-offset="600">我是第4个div</div>
<div>我是第5个div</div>
<div>我是第6个div</div>
<div>我是第7个div</div>
<div>我是第8个div</div>
<div>我是第9个div</div>
<div>我是第10个div</div>
<div>我是第11个div</div>
<div>我是第12个div</div>
<div>我是第13个div</div>
<div>我是第14个div</div>
<div>我是第15个div</div>
<div>我是第16个div</div>
<div>我是第17个div</div>
<div>我是第18个div</div>
<div>我是第19个div</div>
<div>我是第20个div</div>
<div>我是第21个div</div>
<div>我是第22个div</div>
<div>我是第23个div</div>
<div>我是第24个div</div>
<div>我是第25个div</div>
<div>我是第26个div</div>
<div>我是第27个div</div>
<div>我是第28个div</div>
<div>我是第29个div</div>
<div>我是第30个div</div>
-->
<!--这里的data-wow-offset属性的作用, 是告诉wow.js从什么位置开始执行动画-->
<div class="box">
    <div class="wow slideInLeft">我是第1个div</div>
    <div class="wow slideInRight">我是第2个div</div>
    <div class="wow slideInLeft">我是第3个div</div>
    <div class="test wow slideInRight" data-wow-offset="600">我是第4个div</div>
    <div>我是第5个div</div>
    <div>我是第6个div</div>
    <div>我是第7个div</div>
    <div>我是第8个div</div>
    <div>我是第9个div</div>
    <div>我是第10个div</div>
    <div>我是第11个div</div>
    <div>我是第12个div</div>
    <div>我是第13个div</div>
    <div>我是第14个div</div>
    <div>我是第15个div</div>
    <div>我是第16个div</div>
    <div>我是第17个div</div>
    <div>我是第18个div</div>
    <div>我是第19个div</div>
    <div>我是第20个div</div>
    <div>我是第21个div</div>
    <div>我是第22个div</div>
    <div>我是第23个div</div>
    <div>我是第24个div</div>
    <div>我是第25个div</div>
    <div>我是第26个div</div>
    <div>我是第27个div</div>
    <div>我是第28个div</div>
    <div>我是第29个div</div>
    <div>我是第30个div</div>
</div>
<script>
    // 1.拿到window的高度
    let windowHeight = window.innerHeight;
    // 2.拿到元素距离body的偏移位
    let oDiv = document.querySelector(".test");
    let divOffsetTop = oDiv.offsetTop;
    // 3.拿到网页滚动出去的距离
    window.onscroll = function () {
        let offsetTop = document.documentElement.scrollTop;
        // (window的高度 + 网页滚动出去的距离) - 元素距离body的偏移位
        let result = (windowHeight + offsetTop) - divOffsetTop;
        console.log(result);
    }
    let wow = new WOW({
        /*告诉wow.js, data-wow-offset参数谁进行计算偏移位*/
        scrollContainer: ".box"
    });
    wow.init();
</script>
</body>
</html>
```



