# 035 Express处理请求参数

提取

```js
app.get('/get', (req, res, next)=>{
    // express会将get的请求参数转换成对象之后, 放到请求对象的query属性中
    console.log(req.query);
});

app.use(express.json()); // 告诉express能够解析 application/json类型的请求参数
app.use(express.urlencoded({extended: false})); // 告诉express能够解析 表单类型的请求参数 application/x-www-form-urlencoded
//extended: false 是指用queryString来解析，建议使用false
// express会将解析之后, 转换成对象的post请求参数放到请求对象的body属性中
app.post('/post', (req, res, next)=>{
    console.log(req.body);
});
```



源代码

```js
// 1.导入express
const express = require('express');
const path = require('path');
const userRouter = require('./router/user');

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

app.get('/get', (req, res, next)=>{
    // express会将get的请求参数转换成对象之后, 放到请求对象的query属性中
    console.log(req.query);
});
app.use(express.json()); // 告诉express能够解析 application/json类型的请求参数
app.use(express.urlencoded({extended: false})); // 告诉express能够解析 表单类型的请求参数 application/x-www-form-urlencoded
//extended: false 是指用queryString来解析，建议使用false
// express会将解析之后, 转换成对象的post请求参数放到请求对象的body属性中
app.post('/post', (req, res, next)=>{
    console.log(req.body);
});
// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

