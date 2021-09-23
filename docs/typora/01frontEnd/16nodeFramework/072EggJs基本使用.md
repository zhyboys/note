# 072 EggJs基本使用

## 1.EggJs基本使用提炼

```bash
2.手动安装手动配置
1.1创建Egg项目
npm init --y
npm i egg --save  #egg模块就是egg.js的核心模块
npm i egg-bin --save-dev    #egg-bin模块, 这个模块是用于快速启动项目, 用于本地开发调试的模块
"dev": "egg-bin dev"
```

最简单的基本目录结构下载

蓝奏云：https://wwa.lanzoui.com/iyXmwu9t7di

teacher部分的内容也是很值得看一看的。

1. 搭建一个必须的目录结构。

2. 路由中`router.js`暴露时需要传递app参数。
3. controller下的类需要暴露并且继承`egg.Controller`。
4. controller中的方法必须是异步的。



## 2.teacher

```js
/*
1.Egg.js使用
1.1手动安装手动配置
1.2利用egg脚手架工具安装使用(egg-init)

2.手动安装手动配置
1.1创建Egg项目
npm init --y
npm i egg --save  #egg模块就是egg.js的核心模块
npm i egg-bin --save-dev    #egg-bin模块, 这个模块是用于快速启动项目, 用于本地开发调试的模块
"dev": "egg-bin dev"

相关参考文档:
https://eggjs.org/zh-cn/intro/quickstart.html
https://eggjs.org/zh-cn/core/development.html

1.2编写Egg项目
egg-example
   ├ app
       ├── controller
       └── router.js
   ├ config
        ├──config.default.js
* */
```

`/app/router.js`

```js
// 在router.js中必须暴露出去一个方法, 这个方法接收一个参数, 这个参数就是服务端的实例对象
module.exports = app => {
    /*
    {
      env: 'local',
      name: 'egg-example',
      baseDir: 'C:\\Users\\Jonathan_Lee\\Desktop\\Node_Common\\egg-example',
      subdomainOffset: 2,
      config: '<egg config>',
      controller: '<egg controller>',
      httpclient: '<egg httpclient>',
      loggers: '<egg loggers>',
      middlewares: '<egg middlewares>',
      router: '<egg router>',
      serviceClasses: '<egg serviceClasses>'
    }
    * */
    // console.log(app);
    // 1.从服务端的实例对象中解构出处理路由的对象和处理控制器的对象
    const {router, controller} = app;
    // 2.利用处理路由的对象监听路由的请求
    //   由于EggJS是基于KOA的, 所以监听方式和KOA一样
    /*
    在EggJS中不用导入控制器, 只要拿到了从服务器实例中解构出来的控制器对象
    就相当于拿到了controller目录, 我们就可以通过点语法拿到这个目录中的文件
    只要拿到了controller目录中的文件, 我们就可以通过点语法拿到这个文件中的方法
    * */
    router.get('/', controller.home.index);
}
```

`/app/controller/home.js`

```js
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
        /*
        egg官网：基础-->控制器
        在EggJS中, EggJS会自动给控制器的this挂载一些属性
        this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
        this.service：应用定义的 Service，通过它我们可以访问到抽象出的业务层，等价于 this.ctx.service 。
        this.config：应用运行时的配置项。
        this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。
        * */
        this.ctx.body = 'www.it666.com';
    }
}

module.exports = HomeController;
```







## 3.目录结构

```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```