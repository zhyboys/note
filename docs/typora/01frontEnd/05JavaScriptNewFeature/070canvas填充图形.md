# 70 canvas填充图形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>06-Canvas填充图形</title>
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
     1.stroke
    绘制已定义的路径

    2.fill
    填充已定义的路径
    */
    let oCanvas = document.querySelector("canvas");
    let oCtx = oCanvas.getContext("2d");
    /*
    oCtx.moveTo(50, 50);
    oCtx.lineTo(200, 50);
    oCtx.lineTo(200, 200);
    oCtx.closePath();
    // oCtx.stroke();
    oCtx.fillStyle = "blue";
    oCtx.fill();
    */
    oCtx.moveTo(100, 100);
    oCtx.lineTo(300, 100);
    oCtx.lineTo(300, 300);
    oCtx.lineTo(100, 300);
    oCtx.closePath();
    // oCtx.stroke();

    // oCtx.beginPath();
    /*
   oCtx.moveTo(150, 150);
   oCtx.lineTo(250, 150);
   oCtx.lineTo(250, 250);
   oCtx.lineTo(150, 250);
  */
   oCtx.moveTo(250, 150);
   oCtx.lineTo(150, 150);
   oCtx.lineTo(150, 250);
   oCtx.lineTo(250, 250);

    oCtx.closePath();
    /*
    注意点: 只要没有手动开启新的路径, 那么使用的都是默认路径
    如果都是默认路径, 那么设置的样式在同一个路径中都是有效的
    * */
    // oCtx.strokeStyle = "blue";
    // oCtx.stroke();
    oCtx.fill();
    /*
    对于同一路径,在填充的时候回遵循非零环绕规则
    从当前的区域拉出一条直线, 遇到顺时针相交的线就+1, 遇到逆时针相交的线就-1
    最终计算的结果如何是0就不填充, 如果不是0就填充
    * */
</script>
</body>
</html>
```

