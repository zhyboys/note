# 03 JSONP

## 01 JSONP原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>20-jsonp原理</title>
</head>
<body>
<button>我是按钮</button>
<script>
    /*
    1.什么是JSONP?
    JSONP让网页从别的地址（跨域的地址）那获取资料，即跨域读取数据

    2.JSONP实现跨域访问的原理
    2.1在同一界面中可以定义多个script标签
    2.2同一个界面中多个script标签中的数据可以相互访问
    2.3可以通过script的src属性导入其它资源
    2.4通过src属性导入其它资源的本质就是将资源拷贝到script标签中
    2.5script的src属性不仅能导入本地资源, 还能导入远程资源
    2.6由于script的src属性没有同源限制, 所以可以通过script的src属性来请求跨域数据
    * */
    // let num = 666;
    // function demo() {
    //     console.log("demo");
    // }
</script>
<!--
<script src="20-jsonp.js">
    // let num = 777;
    // function test() {
    //     console.log("test777");
    // }
</script>
-->
<!--<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>-->
<script src="http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php"></script>
<script>
    // console.log(num);
    // demo();

    // console.log(num);
    // test();

    // $("button").click(function () {
    //     alert("按钮被点击了");
    // });

    /*
    当前网页的地址: http://127.0.0.1:63342/jQuery/Ajax/20-jsonp%E5%8E%9F%E7%90%86.html
    远程资源的地址: http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php
    */
    console.log(num);
</script>
</body>
</html>
```

20-jsonp.php

```php
<?php
//echo "let num = 789;";
//echo "demo(666);";

$cb = $_GET['cb']; // test
echo $cb."(666);"; // test(666);

//$arr = array("userName"=>"lnj", "password"=>"it666");
//$data = json_encode($arr);
//echo "demo(".$data.")";
?>
```

20-jsonp.js

```js
let num = 777;
function test() {
    console.log("test777");
}
```

## 02 JSONP优化

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>21-JSONP优化</title>
</head>
<body>
<!--<script src="http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php?cb=test"></script>-->
<script>
    /*
    优化一
    1.在企业开发中通过JSONP来获取跨域的数据,
    一般情况下服务器返回的都不会是一个变量, 而是一个函数的调用
    */

    /*
    优化二
    2.当前服务器返回的函数调用名称写死了
    服务器返回函数叫什么名称, 我们本地就必须定义一个叫什么名称的函数
    */
    /*
    解决方案:
    通过URL参数的方式来动态指定函数名称
    */

    /*
    优化三
    3.由于script标签默认是同步, 前面的script标签没有加载完数据, 后面的script标签就不会被执行
    所以请求数据的script标签必须放到后面
    */
    /*
    解决方案:
    通过JS动态创建script标签, 因为JS动态创建的script标签默认就是异步的,
    不用等到前面的标签加载完就可以执行后面的script标签
    */

    let oScript = document.createElement("script");
    oScript.src = "http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php?cb=test";
    document.body.appendChild(oScript);

    function test(data) {
        console.log(data);
    }
</script>
<!--
<script src="http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php?cb=test">
    // demo(666);
    // test(666);
</script>
-->
</body>
</html>
```