# 004 node响应动态网页

必定少不了使用模板引擎，模板引擎有很多，这次使用ejs

搜索npmjs.com->ejs

- 安装命令

```npm
 npm install ejs
```

- 使用example

```js
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

- 基础语法

```js
let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});
```

***



`views文件夹下index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>动态网页</title>
</head>
<body>
    <h1>我是动态网页</h1>
    <h2><%=msg%></h2>
</body>
</html>
```



`app.js`

```js
// 1.导入http模块
const http = require('http');
const queryString = require('querystring');
const dynamicServer = require('./dynamicServer');

// 2.通过http模块创建服务对象
const server = http.createServer();
// 3.通过服务对象监听用户请求
server.on('request', (req, res)=>{
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
            // console.log('处理登录请求', params);
            let data  = {msg: '我是动态数据'};
            req.data = data;
            dynamicServer.renderHTML(req, res, './views/index.html');
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



`dynamicServer.js`

```js
// 1.导入http模块
const http = require('http');
const queryString = require('querystring');
const dynamicServer = require('./dynamicServer');

// 2.通过http模块创建服务对象
const server = http.createServer();
// 3.通过服务对象监听用户请求
server.on('request', (req, res)=>{
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
            // console.log('处理登录请求', params);
            let data  = {msg: '我是动态数据'};
            req.data = data;
            dynamicServer.renderHTML(req, res, './views/index.html');
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

