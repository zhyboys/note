# 23 fetch简单封装

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>42-fetch简单封装</title>
</head>
<body>
<script>
    class EasyHttp{
        static obj2str(data) {
            data = data || {};
            data.t = new Date().getTime();
            var res = [];
            for(var key in data){
                res.push(encodeURIComponent(key)+"="+encodeURIComponent(data[key]));
            }
            return res.join("&");
        }
        static get(url, params){
            return new Promise(function (resolve, reject) {
                let newUrl = url;
                if(params !== undefined && params instanceof Object){
                    let str = EasyHttp.obj2str(params);
                    newUrl += "?" + str;
                }
                fetch(newUrl, {
                    method: "get"
                }).then(function (res) {
                    resolve(res.json());
                }).catch(function (e) {
                    reject(e);
                })
            })
        }
        static post(url, params){
            return new Promise(function (resolve, reject) {
                fetch(url, {
                    method: "post",
                    body: JSON.stringify(params)
                }).then(function (res) {
                    resolve(res.json());
                }).catch(function (e) {
                    reject(e);
                })
            })
        }
    }
    let obj = {
        teacher: "lnj",
        age: 34
    }
    EasyHttp.post("http://127.0.0.1/jQuery/Ajax/41.php", obj)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (e) {
        console.log(e);
    });
</script>
</body>
</html>
```

