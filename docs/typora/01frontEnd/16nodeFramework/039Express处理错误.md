# 039 Express处理错误



需安装`http-errors`插件

```js
// 1.导入express
const express = require('express');
const path = require('path');
const userRouter = require('./router/user');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

// 2.调用express方法, 创建服务端实例对象
const app = express();

// express错误处理
app.get('/api/user/login', (req, res, next)=>{
    res.end('login');
});
app.get('/api/user/register', (req, res, next)=>{
    res.end('register');
});
/*
由于在处理请求的时候会从上至下的匹配
由于前面的处理方法都没有调用next方法, 所以处理完了就不会再继续向下匹配了
由于use没有指定路由地址, 由于use既可以处理get请求, 又可以处理post请求
所以只要前面的路由都没有匹配到, 就会执行下面的use
* */
app.use((req, res, next)=>{
    next(createError(404));
});
app.use((err, req, res, next)=>{
    console.log(err.status, err.message);
    res.end(err.message);
});

// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

