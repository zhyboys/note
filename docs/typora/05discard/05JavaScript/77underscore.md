---
title: underscore
---

## 文件：each与without方法
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>两个方法</title>
    <script src="unserscore.js"></script>
</head>
<body>
<script>
    window.onload = function(){
        //1 each方法
        var arr = ['张三','男',12,9510];
        _.each(arr,function(item,index,arr){
            console.log(item,index,arr)
        });

        //2 without方法： 返回一个去掉某元素的数组副本
        console.log(_.without(arr, '张三'));

        //random方法
        console.log(_.random(-5, 5));//产生-5到5之间的随机数

    }
</script>
</body>
</html>
```
## 文件：unserscore.js
```html
详见上面某文
```


