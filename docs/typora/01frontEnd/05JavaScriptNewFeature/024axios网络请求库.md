# 24 axios网络请求库

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>43-axios网络请求库</title>
</head>
<body>
<script src="js/axios.js"></script>
<script>
    /*
    1.什么是axios?
    Axios 是一个基于 promise 的 HTTP 库网络请求插件

    2.axios特点
    2.1可以用在浏览器和 node.js 中
    2.2支持 Promise API
    2.3自动转换 JSON 数据
    2.4客户端支持防御 XSRF
    */
    /*
    // axios.get("http://127.0.0.1/jQuery/Ajax/41.php")
    // axios.get("http://127.0.0.1/jQuery/Ajax/41.php?teacher=lnj&age=34")
    axios.post("http://127.0.0.1/jQuery/Ajax/41.php", {
        teacher: "lnj",
        age: 666
    })
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (e) {
            console.log(e);
        });
    */

    /*
    3.全局的 axios 默认值
    在企业开发中项目分为 :开发阶段和部署阶段, 这两个阶段项目存储的位置是不同的
    项目上线前存储在企业内部测试服务器上, 项目上线后存储在企业正式服务器上
    所以如果每次请求都将请求的地址写在请求中, 那么项目上线时需要大量修改请求地址
    为了解决这个问题, 我们可以配置一个全局URL根地址, 项目上线时只需要修改根地址即可
    例如: 上线前地址是: http://127.0.0.1/jQuery/Ajax/41.php
          上线后地址是: http://192.199.13.14/jQuery/Ajax/41.php
    */
    axios.defaults.timeout = 2000;
    axios.defaults.baseURL = "http://127.0.0.1";
    axios.post("/jQuery/Ajax/41.php", {
        teacher: "lnj",
        age: 666
    })
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (e) {
            console.log(e);
        });
</script>
</body>
</html>
```