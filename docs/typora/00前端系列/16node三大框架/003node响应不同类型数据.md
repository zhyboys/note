# 003 node响应不同类型数据



## 01 JSON

```js
 // 1.告诉客户端返回的数据是什么类型，并指定字符编码，防止中文乱码，200是状态码
res.writeHead(200, {
    // 'Content-Type': 'text/plain; charset=utf-8;'
    'Content-Type': 'application/json;'
});
// 2.告诉客户端返回的数据是什么
// res.end('www.it666.com 知播渔');
res.end(JSON.stringify({name:'lnj', age:33}));
```



## 02 静态资源

例如图片和网页

`app.js`

```js
// 1.导入http模块
const http = require('http');
const queryString = require('querystring');
const path = require('path');
const rootPath = path.join(__dirname, 'www');
const staticServer = require('./staticServer');

// 2.通过http模块创建服务对象
const server = http.createServer();
// 3.通过服务对象监听用户请求
server.on('request', (req, res)=>{
    staticServer.readFile(req, res, rootPath);
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
            // 1.告诉客户端返回的数据是什么类型
            res.writeHead(200, {
                // 'Content-Type': 'text/plain; charset=utf-8;'
                'Content-Type': 'application/json;'
            });
            // 2.告诉客户端返回的数据是什么
            // res.end('www.it666.com 知播渔');
            res.end(JSON.stringify({name:'lnj', age:33}));
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

`staticServer.js`

```js
const path = require('path');
const fs = require('fs');
const mime = require('./mime');
/**
 * 读取静态资源
 * @param req  请求对象
 * @param res  响应对象
 * @param rootPath 静态资源所在的目录
 */
function readFile(req, res, rootPath) {
    // 1.获取静态资源地址
    // http://127.0.0.1:3000/login.html?name=lnj&pwd=123456;
    let fileName = req.url.split('?')[0];
    let filePath = path.join(rootPath, fileName);
    // 2.判断静态资源是否存在
    let isExists = fs.existsSync(filePath);
    if(!isExists){
        return
    }
    // 3.获取静态资源的后缀名
    let fileExt = path.extname(filePath);
    // 4.根据文件的后缀获取对应的类型
    let type = mime[fileExt];
    // 5.对文本类型进行特殊处理
    if(type.startsWith('text')){
        type += '; charset=utf-8;'
    }
    // 5.告诉客户端返回数据的类型
    res.writeHead(200, {
        'Content-Type': type
    });
    // 6.加载静态资源并返回静态资源
    fs.readFile(filePath, (err, content)=>{
        if(err){
            res.end('Server Error');
            return
        }
        res.end(content);
    });
}
module.exports = {
    readFile
}
```

