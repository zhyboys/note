# 15 手撕Promise下

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>34-手撕Promise下</title>
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
            handle(this._resolve.bind(this), this._reject.bind(this));

        }
        then(onResolved, onRejected){
            return new MyPromise((nextResolve, nextReject) => {
                // 1.判断有没有传入成功的回调
                if(this._isFunction(onResolved)){
                    // 2.判断当前的状态是否是成功状态
                    if(this.status === FULFILLED){
                        try {
                            // 拿到上一个promise成功回调执行的结果
                            let result = onResolved(this.value);
                            // console.log("result", result);
                            // 判断执行的结果是否是一个promise对象
                            if(result instanceof MyPromise){
                                result.then(nextResolve, nextReject);
                            }else{
                                // 将上一个promise成功回调执行的结果传递给下一个promise成功的回调
                                nextResolve(result);
                            }
                        }catch (e) {
                            nextReject(e);
                        }
                    }
                }
                // 1.判断有没有传入失败的回调
                // if(this._isFunction(onRejected)){
                    try {
                        // 2.判断当前的状态是否是失败状态
                        if(this.status === REJECTED){
                            let result = onRejected(this.reason);
                            if(result instanceof MyPromise){
                                result.then(nextResolve, nextReject);
                            }else if(result !== undefined){
                                nextResolve(result);
                            }else{
                                nextReject();
                            }
                        }
                    }catch (e) {
                        nextReject(e);
                    }
                // }
                // 2.判断当前的状态是否是默认状态
                if(this.status === PENDING){
                    if(this._isFunction(onResolved)){
                        // this.onResolvedCallback = onResolved;
                        this.onResolvedCallbacks.push(() => {
                            try {
                                let result = onResolved(this.value);
                                if(result instanceof MyPromise){
                                    result.then(nextResolve, nextReject);
                                }else{
                                    nextResolve(result);
                                }
                            }catch (e) {
                                nextReject(e);
                            }
                        });
                    }
                    // if(this._isFunction(onRejected)){
                        // this.onRejectedCallback = onRejected;
                        this.onRejectedCallbacks.push(() => {
                            try {
                                let result = onRejected(this.reason);
                                if(result instanceof MyPromise){
                                    result.then(nextResolve, nextReject);
                                }else if(result !== undefined){
                                    nextResolve(result);
                                }else{
                                    nextReject();
                                }
                            }catch (e) {
                                nextReject(e);
                            }
                        });
                    // }
                }
            });
        }
        catch(onRejected){
            return this.then(undefined, onRejected);
        }
        _resolve(value){
            // 这里是为了防止重复修改
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value = value;
                // this.onResolvedCallback(this.value);
                this.onResolvedCallbacks.forEach(fn => fn(this.value));
            }
        }
        _reject(reason){
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
    1.1then方法返回的Promise对象的状态和前一个Promise的状态默认相同
    1.2后一个Promise对象的then可以捕获前一个Promise then的异常
    1.3catch方法就是then方法的语法糖 then(undefined, function(){});
    */
    /*
    let promise = new Promise(function (resolve, reject) {
        resolve();
        // reject();
        // setTimeout(function () {
        //     // resolve();
        //     reject();
        // }, 5000);
    });
    let p2 = promise.then(function () {
        console.log("成功1");
        xxx
    }, function () {
        console.log("失败1");
    });
    p2.then(function () {
        console.log("成功2");
    }, function (e) {
        console.log("失败2", e);
    });
    */

    let promise = new MyPromise(function (resolve, reject) {
        // resolve();
        // reject();
        setTimeout(function () {
            // resolve();
            reject();
        }, 5000);
    });
    /*
    let p2 = promise.then(function () {
        console.log("成功");
        console.log(promise, p2, "2");
    }, function () {
        console.log("失败");
        console.log(promise, p2, "3");
    });
     console.log(promise, p2, "1");
    */
    /*
    let p2 = promise.then(function () {
        console.log("成功1");
        xxx
    }, function () {
        console.log("失败1");
    });
    p2.then(function () {
        console.log("成功2");
    }, function (e) {
        console.log("失败2", e);
    });
    */
    let p2 = promise.then(function () {
        console.log("成功");
    });
    p2.catch(function () {
        console.log("失败");
    });
    // console.log(promise, p2);

    /*
    promise.then(function () {
        console.log("成功");
    }).catch(function () {
        console.log("失败");
    });
    */
</script>
</body>
</html>
```

