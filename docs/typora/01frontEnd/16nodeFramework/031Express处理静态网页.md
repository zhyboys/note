# 031 Express处理静态网页

```js
// 1.导入express
const express = require('express');
const path = require('path');

// 2.调用express方法, 创建服务端实例对象
const app = express();

// 处理静态资源
app.use(express.static(path.join(__dirname, 'public')));

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

