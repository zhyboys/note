# 88 canvas形变

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>24-Canvas形变</title>
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
    // 注意点: 在canvas中所有的形变属性操作的都是坐标系, 而不是图形
    // oCtx.translate(100, 0);
    // oCtx.translate(0, 100);
    // oCtx.translate(100, 100);

    // oCtx.rotate(Math.PI/6);

    oCtx.scale(0.5, 1);
    // 3.绘制一个矩形
    oCtx.strokeRect(100, 100, 200, 100);
</script>
</body>
</html>
```

