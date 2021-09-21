# 084 EggJs中间件

```js
/*
1.EggJS中间件
EggJS是基于KOA的, 所以EggJS的中间件形式和 Koa 的中间件形式是一样的
只不过EggJS规定我们需要将中间件写到特殊的目录中
只不过EggJS中为中间件提供了多种使用方式
https://eggjs.org/zh-cn/basics/middleware.html
* */
```

新建`/app/middleware`



----

在`middleware`新增自定义文件`clientCheck.js`

```js
/**
 * 自定义中间件
 * @param options 是一个对象
 * @param app     服务器实例对象
 */
// { ua: /Chrome/ }
module.exports = (options, app) =>{
    return async (ctx, next) =>{
        // 1.获取客户端的请求信息
       let userAgent =  ctx.get('user-agent');
       // 2.判断客户端是否是谷歌浏览器
       let flag = options.ua.test(userAgent);
       if(flag){
           ctx.status = 401;
           ctx.body = '不支持当前的浏览器';
       }else{
           next();
       }
    }
}
```

在`config.default.js`中配置

```js
// exports.keys = 'COM.it666.*?'; // 用于生成客户端中保存的userId
module.exports = {
    keys: 'COM.it666.*?',
    security: {
        csrf: {
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
    },
    view:{
        mapping:{
            '.html':'ejs'
        }
    },
    logger : {
        level: 'DEBUG',
    },
    // 配置需要的中间件，数组顺序即为中间件的加载顺序
    // 注意点: 这里的中间件名称就是文件名称
    // middleware: [ 'clientCheck' ],
    // 这里的key也是中间件文件的名称
    // 这里的值将来就会传递给中间件的options
    // clientCheck: {
    //     ua: /Chrome/
    // },
};
```

使用

```js
let clientCheck = app.middleware.clientCheck({ua:/Chrome/});
```

