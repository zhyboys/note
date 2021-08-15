# 11 promise之catch



在企业开发中，如果需要分开监听，就链式编程.then（）.catch（）。



## 01 catch方法介绍

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>29-promise-catch方法</title>
</head>
<body>
<script>
    /*
    0.catch方法
    catch 其实是 then(undefined, () => {}) 的语法糖
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        // resolve(); // 将状态修改为成功
        reject(); // 将状态修改为失败
    });
    promise.catch(function () {
        console.log("abc");
    });
    */

    /*
    2.catch方法
    注意点: 如果需要分开监听, 也就是通过then监听成功通过catch监听失败
    那么必须使用链式编程, 否则会报错
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        // resolve(); // 将状态修改为成功
        reject(); // 将状态修改为失败
    });
    // promise.then(function () {
    //     console.log("成功");
    // }).catch(function () {
    //     console.log("失败");
    // });

    promise.then(function () {
        console.log("成功");
    });
    promise.catch(function () {
        console.log("失败");
    });

    // promise.then(function () {
    //     console.log("成功");
    // }, function () {
    //     console.log("失败");
    // });
    */

    /*
    3.catch方法
    不使用链式编程的原因是
    1.如果promise的状态是失败, 但是没有对应失败的监听就会报错
    2.then方法会返回一个新的promise, 新的promise会继承原有promise的状态
    3.如果新的promise状态是失败, 但是没有对应失败的监听也会报错
    * */
    let promise = new Promise(function (resolve, reject) {
        // resolve(); // 将状态修改为成功
        reject(); // 将状态修改为失败
    });
    let p2 = promise.then(function () {
        console.log("成功");
    });
    console.log(p2);
    promise.catch(function () {
        console.log("失败1");
    });
    p2.catch(function () {
        console.log("失败2");
    });

</script>
</body>
</html>
```

## 02 catch特点说明

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>30-Promise-catch方法</title>
</head>
<body>
<script>
    /*
    1.catch方法
    和then一样, 在修改promise状态时, 可以传递参数给catch方法中的回到函数
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        reject("111");
    });
    promise.catch(function (data) {
        console.log(data);
    });
    */

    /*
    2.catch方法
    和then一样, 同一个promise对象可以多次调用catch方法,
    当该promise对象的状态时所有catch方法都会被执行
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        reject();
    });
    promise.catch(function () {
        console.log("失败1");
    });
    promise.catch(function () {
        console.log("失败2");
    });
    promise.catch(function () {
        console.log("失败3");
    });
    */

    /*
    3.catch方法
    和then一样, catch方法每次执行完毕后会返回一个新的promise对象
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        reject();
    });
    let p2 = promise.catch(function () {
        console.log("失败1");
    });
    console.log(p2);
    console.log(promise === p2);
    */

    /*
    4.catch方法
    和then方法一样, 上一个promise对象也可以给下一个promise成功的传递参数
    注意点:
    无论是在上一个promise对象成功的回调还是失败的回调传递的参数,
    都会传递给下一个promise对象成功的回调
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        reject();
    });
    let p2 = promise.catch(function () {
        console.log("失败1");
        return "it666";
    });
    p2.then(function (data) {
        console.log("成功2", data);
    }, function (data) {
        console.log("失败2", data);
    });
    */

    /*
    5.catch方法
    和then一样, catch方法如果返回的是一个Promise对象, 那么会将返回的Promise对象的
    执行结果中的值传递给下一个catch方法
    * */
    /*
    let promise = new Promise(function (resolve, reject) {
        reject();
    });
    let ppp = new Promise(function (resolve, reject) {
        // resolve("1111");
        reject("abcd");
    });
    let p2 = promise.catch(function () {
        console.log("失败1");
        return ppp;
    });
    p2.then(function (data) {
        console.log("成功2", data);
    }, function (data) {
        console.log("失败2", data);
    });
    */

    /*
    6.catch方法
    和then方法第二个参数的区别在于, catch方法可以捕获上一个promise对象then方法中的异常
    * */
    let promise = new Promise(function (resolve, reject) {
        resolve();
    });
    // promise.then(function () {
    //     console.log("成功");
    //     xxx
    // }, function () {
    //     console.log("失败");
    // });
    promise.then(function () {
        console.log("成功");
        xxx
    }).catch(function (e) {
        console.log("失败", e);
    });
</script>
</body>
</html>
```

