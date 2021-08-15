# 001 node搭建服务器回顾

## 01 搭建服务

```js
// 1.导入http模块
const http = require('http');
// 2.通过http模块创建服务对象
const server = http.createServer();
// 3.通过服务对象监听用户请求
server.on('request', (req, res)=>{})
// 4.指定监听的端口号
server.listen(3000);
```



## 02 req和res对象

```js
req.method // post 请求方式
req.url // 路径/路由
```



**get请求取参数**

```js
const queryString = require('querystring');
params = queryString.parse(params); // 将请求的name=zs参数内容变为对象
```

**post请求取参数**

```js
req.on('data', (chuck)=>{
            params += chuck;
        });
        req.on('end', ()=>{
            params = queryString.parse(params);
            // 5.处理路由
            if(path === '/login'){
                console.log('post处理登录请求', params);
            }else if(path === '/register'){
                console.log('post处理注册请求', params);
            }
        });
```





## 03 老师原本讲

```js
/*
1.如何通过原生NodeJS搭建Web服务器
2.如何处理Get请求, 如何处理POST请求
3.如何处理不同路径(路由)
4.如何处理(获取)请求参数
* */
// 1.导入http模块
const http = require('http');
const queryString = require('querystring');

// 2.通过http模块创建服务对象
const server = http.createServer();
// 3.通过服务对象监听用户请求
server.on('request', (req, res)=>{
    console.log('接收到请求');
    // 1.获取请求类型
    let method = req.method.toLowerCase();
    // 2.获取请求路径
    let url = req.url;
    let path = url.split('?')[0];
    // 3.获取请求参数
    let params = '';
    if(method === 'get'){
        // 4.处理请求参数
        params = url.split('?')[1];
        params = queryString.parse(params);
        // 5.处理路由
        if(path === '/login'){
            console.log('处理登录请求', params);
        }else if(path === '/register'){
            console.log('处理注册请求', params);
        }
    }else if(method === 'post'){
        // 4.处理请求参数
        req.on('data', (chuck)=>{
            params += chuck;
        });
        req.on('end', ()=>{
            params = queryString.parse(params);
            // 5.处理路由
            if(path === '/login'){
                console.log('post处理登录请求', params);
            }else if(path === '/register'){
                console.log('post处理注册请求', params);
            }
        });
    }
});
// 4.指定监听的端口号
server.listen(3000);
```

