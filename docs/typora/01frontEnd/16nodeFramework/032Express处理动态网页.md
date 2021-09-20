# 032 Express处理动态网页

想要返回动态网页，还需要安装ejs模块，并把动态网页html文件的后缀名`.html`改成`.ejs` .



```js
// 1.导入express
const express = require('express');
const path = require('path');

// 2.调用express方法, 创建服务端实例对象
const app = express();

// 处理静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 处理动态资源
// 1.告诉express动态资源存储在什么地方
app.set('views', path.join(__dirname, 'views'));
// 2.告诉express动态网页使用的是什么模板引擎
app.set('view engine', 'ejs');
// 3.监听请求, 返回渲染之后的动态网页
app.get('/', (req, res, next)=>{
    // 注意点: express给请求对象和影响对象添加了很多自定义的方法
    res.render('index', {msg:'www.it666.com'});
});

// 3.告诉服务端需要监听哪一个端口
app.listen(3000, ()=>{
    console.log('listen ok');
});
```

