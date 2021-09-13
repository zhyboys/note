# 12 XML

1. js中接收xml文件需要用`xhr.responseXML;`。
2. 下面代码文件名是`11-ajax-xml.html`。

```JavaScript
window.onload = function (ev) {

    var oBtn = document.querySelector("button");
    oBtn.onclick = function (ev1) {
        ajax({
            type:"get",
            url:"11-ajax-xml.php",
            success: function (xhr) {
                // console.log(xhr.responseXML);
                // console.log(document);
                var res = xhr.responseXML;
                console.log(res.querySelector("name").innerHTML);
                console.log(res.querySelector("age").innerHTML);
            },
            error: function (xhr) {
                console.log(xhr.status);
            }
        })
    }
}
```

1. php中header需要写下面代码防止乱码，因为传递的数据xml中有中文就可能乱码。
2. 最后是返回一个文件需要用到file_get_contents方法。
3. 文件名是`11-ajax-xml.php`。

```php
<?php
// 执行结果中有中文, 必须在php文件顶部设置
//header("content-type:text/html; charset=utf-8");
// 如果PHP中需要返回XML数据, 也必须在PHP文件顶部设置
header("content-type:text/xml; charset=utf-8");

echo file_get_contents("info.xml");//xml路径
```

1. xml第一行必须这么写。
2. xml必须有一个根标签，命名自己命，下面的根标签名是person。
3. xml所有标签都自己命名。
4. 文件名是`info.xml`。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<person>
    <name>李南江</name>
    <age>33</age>
</person>
```