# 41 移动端Touch事件对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>06-移动端Touch事件对象</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 150px;
            height: 150px;
            display: inline-block;
            background: red;
        }
        .box2{
            background: blue;
        }
    </style>
</head>
<body>
<div class="box1"></div>
<div class="box2"></div>
<script>
    /*
    1.Touch事件对象
    移动端的touch事件也是一个事件, 所以被触发的时候系统也会自动传递一个事件对象给我们

    2.移动端touch事件对象中比较重要的三个子对象
    touches:        当前屏幕上所有手指的列表
    targetTouches:  保存了元素上所有的手指里列表
    changedTouches: 当前屏幕上刚刚接触的手指或者离开的手指
    */
    /*
    let oDiv1 = document.querySelector(".box1");
    oDiv1.ontouchstart = function (event) {
        console.log("touches1", event.touches);
        console.log("targetTouches1", event.targetTouches);
    }
    let oDiv2 = document.querySelector(".box2");
    oDiv2.ontouchstart = function (event) {
        console.log("touches2", event.touches);
        console.log("targetTouches2", event.targetTouches);
    }
    */
    /*
    let oDiv1 = document.querySelector(".box1");
    oDiv1.ontouchstart = function (event) {
        // console.log("touches1", event.touches);
        console.log("targetTouches1", event.targetTouches);
    }
    oDiv1.ontouchend = function (event) {
        // console.log("touches1", event.touches);
        console.log("targetTouches1", event.targetTouches);
    }
    */
    let oDiv1 = document.querySelector(".box1");
    oDiv1.ontouchstart = function (event) {
        console.log("按下", event.changedTouches);
    }
    oDiv1.ontouchend = function (event) {
        console.log("抬起", event.changedTouches);
    }
    /*
    touches和targetTouches
    如果都是将手指按到了同一个元素上, 那么这两个对象中保存的内容是一样的
    如果是将手指按到了不同的元素上, 那么这个两个对象中保存的内容不一样
    touches保存的是所有元素中的手指, 而targetTouches保存的是当前元素中的手指

    changedTouches
    在ontouchstart中保存的是刚刚新增的手指
    在ontouchend中保存的是刚刚离开的手指
    * */
</script>
</body>
</html>
```

