# 030 Express基本使用

通过手动安装的方式使用Express

```bash
npm install express
```



```js
/*
1.如何使用Express?
1.1手动安装手动配置
1.2利用Express脚手架工具安装使用(Express-generator)

2.手动安装手动配置
https://www.npmjs.com/package/express
* */
// 1.导入express
const express = require('express');
// 2.调用express方法, 创建服务端实例对象
const app = express()

app.get('/', (req, res, next)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8;'
    });
    res.end('www.it666.com');
});

// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

