# 21 promise改造Ajax

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>40-Promise-改造Ajax</title>
</head>
<body>
<script>
    function obj2str(data) {
        data = data || {};
        data.t = new Date().getTime();
        var res = [];
        for(var key in data){
            res.push(encodeURIComponent(key)+"="+encodeURIComponent(data[key]));
        }
        return res.join("&");
    }
    function ajax(option) {
        return new Promise(function (resolve, reject) {
            // 0.将对象转换为字符串
            var str = obj2str(option.data);
            // 1.创建一个异步对象
            var xmlhttp, timer;
            if (window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
            }else{
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            // 2.设置请求方式和请求地址
            if(option.type.toLowerCase() === "get"){
                xmlhttp.open(option.type, option.url+"?"+str, true);
                // 3.发送请求
                xmlhttp.send();
            }else{
                xmlhttp.open(option.type, option.url,true);
                // 注意点: 以下代码必须放到open和send之间
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttp.send(str);
            }

            // 4.监听状态的变化
            xmlhttp.onreadystatechange = function (ev2) {
                if(xmlhttp.readyState === 4){
                    clearInterval(timer);
                    // 判断是否请求成功
                    if(xmlhttp.status >= 200 && xmlhttp.status < 300 ||
                        xmlhttp.status === 304){
                        // 5.处理返回的结果
                        // console.log("接收到服务器返回的数据");
                        // option.success(xmlhttp);
                        resolve(xmlhttp);
                    }else{
                        // console.log("没有接收到服务器返回的数据");
                        // option.error(xmlhttp);
                        reject(xmlhttp);
                    }
                }
            }
            // 判断外界是否传入了超时时间
            if(option.timeout){
                timer = setInterval(function () {
                    console.log("中断请求");
                    xmlhttp.abort();
                    clearInterval(timer);
                }, option.timeout);
            }
        });
    }
</script>
<script>
    ajax({
        type:"post",
        url:"40.php",
        // success: function (xhr) {
        //     let str = xhr.responseText;
        //     let json = JSON.parse(str);
        //     console.log(json);
        // },
        // error: function (xhr) {
        //     console.log(xhr.status);
        // }
    }).then(function (xhr) {
        let str = xhr.responseText;
        let json = JSON.parse(str);
        console.log(json);
    }).catch(function (xhr) {
        console.log(xhr.status);
    });
</script>
</body>
</html>
```

```php
<?php
$arr = array("name"=>"知播渔教育", "age"=>"2");
$data = json_encode($arr);
echo $data;
```

