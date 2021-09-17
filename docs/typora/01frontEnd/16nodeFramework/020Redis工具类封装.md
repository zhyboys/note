# 020 Redis工具类封装

redis下载安装

```
https://github.com/MicrosoftArchive/redis/releases
```



安装插件

```bash
cnpm install redis --save
```

新增关于redis的连接配置

```js
let MYSQL_CONFIG
let REDIS_CONFIG

if (process.env.NODE_ENV === 'dev'){
    MYSQL_CONFIG = {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'root',
        database : 'demo',
        port     : '3306'
    }
    REDIS_CONFIG = {
        host     : '127.0.0.1',
        port     : '6379'
    }
}else if (process.env.NODE_ENV === 'dev'){
    MYSQL_CONFIG = {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'root',
        database : 'demo',
        port     : '3306'
    }
    REDIS_CONFIG = {
        host     : '127.0.0.1',
        port     : '6379'
    }
}
```

封装工具类

```js
// 1.导入Redis模块
const redis = require("redis");
const client = redis.createClient();

// 2.建立Redis连接
client.on("error", function(error) {
    console.error(error);
});

// 3.封装保存和获取数据的方法
function redisSet(key, value){
    if (typeof value === 'object'){
        value = JSON.stringify(value)
    }
    client.set(key, value, redis.print);
}

function redisGet(key) {
    return new Promise(((resolve, reject) => {
        // client.get(key, redis.print);
        client.get(key, (err, value) => {
            if (err){
                reject(err)
                return
            }
            try {
                resolve(JSON.parse(value))
            }catch (e) {
                resolve(value)
            }
        });

    }))
}

module.exports = {
    redisSet, redisGet
}
```