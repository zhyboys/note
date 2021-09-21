# 080 EggJs定时任务

官网-->指南-->基础功能-->定时任务

```js
/*
1.EggJS定时任务(计划任务)?
虽然我们通过框架开发的Web服务器是请求响应模型的，
但是仍然还会有许多场景需要执行一些定时任务，
例如：
定时进行文件切割、临时文件删除。
定时上报应用状态。(例如监控系统, 时时监控系统有没有问题, 典型例子MongoDB/Redis集群选举)
定时从远程接口更新本地缓存。
框架提供了一套机制来让定时任务的编写和维护更加优雅
 */
```

`/app`下新建`schedule`目录。下面的内容例如方法名之类的都是不可更改的，可更改的部分只有需要执行的业务内容。

```js
const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '3s', // 间隔3秒执行一次
            type: 'all', //  all表示当前服务器上所有相同的Node进程都执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
       let response = await this.ctx.curl('http://127.0.0.1:3000/getMsg');
       let data = new Buffer(response.data).toString();
        console.log(data);
    }
}

module.exports = UpdateCache;
```

