# 71 canvas虚线

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>07-Canvas虚线</title>
    <style>
        *{
            margin: 0px;
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
    let oCanvas = document.querySelector("canvas");
    let oCtx = oCanvas.getContext("2d");
    oCtx.moveTo(100, 100);
    oCtx.lineTo(400, 100);
    oCtx.lineWidth = 20;
    oCtx.strokeStyle = "blue";
    // oCtx.setLineDash([5, 20]);
    oCtx.setLineDash([5, 10, 20]);
    console.log(oCtx.getLineDash());
    oCtx.lineDashOffset = -50;
    oCtx.stroke();
    /*
    1.setLineDash
    [5,10] 数组是用来描述你的排列方式的

    2.getLineDash
    获取虚线的排列方式 获取的是不重复的那一段的排列方式

    3.lineDashOffset
    设置虚线的偏移位
    * */

</script>
</body>
</html>
```

