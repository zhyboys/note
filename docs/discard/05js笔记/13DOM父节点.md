---
title: DOM父节点
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>父节点</title>
</head>
<body>
<div>
<ul id="ull">
    <li>14545<a href="#">隐藏</a></li>
    <li>87687<a href="#">隐藏</a></li>
    <li>54678<a href="#">隐藏</a></li>
    <li>45675<a href="#">隐藏</a></li>
    <li>56668<a href="#">隐藏</a></li>
</ul>
</div>
</body>
<script>
    var oUl=document.getElementById('ull');
    var aA=oUl.getElementsByTagName('a');
    for(var i=0;i<aA.length;i++)
    {
        aA[i].onclick=function()
        {
            this.parentNode.style.display='none';
        }
    }
//    alert(oUl.parentNode);
</script>
</html>
```

