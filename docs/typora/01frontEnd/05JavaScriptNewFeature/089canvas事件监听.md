# 89 canvas事件监听

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>25-Canvas事件监听</title>
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
    /*
    因为整个canvas是一个标签, 所以只能通过监听鼠标在canvas上的位置来判断是否需要处理对应的图形
    当然也可以通过第三方框架来解决交互问题
    诸如: zrender.js / Knova.js /three.js / egret.js / pixi.js等等
    * */
    // 1.拿到canvas
    let oCanvas = document.querySelector("canvas");
    // 2.从canvas中拿到绘图工具
    let oCtx = oCanvas.getContext("2d");
    // 3.绘制矩形
    let rectX = 100;
    let rectY = 100;
    let rectWidth = 100;
    let rectHeight = 100;
    oCtx.rect(rectX, rectY, rectWidth, rectHeight);
    oCtx.fill();

    oCtx.beginPath();
    oCtx.rect(200, 200, 100, 100);
    oCtx.fill();
    // 4.添加点击事件
    oCanvas.onclick = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        /*
        if(x >= rectX && x <= rectX + rectWidth &&
            y >= rectY && y <= rectY + rectHeight){
            console.log("矩形被点击了");
        }else{
            console.log("矩形没有被点击");
        }
        */
        /*
        注意点:
        isPointInPath方法如果开启了一个新的路径, 那么判断的就是点是否在新的路径的图形中
        * */
        console.log(oCtx.isPointInPath(x, y));
    }
</script>
</body>
</html>
```