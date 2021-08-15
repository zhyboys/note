# 22 fetch基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>41-fetch基本使用</title>
</head>
<body>
<script>
    /*
    1.什么是fetch?
    和Ajax一样都是用于请求网络数据的
    fetch是ES6中新增的, 基于Promise的网络请求方法

    2.fetch基本使用
    fetch(url, {options})
    .then()
    .catch();

    http://127.0.0.1/jQuery/Ajax/41.php
    */
    /*
    fetch("http://127.0.0.1/jQuery/Ajax/41.php?teacher=lnj&age=34", {
        method: "get"
    }).then(function (res) {
        // console.log(res.text());
        // return res.text();
        return res.json();
    }).then(function (data) {
        console.log(data);
        console.log(typeof data);
    }).catch(function (e) {
        console.log(e);
    });
    */
    fetch("http://127.0.0.1/jQuery/Ajax/41.php", {
        method: "post",
        body: JSON.stringify({teacher:"zq", age:666})
    }).then(function (res) {
        // console.log(res.text());
        // return res.text();
        return res.json();
    }).then(function (data) {
        console.log(data);
        console.log(typeof data);
    }).catch(function (e) {
        console.log(e);
    });
</script>
</body>
</html>
```

php

```php
<?php
//echo "it666";

//$teacher = $_GET["teacher"];
//$age = $_GET["age"];
//$arr = array("name"=>$teacher, "age"=>$age);
//$data = json_encode($arr);
//echo $data;

$rws_post = $GLOBALS["HTTP_RAW_POST_DATA"];
$mypost = json_decode($rws_post);
$teacher = (string)$mypost->teacher;
$age = (string)$mypost->age;
$arr = array("name"=>$teacher, "age"=>$age);
$data = json_encode($arr);
echo $data;
```