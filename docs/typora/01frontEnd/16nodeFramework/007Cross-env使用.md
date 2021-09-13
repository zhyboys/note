# 007 Cross-env使用

补充

```
set NODE_ENV 基于会话，关闭窗口失效
```



1. 安装
2. 复制脚本到package.json

`app.js`

```js
/*服务端业务逻辑的核心文件*/
/*处理各种请求*/
/*
1.不同平台设置环境变量方式
例如：windows下配置NODE_ENV
#首先查看NODE_ENV是否存在
set NODE_ENV
#如果不存在则添加环境变量
set NODE_ENV=production
#某些时候需要删除环境变量
set NODE_ENV=

例如：Linux下配置NODE_ENV
#首先查看NODE_ENV是否存在
echo $NODE_ENV
#如果不存在则添加环境变量
export NODE_ENV=production
#某些时候需要删除环境变量
unset NODE_ENV

2.什么是cross-env?
cross-env是一款运行跨平台的设置和使用环境变量的脚本。

3.为什么要使用cross-env
因为我们在自定义配置环境变量的时候，
由于在不同的环境下，配置的方式也是不同
所以我们需要使用cross-env来统一配置方式

4.cross-env使用
npm install --save-dev cross-env
"scripts": {
  "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
  "build": "cross-env NODE_ENV=pro nodemon ./bin/www.js",
}
npm run dev
* */
const queryString = require('querystring');
const goodsRouterHandle = require('./router/goods');
const userRouterHandle = require('./router/user');

const initParams = (req) =>{
    // 准备 请求方式 / 请求路径 / 请求参数
    // 1.处理请求方式
    req.method = req.method.toLowerCase();
    // 2.处理请求路径
    req.path = req.url.split('?')[0];
    // 3.处理请求参数
    return new Promise((resolve, reject)=>{
        if(req.method === 'get'){
            let params = req.url.split('?')[1];
            req.query = queryString.parse(params);
            resolve();
        }else if(req.method === 'post'){
            let params = '';
            req.on('data', (chunk)=>{
                params += chunk;
            });
            req.on('end', ()=>{
                req.body = queryString.parse(params);
                resolve();
            });
        }
    });
}

console.log(process.env.NODE_ENV);
const serverHandle = (req, res)=>{
    res.writeHead(200, {
        'Content-Type':'application/json; charset=utf-8;'
    });
    // 1.准备各种请求参数
    initParams(req).then(()=>{
        // 2.处理各种路由
        // 2.1处理商品相关路由
        let goodsData = goodsRouterHandle(req, res);
        if(goodsData){
            res.end(JSON.stringify(goodsData));
            return
        }
        // 2.2处理用户相关路由
        let userData = userRouterHandle(req, res);
        if(userData){
            res.end(JSON.stringify(userData));
            return
        }
        // 2.3没有匹配到任何路由
        res.writeHead(404, {
            'Content-Type':'text/plain; charset=utf-8;'
        });
        res.end('404 Not Found');
    })
};
module.exports = serverHandle;
```

