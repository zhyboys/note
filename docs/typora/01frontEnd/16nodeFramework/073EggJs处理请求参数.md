# 073 EggJs处理请求参数

## 1.EggJs获取请求参数基础

```js
/*
1.EggJS如何处理Get/Post请求参数?
"和Koa一样"
* */
router.get('/user', controller.home.getQuery);
router.get('/register/:name/:age', controller.home.getParams); // 动态路由
router.post('/login', controller.home.getBody);
```



获取参数

```js
async getQuery(){
    // 获取传统get请求参数
    // this.ctx.request.query
    let query = this.ctx.query; // 一种简写，省去request
    this.ctx.body = query;
}
async getParams(){
    // 获取动态路由形式的get请求参数
    let params = this.ctx.params;
    this.ctx.body = params;
}
async getBody(){
    // 获取post请求参数 
    let body = this.ctx.request.body; // 为了不和响应数据方法this.ctx.body重名，此处要加request
    this.ctx.body = body;
}
```



## 2.EggJs获取请求参数失败

使用postman发送post请求是不会成功的，因为之前讲过有CSRF安全防范，在指南--->安全中可找到。所以要配置忽略。**但是不建议这样操作，只是为了更方便的学习基础**

配置文件在`config->config.default.js`

```js
// exports.keys = 'COM.it666.*?'; // 用于生成客户端中保存的userId
module.exports = {
    keys: 'COM.it666.*?', // 用于生成客户端中保存的userId
    security: {
        csrf: {
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
    },
};
```

