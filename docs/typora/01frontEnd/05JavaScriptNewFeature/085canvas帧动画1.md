# 85 canvas帧动画1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>21-Canvas帧动画</title>
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

    // 3.加载图片
    let oImg = new Image();
    oImg.onload = function () {
        // 3.1计算每一张图片的宽高
        let imageWidth = oImg.width;
        let imageHeight = oImg.height;
        let personWidth = imageWidth / 4;
        let personHeight = imageHeight / 4;
        // 3.2计算绘制的位置
        let canvasWidth = oCtx.canvas.width;
        let canvasHeight = oCtx.canvas.height;
        let originX = canvasWidth / 2 - personWidth / 2;
        let originY = canvasHeight / 2 - personHeight / 2;
        // 3.3绘制图片
        oCtx.drawImage(oImg, 0, personHeight * 2, personWidth, personHeight, originX, originY, personWidth, personHeight);
        // 3.4实现逐帧动画
        let index = 1;
        setInterval(function () {
            oCtx.clearRect(0, 0, canvasWidth, canvasHeight);
            oCtx.drawImage(oImg, index * personWidth, personHeight * 2, personWidth, personHeight, originX, originY, personWidth, personHeight);
            index++;
            if(index > 3){
                index = 0;
            }
        }, 50);
    }
    oImg.src = "images/person.png";
</script>
</body>
</html>
```