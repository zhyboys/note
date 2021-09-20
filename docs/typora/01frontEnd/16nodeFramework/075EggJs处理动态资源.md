# 075 EggJs处理动态资源

```js
/*
    1.EggJS如何处理动态资源?
    1.1什么是插件?
    EggJS中的插件就是特殊的中间件
    用来处理那些和请求无关独立的业务逻辑
    https://eggjs.org/zh-cn/basics/plugin.html

    1.2插件的使用
    npm i egg-view-ejs --save
    在config目录下新建plugin.js
    exports.ejs={ enable:true, package:'egg-view-ejs', };
    在config.default.js中新增如下配置
    view:{mapping:{'.html':'ejs'}}
    在app目录中新建view目录, 将动态网页放到这个目录中
    在控制器中通过上下文render方法渲染
    * */
```



```js
this.ctx.render('index', {msg:'知播渔'});
```

