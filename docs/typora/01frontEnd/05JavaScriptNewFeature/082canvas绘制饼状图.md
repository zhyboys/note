# 82 canvas绘制饼状图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>18-Canvas绘制饼状图</title>
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

    // 1.计算圆心的位置
    let rx = oCtx.canvas.width/2;
    let ry = oCtx.canvas.height/2;

    /*
    // 2.绘制第一个扇形
    oCtx.moveTo(rx, ry);
    oCtx.arc(rx, ry, 100, 0, Math.PI/2);
    oCtx.fillStyle = randomColor();
    oCtx.fill();

    // 3.绘制第二个扇形
    oCtx.beginPath();
    oCtx.moveTo(rx, ry);
    oCtx.arc(rx, ry, 100, Math.PI/2, Math.PI);
    oCtx.fillStyle = randomColor();
    oCtx.fill();

    // 4.绘制第三个扇形
    oCtx.beginPath();
    oCtx.moveTo(rx, ry);
    oCtx.arc(rx, ry, 100, Math.PI, Math.PI + Math.PI/2);
    oCtx.fillStyle = randomColor();
    oCtx.fill();

    // 5.绘制第四个扇形
    oCtx.beginPath();
    oCtx.moveTo(rx, ry);
    oCtx.arc(rx, ry, 100, Math.PI + Math.PI/2, Math.PI * 2);
    oCtx.fillStyle = randomColor();
    oCtx.fill();
    */
    let startAngle = 0;
    for(let i = 1; i <= 4; i++){
        let endAngle = i * Math.PI/2;
        oCtx.beginPath();
        oCtx.moveTo(rx, ry);
        oCtx.arc(rx, ry, 100, startAngle, endAngle);
        oCtx.fillStyle = randomColor();
        oCtx.fill();
        startAngle = endAngle;
    }
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
</script>
</body>
</html>
```