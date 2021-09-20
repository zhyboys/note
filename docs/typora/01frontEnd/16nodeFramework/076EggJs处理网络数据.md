# 076 EggJs处理网络数据

```js
    /*
    EggJS处理数据
    在EggJS中无论是处理数据库中的数据还是处理网络数据, 都是在Service中处理的
    * */
```

`/app->service/->xxx.js`

```js
const Service = require('egg').Service;

class HomeService extends Service{
    async findNews(){
        // 在Service定义的方法中处理数据库和网络的数据即可
        /*
        和控制器一样, Service类的this上也挂载了很多属性
        this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
        this.service：应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。
        this.config：应用运行时的配置项。
        this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置
        * */
        /*
        -----------------------------------------
        Service的上下文属性上还挂载了一些其它的属性
        this.ctx.curl 发起网络调用。
        this.ctx.service.otherService 调用其他 Service。service是service目录。
        this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块。
        * */
        // 发送get不带参数的请求
        // let response = await this.ctx.curl('http://127.0.0.1:3000/getUser');
        // 发送get带参数的请求
        // let response = await this.ctx.curl('http://127.0.0.1:3000/getUser2?name=it666&age=66');
        // 发送post不带参数的请求
        // let response = await this.ctx.curl('http://127.0.0.1:3000/getNews', {
        //     method: 'post'
        // });
        // 发送post带参数的请求
        let response = await this.ctx.curl('http://127.0.0.1:3000/getNews2', {
            method: 'post',
            data:{
                name:'lnj',
                age:33
            }
        });
        let data = JSON.parse(response.data);
        console.log("HomeService", data);
        return data;
    }
}

module.exports = HomeService;
```

中途，获取的数据成了buffer形式，本应该显示在浏览器的数据变为了下载。所以使用`let data = JSON.parse(response.data);`将buffer转为了字符串。