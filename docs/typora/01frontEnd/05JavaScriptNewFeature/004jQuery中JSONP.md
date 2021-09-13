# 04 jQuery中的JSONP

跨域请求时需要参数`dataType: "jsonp", // 告诉jQuery需要请求跨域的数据，必须掌握`。

踩坑总结：

1. php上级文件夹不能有中文命名，php本身也不能用中文命名，否则出现不知名错误，我还以为jQuery不能跨域了。
2. success方法，php中调用使用的参数时callback而不是cb。正确：`$cb = $_GET["callback"];`。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>22-jQuery中jsonp使用</title>
</head>
<body>
<script src="js/jquery-1.12.4.js"></script>
<script>
    /*
    当前网页的地址: http://127.0.0.1:63342/jQuery/Ajax/22-jQuery%E4%B8%ADjsonp%E4%BD%BF%E7%94%A8.html
    当前资源的地址: http://127.0.0.1:80/jQuery/Ajax/22-jsonp.php
    */
    $.ajax({
        url: "http://127.0.0.1:80/jQuery/Ajax/22-jsonp.php",
        data:{
            "teacher": "lnj",
            "age": 34
        },
        dataType: "jsonp", // 告诉jQuery需要请求跨域的数据，必须掌握
        jsonp: "cb",  // 告诉jQuery服务器在获取回调函数名称的时候需要用什么key来获取，了解
        jsonpCallback: "lnj", // 告诉jQuery服务器在获取回调函数名称的时候回调函数的名称是什么，了解
        success: function (msg) {
            console.log(msg);
        }
    });
</script>
</body>
</html>
```

```php
<?php
// 0.拿到传递过来的数据
$teacher = $_GET["teacher"];
$age = $_GET["age"];
$arr = array("name"=>$teacher, "age"=>$age);
$data = json_encode($arr);

// 1.拿到回调函数的名称
//$cb = $_GET["callback"]; // jQuery112406520384710124194_1559732574283
$cb = $_GET["cb"]; // lnj
// 2.返回数据
//echo $cb."(666);"; // jQuery112406520384710124194_1559732574283(666);
echo $cb."(".$data.");"; // jQuery112406520384710124194_1559732574283(666);
?>
```

