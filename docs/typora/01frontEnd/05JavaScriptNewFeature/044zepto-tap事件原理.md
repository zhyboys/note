# 44 zepto-tap事件原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>09-zepto-tap事件原理</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
    <script src="js/myTap.js"></script>
</head>
<body>
<div></div>
<script>
    /*
    1.单击事件特点
    1.1只有一根手指
    1.2按下和离开时间不能太久 100ms
    1.3按下和离开距离不能太远 5px
    * */
    let oDiv = document.querySelector("div");
    /*
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    oDiv.ontouchstart = function (event) {
        // 1.判断当前元素中有几根手指
        if(event.targetTouches.length > 1){
            return;
        }
        // 2.拿到手指按下的位置
        startX = event.targetTouches[0].clientX;
        startY = event.targetTouches[0].clientY;
        // 3.拿到手指按下的时间
        startTime = Date.now();
    }
    oDiv.ontouchend = function (event) {
        // 1.判断有几根手指离开了
        if(event.changedTouches.length > 1){
            return;
        }
        // 2.拿到离开手指的位置
        let endX = event.changedTouches[0].clientX;
        let endY = event.changedTouches[0].clientY;
        // 3.判断手指离开的位置和按下位置的距离
        if(Math.abs(endX - startX) > 5 ||
            Math.abs(endY - startY) > 5){
            return;
        }
        // 4.拿到手指离开的时间
        let endTime = Date.now();
        // 5.判断手指离开的时间和按下的时间
        if(endTime - startTime > 100){
            return;
        }
        console.log("单击事件");
    }
    */
    Tap(oDiv, function () {
        console.log("点击事件");
    });
</script>
</body>
</html>
```

