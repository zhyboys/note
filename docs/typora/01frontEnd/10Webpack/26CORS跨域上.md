# 26 CORS跨域上

## 01 说明

```html
<!--
1.前端跨域问题?
同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能
所谓同源是指: 协议，域名，端口都相同,就是同源, 否则就是跨域
http://127.0.0.1:8080
http://127.0.0.1:8080  // 同源

http://127.0.0.1:8080
http://127.0.0.1:9090  // 跨域

2.利用webpack-dev-server代理解决跨域问题
devServer: {
        contentBase: "./dist",
        open: true,
        port: 9090,
        proxy: {
            // 所有API开头的请求都会被代理到target
            // 例如: 我们发送请求地址: http://127.0.0.1:9090/api
            //       实际发送请求地址: http://127.0.0.1:3000/api
            "/api": {
                target: "http://127.0.0.1:3000", // 代理地址
                changeOrigin: true,     // 域名跨域
                secure: false,          // https跨域
            }
        }
    }

devServer: {
    contentBase: "./dist",
    open: true,
    port: 9090,
    proxy: [{
            context:["/api", "/login"],
            target: "http://127.0.0.1:3000", // 代理地址
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
    }]
}

3.利用webpack-dev-server重写请求路径
proxy: [{
        context:["/api", "/login"],
        target: "http://127.0.0.1:3000", // 代理地址
        changeOrigin: true,     // 域名跨域
        secure: false,          // https跨域
        pathRewrite:{"^/api": ""} // 路径重写, 将路径中的api替换为空
}]
-->
```



## 02 启动node服务器

```js
const http = require("http");

http.createServer(function (req, res) {
    if(req.url.startsWith("/api/user") && req.method.toLowerCase() === "get"){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("知播渔666");
    }else if(req.url.startsWith("/api/login") && req.method.toLowerCase() === "get"){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("指趣学院666");
    }
}).listen(3000);
```





## 03 前端打包启动serve

```bash
cnpm install jquery
```

```js
import $ from "jquery";

/*
当前发送请求的地址: http://127.0.0.1:9090/user
服务端的地址:       http://127.0.0.1:3000/user
* */
$.get("/user", function (result) {
    console.log(result);
});

$.get("/login", function (result) {
    console.log(result);
});
```



## 04 配置

`webpack.config.js`

    devServer: {
        contentBase: "./bundle",
        open: true,
        port: 9090,
        /*
        proxy: {
            // 以下配置的含义:
            // 当我们在代码中发送请求到/user的时候, devServer就会自动将我们请求的地址替换为
            // http://127.0.0.1:3000/user
            "/user": {
                target: "http://127.0.0.1:3000",
                changeOrigin: true,     // 域名跨域
                secure: false,          // https跨域
            },
            "/login": {
                target: "http://127.0.0.1:3000",
                changeOrigin: true,     // 域名跨域
                secure: false,          // https跨
            },
            '/api': {
        		target: 'https://dev-health.csih.cn/api', // 测试环境
        		changeOrigin: true,
        		pathRewrite: {			// 路径重写--来自番茄树
          			'^/api': ''
        		}
      		}
        }
         */
