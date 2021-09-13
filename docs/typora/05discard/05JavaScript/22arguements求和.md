---
title: arguements求和
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function sum(){
        var result=0;
        console.log(arguments);//arguments就是所传入的参数
        for(var i=0;i<arguments.length;i++)
        {
            result+=arguments[i];
        }
        console.log(result);
        return result;
    }
    sum(10,20,30);//60
</script>
</body>
</html>
```

