# 054 Koa2处理Cookie

```js
/*
1.Koa如何处理cookie?
- Koa中处理cookie不需要引入其他模块, 只要拿到ctx对象就可以操作cookie

https://demopark.github.io/koa-docs-Zh-CN/
https://demopark.github.io/koa-docs-Zh-CN/api/context.html
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
router.get('/setCookie', (ctx, next)=>{
    // ctx.cookies.set('name', 'lnj', {
    //     path: '/',
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000
    // });
    // 注意点: 在koa中不能给cookie设置中文的值
    let value = new Buffer('李南江').toString('base64');
    ctx.cookies.set('userName', value, {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    // let value = new Buffer('李南江').toString('base64');
    // console.log(value); // 5p2O5Y2X5rGf
    // let res = new Buffer('5p2O5Y2X5rGf', 'base64').toString();
    // console.log(res);
});
router.get('/getCookie', (ctx, next)=>{
    // console.log(ctx.cookies.get('name'));
    let value = ctx.cookies.get('userName');
    let res = new Buffer(value, 'base64').toString();
    console.log(res);
});
app
    .use(router.routes()) // 启动路由功能
    .use(router.allowedMethods()); // 自动设置响应头

// 3.指定监听的端口
app.listen(3000);
```

