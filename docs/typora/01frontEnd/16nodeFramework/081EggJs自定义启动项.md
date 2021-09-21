# 081 EggJs自定义启动项

指南-->启动自定义

**需求1：把定是任务获取的数据渲染到动态网页。**

`/app/schedule/updateMessage.js`

```js
const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '10s', // 间隔3秒执行一次
            type: 'all', //  all表示当前服务器上所有相同的Node进程都执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
       let response = await this.ctx.curl('http://127.0.0.1:3000/getMsg');
       let data = new Buffer(response.data).toString();
        // -------------------------------------
        // 获取的数据绑定到app实例对象上
       this.ctx.app.msg = data;
        console.log(data);
    }
}

module.exports = UpdateCache;
```

`/app/controller/home.js`

```js
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async test(){
        // await this.ctx.render('index', {msg:'www.it666.com'});
        await this.ctx.render('index', {msg:this.ctx.app.msg});
    }
}
module.exports = HomeController;
```

此时会有一个问题，第一次浏览动态网页时，定是任务还没执行，就会导致数据为空。所以新的需求就产生了，就是在第一次启动项目时就需要执行一次定时任务。

**需求2：就是在第一次启动项目时就需要执行一次定时任务。**

根目录下新建`/app.js`

```js
// app.js
class AppBootHook {
    constructor(app) {
        this.app = app;
    }
    // 这个方法会在EggJS程序启动完毕之后执行
    async serverDidReady() {
        // 注意点: 这里传递的不是方法名称, 而是需要被执行的那个定时任务文件的名称
       await this.app.runSchedule('updateMessage')
    }
}

module.exports = AppBootHook;
```

上面的方法是生命周期方法。更多的生命周期方法请浏览：指南-->启动自定义。