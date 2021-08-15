# 08 promise概念

我的理解：

1. 关于promise的使用，首先需要一个用于专门加载的函数比如loadImage。并且这函数需要return promise。
2. 在then中return promise的作用可以记为**1. 状态附身**，意思就是return的promise将then这个本不能修改状态的函数变为一个与新创建的promise没有什么差别的样子。**2. 传递参数**，then中return的promise的return中的后的resolve和reject会将参数传递给下一个then。
3. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>26-promise基本概念</title>
</head>
<body>
<script>
    /*
    1.什么是promise?
    promise是ES6中新增的异步编程解决方案, 在代码中的表现是一个对象
    * */

    // 需求: 从网络上加载3个资源, 要求加载完资源1才能加载资源2, 加载完资源2才能加载资源3
    //       前面任何一个资源加载失败, 后续资源都不加载

    /*
    function request(fn) {
        setTimeout(function () {
            fn("拿到的数据");
        }, 1000);
    }
    request(function (data) {
        console.log(data, 1);
        request(function (data) {
            console.log(data, 2);
            request(function (data) {
                console.log(data, 3);
            });
        });
    });
    */
    /*
    2.promise作用
    企业开发中为了保存异步代码的执行顺序, 那么就会出现回调函数层层嵌套
    如果回调函数嵌套的层数太多, 就会导致代码的阅读性, 可维护性大大降低
    promise对象可以将异步操作以同步流程来表示, 避免了回调函数层层嵌套(回调地狱)
    * */
    function request() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("拿到的数据");
            }, 1000);
        });
    }
    request().then(function (data) {
        console.log(data, 1);
        return request();
    }).then(function (data) {
        console.log(data, 2);
        return request();
    }).then(function (data) {
        console.log(data, 3);
    });
</script>
</body>
</html>
```

