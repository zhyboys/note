# 040 Express中间件

```js
// 1.导入express
const express = require('express');
const path = require('path');
const userRouter = require('./router/user');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

// 2.调用express方法, 创建服务端实例对象
const app = express();

app.get('/api/user/info',
    (req, res, next)=>{
        console.log('验证用户是否登陆');
        next();
    },
    (req, res, next)=>{
        console.log('用户已经登陆, 可以查看用户信息');
        res.json({name:'lnj', age:66});
    });

app.get('/api/user/info',(req, res, next)=>{
        console.log('验证用户是否登陆');
        next();
    });
app.get('/api/user/info',(req, res, next)=>{
        console.log('用户已经登陆, 可以查看用户信息');
        res.json({name:'lnj', age:66});
    });
/*
1.什么是中间件?
- 中间件的本质就是一个函数, 这个函数接收3个参数request请求对象、response响应对象、next函数
- 当请求进来，会从第一个中间件开始进行匹配。如果匹配则进入，如果不匹配，则向后依次对比匹配

2.中间件的作用?
- 将一个请求的处理过程，分发到多个环节中，目的效率高，便于维护。即每个环节专门干一件事

3.中间件的分类
3.1应用级别中间件
绑定到app实例上的中间件
例如: app.get / app.post

3.2路由级别中间件
绑定到router实例上的中间件
例如: router.get / router.post

3.3错误处理中间件
与其他中间件函数的定义基本相同，
不同之处在于错误处理函数多了一个变量：err，即它有4个变量：err, req, res, next

3.4内置中间件
express.static()、express.json()、express.urlencoded()、...

3.5第三方中间件
cookie-parser、...
 */
// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

