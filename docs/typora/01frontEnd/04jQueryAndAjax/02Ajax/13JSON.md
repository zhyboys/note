# 13 JSON

## 01 JSON

1. 文件名`12-ajax-json.txt`。

```json
{
    "name":"lnj",
    "age":"33"
}
```

```javascript
var obj = {a:"hello", b:"world"};//这是一个js对象，键名可以用引号引起来，也是对象。
var json = '{"a":"hello", "b":"world"}';//这是一个JSON，本质就是字符串。
//对象转json使用JSON.stringify();方法
var json = JSON.stringify({a:"hello", b:"world"});
//json转对象用JSON.parse()方法
var obj = JSON.parse('{"a":"hello", "b":"world"}');
```

1. php发送json文件不用像xml一样得写header。
2. 文件名`12-ajax-json.php`。

```php
<?php

echo file_get_contents("12-ajax-json.txt");
```

1. 注意看接收数据用什么方法。

```JavaScript
window.onload = function (ev) {

    var oBtn = document.querySelector("button");
    oBtn.onclick = function (ev1) {
        ajax({
            type:"get",
            url:"12-ajax-json.php",
            success: function (xhr) {
                // console.log(xhr.responseText);
                var str = xhr.responseText;
                /*
                在低版本的IE中, 不可以使用原生的JSON.parse方法, 但是可以使用json2.js这个框架来兼容
                */
                var obj = JSON.parse(str);
                // console.log(obj);
                console.log(obj.name);
                console.log(obj.age);
            },
            error: function (xhr) {
                console.log(xhr.status);
            }
        })
    }
}
```

## 02 可能遇到的问题

1. 从后台接收到的数据是标准JSON（key和value都带引号，所有内容也被引号引起来，组成字符串），直接用JSON.parse转JSON为对象。

2. 从后台接收到json数据，json有可能是非标准的json，如果是非标准的（比如json标准要求key，value带引号，但是非标准的没带），怎么把数据转为js对象？使用eval方法。

   ```js
   let str = '{"name":"zs", "age":"3"}';//标准JSON, 3是数字，可以不被引号括起来，也是标准的
   let obj = JSON.parse(str);//成功转为对象
   
   //--------
   let str = '{"name":zs, "age":3}';//值zs没被括起来，是非标准，JSON.parse报错
   let str = '{name:"zs", age:3}';//键没被引号括起来，非标准，JSON.parse报错
   
   let obj = eval('('+str+')');//eval方法成功转为对象，注意括号里有括号'('+str+')'
   //提示：eval方法还能转化标准的json为对象
   //eval还能将多个对象组成的数组JSON转为对象
   ```

   