# 69 canvas简单图形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>05-Canvas简单图形</title>
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
<canvas width="500" height="500"></canvas>
<script>
    /*
    1.closePath
    自动创建从当前点回到起始点的路径

    2.lineJoin
    设置相交线的拐点样式 miter(默认)、round、bevel
    * */
    let oCanvas = document.querySelector("canvas");
    let oCtx = oCanvas.getContext("2d");
    oCtx.moveTo(50, 50);
    oCtx.lineTo(200, 50);
    oCtx.lineTo(200, 200);
    // 注意点: 如果通过lineTo来闭合图形, 那么是不能很好的闭合
    // oCtx.lineTo(50, 50);
    oCtx.closePath();
    oCtx.lineWidth = 20;
    oCtx.lineJoin = "round";
    // 注意点: 默认情况下不会自动从最后一个点连接到起点
    oCtx.stroke();
</script>
</body>
</html>
```