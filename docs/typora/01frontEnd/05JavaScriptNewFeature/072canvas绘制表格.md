# 72 canvas绘制表格

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>08-Canvas绘制表格</title>
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
    // 3.定义变量保存小方格的尺寸
    let gridSize = 50;
    // console.log(oCanvas.offsetWidth);
    // console.log(oCanvas.offsetHeight);
    // console.log(oCtx.canvas.width);
    // console.log(oCtx.canvas.height);
    // 4.拿到canvas的宽高
    let canvasWidth = oCtx.canvas.width;
    let canvasHeight = oCtx.canvas.height;
    // 5.计算在垂直方向和水平方向可以绘制多少条横线
    let row = Math.floor(canvasHeight / gridSize);
    let col = Math.floor(canvasWidth / gridSize);
    // 6.绘制垂直方向的横线
    for(let i = 0; i < row; i++){
        oCtx.beginPath();
        oCtx.moveTo(0, i * gridSize - 0.5);
        oCtx.lineTo(canvasWidth, i * gridSize - 0.5);
        oCtx.strokeStyle = "#ccc";
        oCtx.stroke();
    }
    // 7.绘制水平方向的横线
    for(let i = 0; i < col; i++){
        oCtx.beginPath();
        oCtx.moveTo(i * gridSize - 0.5, 0);
        oCtx.lineTo(i * gridSize - 0.5, canvasHeight);
        oCtx.strokeStyle = "#ccc";
        oCtx.stroke();
    }
</script>
</body>
</html>
```