# 68 canvas多根线条

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>04-Canvas多根线条</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        canvas{
            background: yellowgreen;
        }
    </style>
</head>
<body>
<canvas></canvas>
<script>
    /*
    1.多根线条注意点
    如果是同一个路径, 那么路径样式会被重用(第二次绘制会复用第一次的样式)
    如果是同一个路径, 那么后设置的路径样式会覆盖先设置的路径样式

    2.如何给每根线条单独设置路径样式?
    每根线条都开启一个新的路径即可
    * */
    let oCanvas = document.querySelector("canvas");
    let oCtx = oCanvas.getContext("2d");
    oCtx.moveTo(50, 50);
    oCtx.lineTo(200, 50);
    oCtx.lineWidth = 20;
    oCtx.strokeStyle = "blue";
    oCtx.stroke();

    oCtx.beginPath(); // 重新开启一个路径
    oCtx.moveTo(50, 100);
    oCtx.lineTo(200, 100);
    oCtx.lineWidth = 10; // 重新设置当前路径样式
    oCtx.strokeStyle = "red";
    oCtx.stroke();

    oCtx.beginPath(); // 重新开启一个路径
    oCtx.moveTo(50, 150);
    oCtx.lineTo(200, 150);
    oCtx.lineWidth = 15; // 重新设置当前路径样式
    oCtx.strokeStyle = "green";
    oCtx.stroke();
</script>
</body>
</html>
```