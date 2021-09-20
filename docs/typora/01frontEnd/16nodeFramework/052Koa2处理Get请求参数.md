# 052 Koa2处理Get请求参数

```js
/*
1.Koa如何处理Get请求参数?
- 处理传统get参数
- 处理动态路由形式get参数
* */
// 1.导入Koa
const Koa = require('koa');
const serve = require('koa-static'); // 导入处理静态资源的模块
const views = require('koa-views'); // 导入处理动态资源的模块
const Router = require('koa-router'); // 导入处理路由的模块
const router = new Router(); // 创建路由对象

// 2.创建服务端实例对象
const app = new Koa();

router.get('/user', (ctx, next)=>{
    let request = ctx.request;
    console.log(request.query); // 获取转换成对象之后的get请求参数
    console.log(request.querystring); // 获取字符串形式的get请求参数
});
router.get('/login/:name/:age', (ctx, next)=>{
    console.log(ctx.params);
});
app.use(serve('public')); // 注册处理静态资源的中间件
app.use(views('views', {extension: 'ejs'})); // 注册处理动态资源的中间件

// 处理路由

app
    .use(router.routes()) // 启动路由功能
    .use(router.allowedMethods()); // 自动设置响应头

// 3.指定监听的端口
app.listen(3000);
```

