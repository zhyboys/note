# 42 移动端Touch事件位置

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>07-移动端Touch事件位置</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 1000px;
            height: 100px;
            margin-left: 50px;
            margin-top: 50px;
            background: linear-gradient(to right, red, green);
        }
    </style>
</head>
<body>
<div></div>
<script>
    /*
    1.手指的位置
    1.screenX/screenY是相对于屏幕左上角的偏移位
    2.clientX/clientY是相对于可视区域左上角的偏移位
    3.pageX/pageY是相对于内容左上角的偏移位
    * */
    let oDiv = document.querySelector("div");
    oDiv.ontouchstart = function (event) {
        // console.log(event.targetTouches[0]);
        // console.log(event.targetTouches[0].screenX);
        // console.log(event.targetTouches[0].screenY);
        console.log(event.targetTouches[0].clientX); // 11
        console.log(event.targetTouches[0].clientY); // 63
        console.log(event.targetTouches[0].pageX);  // 686
        console.log(event.targetTouches[0].pageY);  // 63
    }
</script>
</body>
</html>
```

