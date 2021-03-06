# 13 手撕Promise上

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>32-手撕Promise上</title>
</head>
<body>
<script>
    // 定义常量保存对象的状态
    const PENDING = "pending";
    const FULFILLED = "fulfilled";
    const REJECTED = "rejected";

    class MyPromise{
        constructor(handle){
            // 0.初始化默认的状态
            this.status = PENDING;
            // 定义变量保存传入的参数
            this.value = undefined;
            this.reason = undefined;
            // 定义变量保存监听的函数
            // this.onResolvedCallback = null;
            // this.onRejectedCallback = null;
            this.onResolvedCallbacks = [];
            this.onRejectedCallbacks = [];
            // 1.判断是否传入了一个函数, 如果没有传入就抛出一个异常
            if(!this._isFunction(handle)){
                throw new Error("请传入一个函数");
            }
            // 2.给传入的函数传递形参(传递两个函数)
            // handle();
            handle(this._resolve.bind(this), this._reject.bind(this));

        }
        then(onResolved, onRejected){
            // 1.判断有没有传入成功的回调
            if(this._isFunction(onResolved)){
                // 2.判断当前的状态是否是成功状态
                if(this.status === FULFILLED){
                    onResolved(this.value);
                }
            }
            // 1.判断有没有传入失败的回调
            if(this._isFunction(onRejected)){
                // 2.判断当前的状态是否是失败状态
                if(this.status === REJECTED){
                    onRejected(this.reason);
                }
            }
            // 2.判断当前的状态是否是默认状态
            if(this.status === PENDING){
                if(this._isFunction(onResolved)){
                    // this.onResolvedCallback = onResolved;
                    this.onResolvedCallbacks.push(onResolved);
                }
                if(this._isFunction(onRejected)){
                    // this.onRejectedCallback = onRejected;
                    this.onRejectedCallbacks.push(onRejected);
                }
            }
        }
        _resolve(value){
            // console.log("_resolve");
            // 这里是为了防止重复修改
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value = value;
                // this.onResolvedCallback(this.value);
                this.onResolvedCallbacks.forEach(fn => fn(this.value));
            }
        }
        _reject(reason){
            // console.log("_reject");
            if(this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                // this.onRejectedCallback(this.reason);
                this.onRejectedCallbacks.forEach(fn => fn(this.reason));
            }
        }
        _isFunction(fn){
            return typeof fn === "function";
        }
    }
</script>
<script>
    /*
    1.Promise特点
    1.1创建时必须传入一个函数, 否则会报错
    1.2会给传入的函数设置两个回调函数
    1.3刚创建的Promise对象状态是pending
    1.4状态一旦发生改变就不可再次改变
    1.5可以通过then来监听状态的改变
    1.5.1如果添加监听时状态已经改变, 立即执行监听的回调
    1.5.2如果添加监听时状态还未改变, 那么状态改变时候再执行监听回到
    1.5.3同一个Promise对象可以添加多个then监听, 状态改变时所有的监听按照添加顺序执行
    */
    /*
    let promise = new Promise(function (resolve, reject) {
        resolve();
        // reject();
        // setTimeout(function () {
        //     resolve();
        // }, 2000);
    });
    promise.then(function () {
        console.log("成功1");
    }, function () {
        console.log("失败1");
    });
    promise.then(function () {
        console.log("成功2");
    }, function () {
        console.log("失败2");
    });
    promise.then(function () {
        console.log("成功3");
    }, function () {
        console.log("失败3");
    });
    */

    /* */
    let promise = new MyPromise(function (resolve, reject) {
        // console.log(resolve);
        // console.log(reject);
        // resolve("111");
        // reject("aaa");
        setTimeout(function () {
            // resolve("111");
            reject("aaa");
        }, 2000);
    });
    promise.then(function (data) {
        console.log("成功1", data);
    }, function (data) {
        console.log("失败1", data);
    });
    promise.then(function (data) {
        console.log("成功2", data);
    }, function (data) {
        console.log("失败2", data);
    });
    promise.then(function (data) {
        console.log("成功3", data);
    }, function (data) {
        console.log("失败3", data);
    });
    console.log(promise);

</script>
</body>
</html>
```