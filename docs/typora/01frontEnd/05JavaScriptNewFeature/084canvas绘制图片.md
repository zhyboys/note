# 84 canvas绘制图片

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>20-Canvas绘制图片</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        canvas{
            display: block;
            margin: 0 auto;
            background: red;
        }
    </style>
</head>
<body>
<canvas width="500" height="400"></canvas>
<script>
    // 1.拿到canvas
    let oCanvas = document.querySelector("canvas");
    // 2.从canvas中拿到绘图工具
    let oCtx = oCanvas.getContext("2d");
    // 3.加载图片
    let oImg = new Image();
    oImg.onload = function () {
        // 如果只有三个参数, 那么第一个参数就是需要绘制的图片
        // 后面的两个参数是指定图片从什么位置开始绘制
        // oCtx.drawImage(oImg, 100, 100);

        // 如果只有五个参数, 那么第一个参数就是需要绘制的图片
        // 后面的两个参数是指定图片从什么位置开始绘制
        // 最后的两个参数是指定图片需要拉伸到多大
        // oCtx.drawImage(oImg, 100, 100, 100, 100);

        // 如果有九个参数, 那么第一个参数就是需要绘制的图片
        // 最后的两个参数是指定图片需要拉伸到多大
        // 第6~7个参数指定图片从什么位置开始绘制
        // 第2~3个参数指定图片上定位的位置
        // 第4~5个参数指定从定位的位置开始截取多大的图片
        oCtx.drawImage(oImg, 50, 50, 100, 100, 100, 100, 100, 100);
    }
    oImg.src = "images/lnj.jpg";
</script>
</body>
</html>
```

