---
title: transform形变
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>形变</title>
    <style>
        #box{
            width: 50px;
            height: 50px;
            background-color: yellow;
            transform:
        }
    </style>
</head>
<body>
<button id="btn">
    形变
</button>
<div id="box"></div>
<script>
    function $(id)
    {
        return typeof id === 'string' ?  document.getElementById(id) :  null;
    }

    var index = 0,a = 1;
    $('btn').onclick = function(){
        if(a===1)
        {
            index++;
            if(index===10){a=2}
        }else{
            index--;
            if (index===0){a=1}
        }

        $('box').style.transform = 'translate('+(index*100)+'px,'+(index*50)+'px) rotate('+(index*45)+'deg) scale('+(index*1.1)+')';

    }



</script>
</body>
</html>
```

