# 09 静态方法holdReady

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>12-静态方法holdReady方法</title>
    <script src="js/jquery-1.12.4.js"></script>
    <script>
        // $.holdReady(true); 作用: 暂停入口函数ready执行(参数为true)，
        //入口函数的用处是等所有document加载完后自己再执行。
        //暂停后，不停止暂停，入口函数就永不执行
        $.holdReady(true);
        $(document).ready(function () {
            alert("ready");
        });
    </script>
</head>
<body>
<button>回复ready事件</button>
<script>
    var btn = document.getElementsByTagName("button")[0];
    btn.onclick = function () {
        $.holdReady(false);
    }
</script>
</body>
</html>
```