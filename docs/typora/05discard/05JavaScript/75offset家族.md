---
title: offset家族

---

## 文件：offsetWidth.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>height</title>
    <style>
        #box{
            width: 100px;
            height: 100px;
            padding: 10px;
            border: 1px solid black;
            margin: 5px;
            background-color: #00c1de;
            /*box-sizing: border-box;*/
        }
    </style>
</head>
<div id="box"></div>
<body>
<script>
    /*
    offsetWeight
        offsetWeight = width + border + padding;
        注意点：
            offsetWidth（只能获取值，不能赋值）
            style.width（既能获取值，也能赋值）只能获取行内标签属性，也就是说写在style标签中的无法获取


     offsetHeight
     */
    var box = document.getElementById('box');
    console.log(box.offsetWidth,box.offsetHeight);
    /*

     */
</script>
</body>
</html>
```
## 文件：offsetTop.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box1{
            width: 400px;
            height: 400px;
            background-color: red;
            margin: 40px;

            position: relative;

        }
        #box2{
            width: 200px;
            height: 150px;
            background-color: blanchedalmond;
            padding: 10px;
            border: 5px solid #000;
            margin-left: 20px;
        }
    </style>
</head>
<div id="box1">
    <div id="box2">
        <div id="box3"></div>
    </div>
</div>
<body>
<script>
    /*
    要求：父盒子使用定位，否则相对位置是相对于上个有定位的父（或祖父）的盒子,可以返回没有定位盒子距离左侧的位置
     */

    var box2 = document.getElementById('box2');
    console.log(box2.offsetLeft);
    console.log(box2.offsetTop);

</script>
</body>
</html>
```
## 文件：offsetParern.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #yeye{
            position: relative;
        }
        #father{
            /*position: relative;*/
        }

    </style>
</head>
<body>
<div id="yeye">
    <div id="father">
        <div id="son"></div>
    </div>
</div>
<script>
    var son = document.getElementById('son');
    console.log(son.offsetParent);//找到有定位的上级
</script>
</body>
</html>
```
## 文件：区别总结.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>总结</title>
</head>
<body>
<script>
    /*
    1)style.left只能获取行内的，而
      offsetLeft则可以获取所有的；
    2)offsetLeft 可以返回没有定位盒子距离左侧的位置；而
      style.left不可以，其只能返回有定位盒子的left
    3)offsetLeft 返回的是数字，而
      style.left 返回的是字符串，带有单位
      注意：可以用parseInt进行转化；比如：styleLeft = '300px'---->parseInt(styleLeft)---->300
    4)offsetLeft是只读到
      style.left是可读可写的
    5)如果没有给 当前 元素指定 top 样式，则style.top返回的是空字符串
     */
</script>
</body>
</html>
```