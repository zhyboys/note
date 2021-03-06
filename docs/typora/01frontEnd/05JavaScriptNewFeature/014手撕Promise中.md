# 14 手撕Promise中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>33-手撕Promise中</title>
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
            return new MyPromise((nextResolve, nextReject) => {
                // 1.判断有没有传入成功的回调
                if(this._isFunction(onResolved)){
                    // 2.判断当前的状态是否是成功状态
                    if(this.status === FULFILLED){
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
                    }
                }
                // 1.判断有没有传入失败的回调
                if(this._isFunction(onRejected)){
                    // 2.判断当前的状态是否是失败状态
                    if(this.status === REJECTED){
                        let result = onRejected(this.reason);
                        if(result instanceof MyPromise){
                            result.then(nextResolve, nextReject);
                        }else {
                            nextResolve(result);
                        }
                    }
                }
                // 2.判断当前的状态是否是默认状态
                if(this.status === PENDING){
                    if(this._isFunction(onResolved)){
                        // this.onResolvedCallback = onResolved;
                        this.onResolvedCallbacks.push(() => {
                            let result = onResolved(this.value);
                            if(result instanceof MyPromise){
                                result.then(nextResolve, nextReject);
                            }else {
                                nextResolve(result);
                            }
                        });
                    }
                    if(this._isFunction(onRejected)){
                        // this.onRejectedCallback = onRejected;
                        this.onRejectedCallbacks.push(() => {
                            let result = onRejected(this.reason);
                            if(result instanceof MyPromise){
                                result.then(nextResolve, nextReject);
                            }else {
                                nextResolve(result);
                            }
                        });
                    }
                }
            });
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
    1.1then方法每次执行完毕都会返回一个新的Promise对象
    1.2上一个Promise对象的then可以给下一个Promise的then传递数据
    1.2.1无论上一个是在成功的回调还是失败的回调传递的参数都会传递给下一个成功的回调
    1.2.2如果上一个传递的是Promise对象, 那么传给下一个的成功还是失败由传递的Promise状态决定
    */
    /*
    let promise = new Promise(function (resolve, reject) {
        resolve("111");
        // reject("aaa");
        // setTimeout(function () {
        //     resolve("111");
        //     reject("aaa");
        // }, 2000);
    });
    let p2 = promise.then(function (data) {
        console.log("成功1", data);
        xxx
    }, function (data) {
        console.log("失败1", data);
    });
    p2.then(function (data) {
        console.log("成功2", data);
    }, function (data) {
        console.log("失败2", data);
    });
    // console.log(p2);
    // console.log(promise === p2);
    */

    /**/
    let promise = new MyPromise(function (resolve, reject) {
        // resolve("111");
        // reject("aaa");
        setTimeout(function () {
            // resolve("111");
            reject("aaa");
        }, 2000);
    });
    let ppp = new MyPromise(function (resolve, reject) {
        // resolve("222");
        reject("bbb");
    });
    let p2 = promise.then(function (data) {
        console.log("成功1", data);
        // return "222";
        return ppp;
    }, function (data) {
        console.log("失败1", data);
        // return "bbb";
        return ppp;
    });
    p2.then(function (data) {
        console.log("成功2", data);
    }, function (data) {
        console.log("失败2", data);
    });
    // console.log(p2);
    // console.log(promise === p2);

</script>
</body>
</html>
```

