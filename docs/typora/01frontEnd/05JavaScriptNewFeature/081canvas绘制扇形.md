# 81 canvas绘制扇形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>17-Canvas绘制扇形</title>
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
    oCtx.moveTo(100, 100);
    oCtx.arc(100, 100, 100, 0, Math.PI/2);
    oCtx.closePath();
    // oCtx.stroke();
    oCtx.fill();
</script>
</body>
</html>
```

