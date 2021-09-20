# 038 Express的正确使用

039 Express的next方法的正确使用方法040

```js
// 1.导入express
const express = require('express');
const path = require('path');
const userRouter = require('./router/user');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

// 2.调用express方法, 创建服务端实例对象
const app = express();
/*
默认情况下会从上至下的匹配路由处理方法, 一旦匹配到了就会执行,
执行完毕之后如果没有调用next就停止,
执行完毕之后如果调用了next就继续向下匹配
* */
// next方法正确打开姿势
/*
通过next方法, 我们可以将同一个请求的多个业务逻辑拆分到不同的方法中处理
这样可以提升代码的可读性和可维护性, 以及保证代码的单一性
* */
app.get('/api/user/info',
    (req, res, next)=>{
        console.log('验证用户是否登陆');
        next();
    },
    (req, res, next)=>{
        console.log('用户已经登陆, 可以查看用户信息');
    });

// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

