# 16 promise练习

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>35-promise练习</title>
</head>
<body>
<script>
    /*
    需求:
    一次加载一张图片添加到body中. 前面图片加载失败后面图片不加载
    */
    let arr = [
        "http://www.it666.com/files/system/block_picture_1555415767.png",
        "http://www.it666.com/files/system/block_picture_1555422597.jpg",
        "http://wwww.it666.com/files/system/block_picture_1555419713.jpg"
    ];
    function loadImage(url) {
        return new Promise(function (resolve, reject) {
           let oImg = new Image();
           oImg.src = url;
           oImg.onload = function () {
               resolve(oImg);
           }
           oImg.onerror = function () {
               reject("图片加载失败");
           }
        });
    }
    /*
    let p2 = loadImage(arr[0]).then(function (oImg) {
        // console.log(oImg);
        console.log("1");
        document.body.appendChild(oImg);
        return loadImage(arr[1]);
    }, function (msg) {
        console.log(msg);
    });
    let p3 = p2.then(function (oImg) {
        console.log("2");
        // console.log(oImg);
        document.body.appendChild(oImg);
        return loadImage(arr[2]);
    }, function (msg) {
        console.log(msg);
    });
    p3.then(function (oImg) {
        console.log("3");
        // console.log(oImg);
        document.body.appendChild(oImg);
    }, function (msg) {
        console.log(msg);
    });
    */

    loadImage(arr[0]).then(function (oImg) {
        // console.log(oImg);
        console.log("1");
        document.body.appendChild(oImg);
        return loadImage(arr[1]);
    }).then(function (oImg) {
        console.log("2");
        // console.log(oImg);
        document.body.appendChild(oImg);
        return loadImage(arr[2]);
    }).then(function (oImg) {
        console.log("3");
        // console.log(oImg);
        document.body.appendChild(oImg);
    }).catch(function (msg) {
        console.log(msg);
    });
</script>
</body>
</html>
```

