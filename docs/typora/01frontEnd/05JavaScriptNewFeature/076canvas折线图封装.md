# 76 canvas折线图封装

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>12-Canvas折线图封装</title>
    <!---->
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
<script>
    /*
    面向过程: 亲力亲为
    面向对象: 找对象, 让对象做事情
    找一个折线图对象, 你给我画格子, 你给我画坐标系, 你给我画数据点, 你给我画折线
    * */
    class LineChart{
        constructor(width=300, height=150){
            // 1.创建canvas
            this.canvas = document.createElement("canvas");
            this.canvas.width = width;
            this.canvas.height = height;
            document.body.appendChild(this.canvas);
            // 2.拿到绘图工具
            this.ctx = this.canvas.getContext("2d");
        }
        drawGrid(gridSize=20){
            let oCtx = this.ctx;
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
        }
        drawCoor(gridSize=20){
            let oCtx = this.ctx;
            let canvasWidth = this.ctx.canvas.width;
            let canvasHeight = this.ctx.canvas.height;

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
        }
        drawDot(list, dotSize=10){
            let oCtx = this.ctx;
            // 2.绘制数据点
            for(let i = 0; i < list.length; i++){
                oCtx.beginPath();
                oCtx.moveTo(list[i].x - dotSize / 2, list[i].y - dotSize / 2);
                oCtx.lineTo(list[i].x + dotSize - dotSize / 2, list[i].y - dotSize / 2);
                oCtx.lineTo(list[i].x + dotSize - dotSize / 2, list[i].y + dotSize - dotSize / 2);
                oCtx.lineTo(list[i].x - dotSize / 2, list[i].y + dotSize - dotSize / 2);
                oCtx.closePath();
                oCtx.fill();
            }
        }
        drawLine(list){
            let oCtx = this.ctx;
            oCtx.beginPath();
            for(let i = 0; i < list.length; i++){
                if(i === 0){
                    oCtx.moveTo(list[i].x, list[i].y);
                }else{
                    oCtx.lineTo(list[i].x, list[i].y);
                }
            }
            oCtx.stroke();
        }
    }

    let list = [
        {
            x: 100,
            y: 300
        },
        {
            x: 200,
            y: 200
        },
        {
            x: 300,
            y: 250
        },
        {
            x: 400,
            y: 100
        },
    ];
    let lineChart = new LineChart(500, 400);
    lineChart.drawGrid(50);
    lineChart.drawCoor(50);
    lineChart.drawDot(list);
    lineChart.drawLine(list);
</script>
</body>
</html>
```

