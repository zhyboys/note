# 77 canvas绘制矩形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>13-Canvas绘制矩形</title>
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
    /*
    oCtx.moveTo(100, 100);
    oCtx.lineTo(300, 100);
    oCtx.lineTo(300, 300);
    oCtx.lineTo(100, 300);
    oCtx.closePath();
    // oCtx.stroke();
    oCtx.fill();
    */
    /*
    oCtx.moveTo(100, 100);
    oCtx.lineTo(300, 100);
    oCtx.lineWidth = 200;
    oCtx.stroke();
    */
    /*
    第一个参数: x的坐标
    第二个参数: y的坐标
    第三个参数: 矩形的宽度
    第四个参数: 矩形的高度
    * */
    /*
    oCtx.rect(100, 100, 200, 200);
    oCtx.stroke();
    // oCtx.fill();

    oCtx.beginPath();
    oCtx.rect(150, 150, 100, 100);
    oCtx.strokeStyle = "blue";
    oCtx.stroke();
    */
    /*
    oCtx.strokeRect(100, 100, 200, 200);

    oCtx.strokeStyle = "blue";
    oCtx.strokeRect(150, 150, 100, 100);
    */

    oCtx.fillRect(100, 100, 200, 200);

    oCtx.fillStyle = "blue";
    oCtx.fillRect(150, 150, 100, 100);

    // oCtx.clearRect(0, 0, 150, 150);
    let canvasWidth = oCtx.canvas.width;
    let canvasHeight = oCtx.canvas.height;
    oCtx.clearRect(0, 0, canvasWidth, canvasHeight);
</script>
</body>
</html>
```

