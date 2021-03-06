# 18 promise中all实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>37-promise-all方法实现</title>
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
        static all(list){
            return new MyPromise(function (resolve, reject) {
                let arr = [];
                let count = 0;
                for(let i = 0; i < list.length; i++){
                    let p = list[i];
                    p.then(function (value) {
                        arr.push(value);
                        count++;
                        if(list.length === count){
                            resolve(arr);
                        }
                    }).catch(function (e) {
                        reject(e);
                    });
                }
            });
        }
    }
</script>
<script>
    /*
    1.Promise的all静态方法特点
    1.1all方法会返回一个新的Promise对象
    1.2会按照传入数组的顺序将所有Promise中成功返回的结果保存到一个新的数组返回
    1.3数组中有一个Promise失败就会失败, 只有所有成功才会成功
    */
    let p1 = new MyPromise(function (resolve, reject) {
        // resolve("111");
        reject("aaa");
    });
    let p2 = new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve("222");
        }, 5000);
    });
    let p3 = new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve("333");
        }, 3000);
    });

    let pp = MyPromise.all([p1, p2, p3]);
    console.log(pp);
    pp.then(function (result) {
        console.log("成功", result);
    }, function (err) {
        console.log("失败", err);
    });
</script>
</body>
</html>
```