# 110 view-box上

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>19-SVG-ViewBox上</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        svg{
            display: block;
            margin: 0 auto;
            border: 1px solid #000;
        }
        div{
            width: 150px;
            height: 150px;
            border: 1px solid #000;
            overflow: auto;
        }
        div>p{
            white-space: nowrap;
        }
    </style>
</head>
<body>
<!--
    1.什么是ViewBox?
    ViewBox就是可视区域, 用户能看到的区域
    默认情况下，可视区域的大小和内容区域大小是一致的
    但是我们也可以手动修改可视区域的大小

    2.ViewBox属性格式
    viewBox="x y width height"
    x:修改可视区域x方向位置
    y:修改可视区域y方向位置
    width/height: 修改可视区域尺寸, 近大远小
-->
<!--
<div>
    <p>随便饭店内容1随便饭店内容1随便饭店内容1</p>
    <p>随便饭店内容2随便饭店内容2随便饭店内容2</p>
    <p>随便饭店内容3随便饭店内容3随便饭店内容3</p>
    <p>随便饭店内容4随便饭店内容4随便饭店内容4</p>
    <p>随便饭店内容5随便饭店内容5随便饭店内容5</p>
    <p>随便饭店内容6随便饭店内容6随便饭店内容6</p>
    <p>随便饭店内容7随便饭店内容7随便饭店内容7</p>
    <p>随便饭店内容8随便饭店内容8随便饭店内容8</p>
    <p>随便饭店内容9随便饭店内容9随便饭店内容9</p>
    <p>随便饭店内容10随便饭店内容10随便饭店内容10</p>
</div>
-->

<svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="50" fill="red"></circle>
</svg>
<!--
<svg width="200" height="200" viewBox="50 0 200 200">
    <circle cx="100" cy="100" r="50" fill="red"></circle>
</svg>
<svg width="200" height="200" viewBox="0 50 200 200">
    <circle cx="100" cy="100" r="50" fill="red"></circle>
</svg>
-->
<svg width="200" height="200" viewBox="0 0 400 400">
    <circle cx="100" cy="100" r="50" fill="red"></circle>
</svg>
<svg width="200" height="200" viewBox="0 0 100 100">
    <circle cx="100" cy="100" r="50" fill="red"></circle>
</svg>
</body>
</html>
```

