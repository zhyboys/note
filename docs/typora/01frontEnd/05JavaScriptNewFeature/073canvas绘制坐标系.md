# 73 canvas绘制坐标系

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>09-Canvas绘制坐标系</title>
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

    // 1.计算坐标系原点的位置
    let originX = gridSize;
    let originY = canvasHeight - gridSize;
    // 2.计算X轴终点的位置
    let endX = canvasWidth - gridSize;
    // 3.绘制X轴
    oCtx.beginPath();
    oCtx.moveTo(originX, originY);
    oCtx.lineTo(endX, originY);
    oCtx.strokeStyle = "#000";
    oCtx.stroke();
    // 4.绘制X轴的箭头
    oCtx.lineTo(endX - 10, originY + 5);
    oCtx.lineTo(endX - 10, originY - 5);
    oCtx.lineTo(endX, originY);
    oCtx.fill();

    // 5.计算Y轴终点的位置
    let endY = gridSize;
    // 3.绘制Y轴
    oCtx.beginPath();
    oCtx.moveTo(originX, originY);
    oCtx.lineTo(originX, endY);
    oCtx.strokeStyle = "#000";
    oCtx.stroke();
    // 4.绘制X轴的箭头
    oCtx.lineTo(originX - 5, endY + 10);
    oCtx.lineTo(originX + 5, endY + 10);
    oCtx.lineTo(originX, endY);
    oCtx.fill();
</script>
</body>
</html>
```