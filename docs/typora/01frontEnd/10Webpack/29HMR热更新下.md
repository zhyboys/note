# 29 HMR热更新下

上篇所述只能热更新HTML和CSS，不能热更新JavaScript。怎办？

手撸热更新JavaScript，下述代码写到`index.js`文件。

```js
// 判断当前有没有开启热更新
if(module.hot){
    // 告诉热更新需要监听哪一个JS模块的变化./test.js，回调函数是如果test文件变了执行什么
    module.hot.accept("./test.js", function () {
        let oSpan = document.querySelector("span");
        document.body.removeChild(oSpan);
        addSpan();
    });
}

```

