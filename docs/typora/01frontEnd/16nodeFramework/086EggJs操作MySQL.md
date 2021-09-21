# 086 EggJs操作MySQL

指南->教程->MySQL   自己看文档。

```js
/*
1.EggJS如何操作MySQL
https://eggjs.org/zh-cn/tutorials/mysql.html
* */
```



安装后开启插件`app/config/plugin.js`：

```js
// exports.ejs={
//     enable:true,
//     package:'egg-view-ejs'
// };
module.exports = {
    ejs :{
        enable:true,
        package:'egg-view-ejs'
    },
    mysql : {
        enable: true,
        package: 'egg-mysql',
    }
}
```

在`app/config/config.default.js`中配置

```js
// 单数据库信息配置
mysql : {
    // 单数据库信息配置
    client: {
        // host
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'demo',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
}
```

