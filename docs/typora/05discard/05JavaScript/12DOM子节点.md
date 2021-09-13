---
title: DOM子节点
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul id="ull">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
<script>
//    window.onload=function()
//    {
        var oUl=document.getElementById('ull');
//alert(oUl.children.length);
        for(var i=0;i<oUl.childNodes.length;i++)
        {
//            nodeType==3;文本节点
//            nodeType==1;元素节点
//            nodeType==8；
//            alert(oUl.childNodes[i].nodeType);
            if(oUl.childNodes[i].nodeType===1)
            {
                oUl.childNodes[i].style.background='red';
            }
        }
//    };


</script>
</body>
</html>
```

