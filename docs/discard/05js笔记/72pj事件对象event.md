---
title: pj事件对象
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>事件对象</title>
</head>
<body>
<script>
    /*
event适用于除IE（使用window.event）的所有浏览器

    clientX     光标相对于该网页的水平位置，可视区域为基准
    clientY     光标相对于该网页的垂直位置，可视区域为基准
    type        事件的类型
    target      该事件被传送到的对象
    screenX     光标相对于该屏幕的水平位置
    screenY     光标相对于该屏幕的垂直位置
    pageX       光标相对于该网页的绝对水平位置（不适用IE）
    pageY       光标相对于该网页的绝对垂直位置（不适用IE）
    width       该窗口或框架的宽度
    height      该窗口或框架的高度
    data        返回拖拽对象的URL字符串
     */
    var btn = document.getElementById('btn');

    btn.onclick = function(event){
        var e = event || window.event;
        console.log(e.event);
        console.log(event.pageX);
    }
    /*
    onmousemove鼠标一在当前元素移动就触发，频率非常高
    onmouseover当鼠标进入当前元素时触发，只触发一次
    onmouseup当鼠标弹起时触发
    onmousedown当鼠标按下时触发
     */
</script>
</body>
</html>
```

