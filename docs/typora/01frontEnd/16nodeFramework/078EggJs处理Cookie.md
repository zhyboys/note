# 078 EggJs处理Cookie

```js
// 2.处理路由
/*
EggJS如何处理Cookie?
和Koa一样
* */
router.get('/setCookie', controller.home.setCookie);
router.get('/getCookie', controller.home.getCookie);
```



```js
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async setCookie(){
        this.ctx.cookies.set('name', 'lnj', {
            path:'/',
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            /*
            在EggJS中, 为了安全着想, 阿里的安全专家建议我们在设置Cookie的时候, 给保存的数据生成一个签名
            将来获取数据的时候, 再利用获取到的数据生成一个签名, 和当初保存的时候的签名进行对比
            如果一致, 表示保存在客户端的数据没有被篡改, 如果不一致表示保存在客户端的数据已经被篡改
            * */
            signed: true, // 根据config/config.default.js中的keys来生成签名
            encrypt: true // 让EggJS帮我们加密Cookie值之后再保存
        });
        this.ctx.body = '设置成功';
    }
    async getCookie(){
        let cookie = this.ctx.cookies.get('name', {
            signed: true,
            encrypt: true
        });
        this.ctx.body = `获取Cookie成功 = ${cookie}`;
    }
}

module.exports = HomeController;
```

