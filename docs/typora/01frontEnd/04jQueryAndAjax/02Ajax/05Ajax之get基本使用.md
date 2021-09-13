# 05 Ajax之get基本使用

Ajax之重要5步

1. 创建异步对象。
2. 设置请求方式和请求地址。
3. 发送请求。
4. 监听状态变化。
5. 处理返回结果。

```html
<button>发送请求</button>
```

js

```javascript
<!--
1.什么是Ajax?
AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。
就是为了不重新加载整个页面。
-->
    window.onload = function (ev) {
        var oBtn = document.querySelector("button");
        oBtn.onclick = function (ev1) {
            // 1.创建一个异步对象
            var xmlhttp=new XMLHttpRequest();
            // 2.设置请求方式和请求地址
            /*
            method：请求的类型；GET 或 POST
            url：文件在服务器上的位置
            async：true（异步）或 false（同步），Ajax存在的意义就是异步请求，所以永远选true
            */
            xmlhttp.open("GET", "04-ajax-get.php", true);
            // 3.发送请求
            xmlhttp.send();
            // 4.监听状态的变化
            xmlhttp.onreadystatechange = function (ev2) {
                /*
                0: 请求未初始化
                1: 服务器连接已建立
                2: 请求已接收
                3: 请求处理中
                4: 请求已完成，且响应已就绪
                */
                if(xmlhttp.readyState === 4){
                    // 判断是否请求成功
                    if(xmlhttp.status >= 200 && xmlhttp.status < 300 ||
                       xmlhttp.status === 304){
                        // 5.处理返回的结果
                        console.log("接收到服务器返回的数据");
                    }else{
                        console.log("没有接收到服务器返回的数据");
                    }

                }
            }
        }
    }
```

php

```php
//sleep(5);
echo "ajax get page";
//echo $_GET["userName"];
//echo "<br>";
//echo $_GET["userPwd"];
```