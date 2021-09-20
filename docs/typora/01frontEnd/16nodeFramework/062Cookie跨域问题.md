# 062 Cookie跨域问题

全局安装并使用http-server插件开启server服务（相当于服务器）网站。

```bash
# 需要全局安装，否则我启动不了
# 安装
npm install --global http-server
# 启动，进入需要启动的目录，3000是自己想要的端口号，-p就是端口号
http-server -p 3000
```



cookie是不能跨域使用的，所以保存登录状态会有问题。



```js
/*
1.Cookie的跨域问题
Cookie是不能跨域使用的, 所以在前后端分离开发的时候, 我们当前的代码就会出现问题
例如:
前端地址: http://192.168.0.107:3001/login.html
后端地址: http://127.0.0.1:3000/api/user/test

2.什么是跨域?
https://www.it666.com:3000
http://www.it666.com:3000

协议/一级域名/二级域名/端口号 有一个不同就是跨域
由于3000端口和3001端口不同, 所以就是跨域
所以我们在3000端口设置的cookie3001是不能使用的
    我们在3001端口设置的cookie3000也是不能使用的

3.如何解决前后端分离Cookie的跨域问题?
通过Nginx反向代理
http://nginx.org/en/download.html
* */
```

