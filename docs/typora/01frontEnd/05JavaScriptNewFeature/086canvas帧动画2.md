# 86 canvas帧动画2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>22-Canvas帧动画</title>
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
    /*
    面向对象思想:
    找到小人对象, 你给我画到指定的位置, 你给我走起来, 你给我停下来
    * */
    class Person{
        constructor(canvas, x, y){
            this.canvas = canvas;
            this.x = x;
            this.y = y;
            this.oCtx = canvas.getContext("2d");
            this.index = 1;
            this.timerId = null;
        }
        render(){
            let oImg = new Image();
            oImg.onload = () => {
                // 1.计算每一张图片的宽高
                let imageWidth = oImg.width;
                let imageHeight = oImg.height;
                let personWidth = imageWidth / 4;
                let personHeight = imageHeight / 4;
                // 2.绘制图片
                this.oCtx.drawImage(
                    oImg, // 需要绘制的图片
                    0, 0, // 图片定位的位置
                    personWidth, personHeight, // 图片裁剪的大小
                    this.x, this.y, // 图片绘制的位置
                    personWidth, personHeight // 指定图片绘制的大小
                );
                this.oImg= oImg;
                this.personWidth = personWidth;
                this.personHeight = personHeight;
            }
            oImg.src = "images/person.png";
        }
        run(){
            let canvasWidth = this.oCtx.canvas.width;
            let canvasHeight = this.oCtx.canvas.height;
            clearInterval(this.timerId);
            this.timerId = setInterval(() => {
                this.oCtx.clearRect(0, 0, canvasWidth, canvasHeight);
                this.oCtx.drawImage(
                    this.oImg, // 需要绘制的图片
                    this.index * this.personWidth, 0, // 图片定位的位置
                    this.personWidth, this.personHeight, // 图片裁剪的大小
                    this.x, this.y, // 图片绘制的位置
                    this.personWidth, this.personHeight // 指定图片绘制的大小
                );
                this.index++;
                if(this.index > 3){
                    this.index = 0;
                }
            }, 500);
        }
        stop(){
            clearInterval(this.timerId);
        }
    }
    let person = new Person(oCanvas, 100, 100);
    person.render();
    person.run();
    person.stop();
</script>
</body>
</html>
```

