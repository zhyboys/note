# 79 canvas渐变色

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>15-Canvas渐变色</title>
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
    /*
    1.渐变背景颜色
    和普通的标签一样我们也可以给填充的图形设置线性渐变和径向渐变的背景颜色

    2.设置图形渐变背景颜色步骤
    2.1通过绘图工具创建渐变背景颜色
    2.2指定渐变的范围
    2.3将渐变背景颜色设置给对应的图形
    * */
    // 1.拿到canvas
    let oCanvas = document.querySelector("canvas");
    // 2.从canvas中拿到绘图工具
    let oCtx = oCanvas.getContext("2d");

    // 1.创建一个渐变的方案
    /*
    可以通过x0,y0 / x1,y1确定渐变的方向和渐变的范围
    * */
    let linearGradient = oCtx.createLinearGradient(100, 100, 300, 300);
    /*
    第一个参数是一个百分比 0~1
    第二个参数是一个颜色
    * */
    linearGradient.addColorStop(0, "green");
    linearGradient.addColorStop(0.5, "yellow");
    linearGradient.addColorStop(1, "blue");

    // oCtx.createRadialGradient();
    // oCtx.fillStyle = "blue";
    oCtx.fillStyle = linearGradient;
    oCtx.fillRect(100, 100, 200, 200);
</script>
</body>
</html>
```