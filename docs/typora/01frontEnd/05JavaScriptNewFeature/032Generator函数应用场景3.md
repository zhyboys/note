# 32 Generator函数应用场景3

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>51-Generator函数应用场景</title>
</head>
<body>
<script>
    /*
    应用场景: 用同步的流程来表示异步的操作
    */
    /*
    function request(fn) {
        setTimeout(function () {
            fn("拿到的数据");
        }, 1000);
    }
    request(function (data) {
        console.log("1", data);
        request(function (data) {
            console.log("2", data);
            request(function (data) {
                console.log("3", data);
            });
        });
    });
    */
    function request() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("拿到的数据");
            }, 1000);
        });
    }
    /*
    request().then(function (data) {
        console.log(data, 1);
        return request();
    }).then(function (data) {
        console.log(data, 2);
        return request();
    }).then(function (data) {
        console.log(data, 3);
    });
    */
    function* gen() {
        yield request();
        yield request();
        yield request();
    }
    let it = gen();
    // console.log(it.next().value);
    it.next().value.then(function (data) {
        console.log(data, 1);
        return it.next().value;
    }).then(function (data) {
        console.log(data, 2);
        return it.next().value;
    }).then(function (data) {
        console.log(data, 3);
    });
</script>
</body>
</html>
```

