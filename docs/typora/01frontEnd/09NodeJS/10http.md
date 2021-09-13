# 10 http

http模块，服务器模块。

## 01 http模块

```
1.什么是HTTP模块
通过Nodejs提供的http模块，我们可以快速的构建一个web服务器,
也就是快速实现过去PHP服务器的功能(接收浏览器请求、响应浏览器请求等)

2.通过HTTP模块实现服务器功能步骤
2.1导入HTTP模块
2.2创建服务器实例对象
2.3绑定请求事件
2.4监听指定端口请求
```

```js
let http = require("http");

/*
// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    // end方法的作用: 结束本次请求并且返回数据
    // res.end("www.it666.com");
    // writeHead方法的作用: 告诉浏览器返回的数据是什么类型的, 返回的数据需要用什么字符集来解析，200是返回的状态码
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("知播渔");
});
// 3.指定监听的端口
server.listen(3000);
 */
```

## 02 搭建服务器简写

利用链式编程方式搭建服务器。疑问：链式编程什么意思？

```js
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("知播渔www666");
}).listen(3000);
```

## 03 路径分发

```
1.什么是路径分发?
路径分发也称之为路由, 就是根据不同的请求路径返回不同的数据

2.如何根据不同的请求路径返回不同的数据?
通过请求监听方法中的request对象, 我们可以获取到当前请求的路径
通过判断请求路径的地址就可以实现不同的请求路径返回不同的数据
```

1. req.url判断路径
2. res.end结束请求，同时也返回数据，写多个end之返回第一个，因为结束了
3. res.write只返回数据，不结束请求

```js
let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
/*
request对象其实是http.IncomingMessage 类的实例
response对象其实是http.ServerResponse 类的实例
* */
server.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    // console.log(req.url);
    if(req.url.startsWith("/index")){
        // 注意点: 如果通过end方法来返回数据, 那么只会返回一次
        // res.end("首页1");
        // res.end("首页2");
        // 注意点: 如果通过write方法来返回数据, 那么可以返回多次
        //         write方法不具备结束本次请求的功能, 所以还需要手动的调用end方法来结束本次请求
        res.write("首页1");
        res.write("首页2");
        res.end();
    }else if(req.url.startsWith("/login")){
        res.end("登录");
    }else{
        res.end("没有数据");
    }
});
// 3.指定监听的端口
server.listen(3000);
```

## 04 响应完整网页

```
1.响应完整页面
拿到用户请求路径之后, 只需要利用fs模块将对应的网页返回即可
```

注释掉的代码没必要看了

```js
let http = require("http");
let path = require("path");
let fs = require("fs");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    /*
    if(req.url.startsWith("/index")){
        // let filePath = path.join(__dirname, "www", "index.html");
        // let filePath = path.join(__dirname, "www", req.url);
        // fs.readFile(filePath, "utf8", function (err, content) {
        //     if(err){
        //         res.end("Server Error");
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else if(req.url.startsWith("/login")){
        // let filePath = path.join(__dirname, "www", req.url);
        // fs.readFile(filePath, "utf8", function (err, content) {
        //     if(err){
        //         res.end("Server Error");
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else{
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("没有数据");
    }
    */
    readFile(req, res);
});
// 3.指定监听的端口
server.listen(3000);

function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    fs.readFile(filePath, "utf8", function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}
```

## 05 响应静态资源

```
1.响应静态资源
在给浏览器返回数据的时候,
如果没有指定响应头的信息,
如果没有设置返回数据的类型,
那么浏览器不一定能正确的解析

所以无论返回什么类型的静态资源都需要添加对应的响应头信息
```

1. 加载其它的资源不能写utf8。
2. 如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示。
3. `./mime.json`。设置响应头。

```js
let http = require("http");
let path = require("path");
// let fs = require("fs");
// let mime = require("./mime.json");
let ss = require("./15-StaticServer.js");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    // readFile(req, res);
    // let rootPath = path.join(__dirname, "www");
    let rootPath = "C:\\Users\\Jonathan_Lee\\Desktop\\abc";
    ss.StaticServer(req, res, rootPath);
});
// 3.指定监听的端口
server.listen(3000);
/*
function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    // console.log(filePath);
    // 注意点:
    // 1.加载其它的资源不能写utf8
    // 2.如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示
    let extName = path.extname(filePath);
    let type = mime[extName];
    if(type.startsWith("text")){
        type += "; charset=utf-8;";
    }
    res.writeHead(200, {
        "Content-Type": type
    });
    fs.readFile(filePath, function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}
 */
```

## 06 响应静态资源封装

```js
// let path = require("path");
let fs = require("fs");
let mime = require("./mime.json");

function readFile(req, res, rootPath) {
    let filePath = path.join(rootPath, req.url);
    // console.log(filePath);
    /*
    注意点:
    1.加载其它的资源不能写utf8
    2.如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示
    * */
    let extName = path.extname(filePath);
    let type = mime[extName] || "";
    if(type.startsWith("text")){
        type += "; charset=utf-8;";
    }
    res.writeHead(200, {
        "Content-Type": type
    });
    fs.readFile(filePath, function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}

exports.StaticServer = readFile;
```

