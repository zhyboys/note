# 63 WOWJS高级使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>04-WOWJS高级使用</title>
    <style>
        *{
            margin: 0;
            padding: 0;
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
<div class="nj slideInLeft">我是第1个div</div>
<div class="nj slideInRight">我是第2个div</div>
<div class="nj slideInLeft">我是第3个div</div>
<div class="test nj slideInRight" data-wow-offset="600">我是第4个div</div>
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
<script>
    let wow = new WOW({
        boxClass:     'nj',      // 自定义基类的名称
        animateClass: 'animated', // 指定需要使用的动画库的名称
        offset:       0,          // 在全局统一的设置元素的data-wow-offset
        mobile:       true,       // 在移动端是否需要执行动画
        live:         true,       // 是否需要开启异步加载内容
        callback:     function(box) {
            // 只要有元素执行动画就会调用这个回调函数, 并且会将正在执行动画的元素传递给我们
            console.log(box);
        },
        /*告诉wow.js, data-wow-offset参数谁进行计算偏移位*/
        scrollContainer: ".box",
    });
    wow.init();
</script>
</body>
</html>
```