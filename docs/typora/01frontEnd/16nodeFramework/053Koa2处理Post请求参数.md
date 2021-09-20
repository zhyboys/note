# 053 Koa2处理Post请求参数

```js
/*
1.Koa如何处理Post请求参数?
- 借助koa-bodyparser中间件
- koa-bodyparser中间件会将post请求参数转换成对象之后放到请求对象的body中
* */
// 1.导入Koa
const Koa = require('koa');
const serve = require('koa-static'); // 导入处理静态资源的模块
const views = require('koa-views'); // 导入处理动态资源的模块
const Router = require('koa-router'); // 导入处理路由的模块
const router = new Router(); // 创建路由对象
const bodyParser = require('koa-bodyparser'); // 导入处理post请求参数的模块

// 2.创建服务端实例对象
const app = new Koa();

app.use(serve('public')); // 注册处理静态资源的中间件
app.use(views('views', {extension: 'ejs'})); // 注册处理动态资源的中间件

app.use(bodyParser()); // 注册处理post请求参数的中间件
// 处理路由
router.post('/user', (ctx, next)=>{
    let request = ctx.request;
    console.log(request.body);
});

app
    .use(router.routes()) // 启动路由功能
    .use(router.allowedMethods()); // 自动设置响应头

// 3.指定监听的端口
app.listen(3000);
```

