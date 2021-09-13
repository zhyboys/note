---
title: DOM使用class封装
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>class</title>

</head>
<body>
<ul id="yyy">
    <li class="ll"></li>
    <li></li>
    <li class="ll"></li>
    <li></li>
    <li class="ll"></li>
</ul>
<script>
//    window.onload=function() {
//        var oI = document.getElementsByClassName('ll');
//        for(var i=0;i<oI.length;i++) {
//            oI[i].style.background = 'red';
//        }
//    }
function getByClass(oParent,cc)
{
    var aReturn=[];
    var aEle= oParent.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==cc)
        {
            aReturn.push(aEle[i]);
        }
    }
    return aReturn;
}
    window.onload=function()
    {
        var oUl=document.getElementsByTagName('ul');
        var aa=getByClass(oUl[0],'ll');
        for(var i=0;i<aa.length;i++)
        {
            aa[i].style.background='red'
        }
    };


//    window.onload=function()
//    {
//        var aLi=document.getElementsByTagName('li');
//        for(var i=0;i<aLi.length;i++)
//        {
//            if(aLi[i].className=='ll')
//            {
//                aLi[i].style.background='red';
//            }
//        }
//        ================================
//    }
</script>
</body>
</html>
```

