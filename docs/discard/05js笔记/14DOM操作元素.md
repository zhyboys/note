---
title: DOM操作元素
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>操作元素</title>
</head>
<body>
<input type="text" id="txt1">
<input type="button" id="btn1" value="按钮">
<script>
window.onload=function()
{
    var oTxt=document.getElementById('txt1');
    var oBtn=document.getElementById('btn1');
    oBtn.onclick=function()
    {
        oTxt.setAttribute('value','捡肥皂');
    }
}
</script>
</body>
</html>
```

