# 002 nodeMon自动重启工具



```js
/*
1.什么是nodemon？
nodemon 是一个监视服务端应用程序文件改变的包，
一旦nodemon发现我们修改了服务器文件，它就会自动重启服务
这样我们就可以省去 ctrl+c 停止服务-> 启动服务，这个步骤

2.nodemon使用
2.1本地安装-使用命令
npm i nodemon
npx nodemon app.js替代node app.js

2.2全局安装-使用命令
npm i nodemon -g
nodemon app.js
* */
// 1.导入http模块
const http = require('http');
const queryString = require('querystring');

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

