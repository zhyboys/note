# 83 canvas绘制文字

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>19-Canvas绘制文字</title>
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
    // 3.绘制参考线
    let canvasWidth = oCtx.canvas.width;
    let canvasHeight = oCtx.canvas.height;
    oCtx.moveTo(0, canvasHeight/2);
    oCtx.lineTo(canvasWidth, canvasHeight/2);
    oCtx.stroke();
    oCtx.moveTo(canvasWidth/2, 0);
    oCtx.lineTo(canvasWidth/2, canvasHeight);
    oCtx.stroke();
    // 4.绘制文字
    let str = "知播渔教育";
    // 通过font属性可以设置文字的大小和样式
    oCtx.font = "50px 微软雅黑";
    // 通过textBaseline属性可以设置文字垂直方向的对齐方式
    // 注意点: 在对齐的时候是以绘制文字的y作为参考点进行对齐的
    oCtx.textBaseline = "middle";
    // 通过textAlign属性可以设置文字水平方向的对齐方式
    // 注意点: 在对齐的时候是以绘制文字的x作为参考点进行对齐的
    oCtx.textAlign = "center";
    /*
    注意点:
    在绘制文字的时候, 是以文字的左下角作为参考点进行绘制
    * */
    // oCtx.strokeText(str, canvasWidth/2, canvasHeight/2);
    oCtx.fillText(str, canvasWidth/2, canvasHeight/2);

    // oCtx.fillRect(canvasWidth/2, canvasHeight/2, 100, 100);
</script>
</body>
</html>
```