**我的总结**

服务器构建共两部：

1. 告诉浏览器，我一会而要给你发送个文件，这个文件要 “ 用什么方式 ” 读取。就是writeHead。
2. 读取并返回文件。

## 07 Get参数处理

```
1.如何拿到Get请求传递过来的参数
使用URL模块

url.format(urlObject)  将对象转换为路径
url.parse(urlString[, parseQueryString[, slashesDenoteHost]])  将路径转换为对象
```

```js
let url = require("url");
let http = require("http");

// let str = "http://root:123456@www.it666.com:80/index.html?name=lnj&age=68#banner";
// let obj = url.parse(str, true);
// console.log(obj);
// console.log(obj.query.name);
// console.log(obj.query.age);

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // console.log(req.url);
    let obj = url.parse(req.url, true);
    res.end(obj.query.name + "----" + obj.query.age);
});
// 3.指定监听的端口
server.listen(3000);
```

## 08 Post参数处理

```
0.req绑定data，end
1.如何拿到POST请求传递过来的参数
使用querystring模块

querystring.parse(str[, sep[, eq[, options]]])  将参数转换为对象
querystring.stringify(obj[, sep[, eq[, options]]]) 将对象转换为参数
```

```js
let http = require("http");
let queryString = require("querystring");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // 1.定义变量保存传递过来的参数
    let params = "";
    // 注意点: 在NODEJS中 ,POST请求的参数我们不能一次性拿到, 必须分批获取
    req.on("data", function (chunk) {
        // 每次只能拿到一部分数据
        params += chunk;
    });
    req.on("end", function () {
        // 这里才能拿到完整的数据
        // console.log(params);
        let obj = queryString.parse(params);
        // console.log(obj.userName);
        // console.log(obj.password);
        res.end(obj.userName + "----" + obj.password);
    });
});
// 3.指定监听的端口
server.listen(3000);
```

踩坑：` req.on("end", function () {xxx})`执行到这，后面的代码不会执行了，所以需要把你要执行的代码全全全写在xxx处。

## 09 区分Get与Post

```
1.在服务端如何区分用户发送的是GET请求和POST请求?
通过HTTP模块http.IncomingMessage 类的.method属性

req.method
```

```js
let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // console.log(req.method);
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    if(req.method.toLowerCase() === "get"){
        res.end("利用GET请求的方式处理参数");
    }else if(req.method.toLowerCase() === "post"){
        res.end("利用POST请求的方式处理参数");
    }
});
// 3.指定监听的端口
server.listen(3000);
```

## 10 练习

写一个动态页面，能返回查询的值。

```js
let http = require("http");
let path = require("path");
let fs = require("fs");
let url = require("url");
let queryString = require("querystring");
let template = require("art-template");

let persons = {
    "lisi": {
        name: "lisi",
        gender: "male",
        age: "33"
    },
    "zhangsan": {
        name: "zhangsan",
        gender: "female",
        age: "18"
    }
};

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
   if(req.url.startsWith("/index") && req.method.toLowerCase() === "get"){
       let obj = url.parse(req.url);
       let filePath = path.join(__dirname, obj.pathname);
       fs.readFile(filePath, "utf8", function (err, content) {
           if(err){
               res.writeHead(404, {
                   "Content-Type": "text/plain; charset=utf-8"
               });
               res.end("Page Not Found");
           }
           res.writeHead(200, {
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(content);
       });
   }
   else if(req.url.startsWith("/info") && req.method.toLowerCase() === "post"){
       let params = "";
       req.on("data", function (chunk) {
           params += chunk;
       });
       req.on("end", function () {
           let obj = queryString.parse(params);
           let per = persons[obj.userName];
           // console.log(per);
           let filePath = path.join(__dirname, req.url);
           /*
           fs.readFile(filePath, "utf8", function (err, content) {
               if(err){
                   res.writeHead(404, {
                       "Content-Type": "text/plain; charset=utf-8"
                   });
                   res.end("Page Not Found");
               }
               content = content.replace("!!!name!!!", per.name);
               content = content.replace("!!!gender!!!", per.gender);
               content = content.replace("!!!age!!!", per.age);
               res.end(content);
           });
            */
           let html = template(filePath, per);
           res.writeHead(200, {
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(html);
       });
   }
});
// 3.指定监听的端口
server.listen(3000);
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="./info.html" method="post">
    <input type="text" name="userName">
    <input type="submit" value="查询">
</form>
</body>
</html>
```

info.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
<!--    <li>姓名: !!!name!!!</li>-->
<!--    <li>性别: !!!gender!!!</li>-->
<!--    <li>年龄: !!!age!!!</li>-->

    <li>姓名: <%=name%></li>
    <li>性别: <%=gender%></li>
    <li>年龄: <%=age%></li>
</ul>
</body>
</html>
```