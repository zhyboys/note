# 033 Express处理路由上



新学：使用监听get 和 post 请求来返回数据， 并使用封装好方法的返回 json 格式数据。

```js
// 注意点: 响应对象的json方法是express给响应对象扩展的
//         这个方法会自动将对象转换成字符串之后返回
//         这个方法还会自动帮助我们设置响应头
res.json({
    name:'lnj',
    age:33,
    method: 'get'
});
```

源码

```js
// 1.导入express
const express = require('express');
const path = require('path');

// 2.调用express方法, 创建服务端实例对象
const app = express();

// 处理静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 处理动态资源
// 1.告诉express动态资源存储在什么地方
app.set('views', path.join(__dirname, 'views'));
// 2.告诉express动态网页使用的是什么模板引擎
app.set('view engine', 'ejs');
// 3.监听请求, 返回渲染之后的动态网页
app.get('/', (req, res, next)=>{
    // 注意点: express给请求对象和影响对象添加了很多自定义的方法
    res.render('index', {msg:'www.it666.com'});
});

// 通过express处理路由方式一
app.get('/api/goods/list', (req, res, next)=>{
    res.end('it666.list.get');
});
app.get('/api/user/login', (req, res, next)=>{
    // 注意点: 响应对象的json方法是express给响应对象扩展的
    //         这个方法会自动将对象转换成字符串之后返回
    //         这个方法还会自动帮助我们设置响应头
    res.json({
        name:'lnj',
        age:33,
        method: 'get'
    });
});
app.post('/api/goods/detail', (req, res, next)=>{
    res.end('it666.detail.post');
});
app.post('/api/user/register', (req, res, next)=>{
    res.json({
        name:'lnj',
        age:33,
        method: 'post'
    });
});

// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

