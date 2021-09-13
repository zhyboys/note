# 06 Ajax之get兼容IE

```html
<button>发送请求</button>
```

有两个兼容点见代码兼容点1和兼容点2。

1. 兼容点1是创建对象兼容。
2. 兼容点2是设置请求地址每次得不一样兼容。

```javascript
window.onload = function (ev) {

    var oBtn = document.querySelector("button");
    oBtn.onclick = function (ev1) {
        var xhr;
        //兼容点1
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xhr=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        }
        // var xhr = new XMLHttpRequest();
        /*
        兼容点2
        在IE浏览器中, 如果通过Ajax发送GET请求, 那么IE浏览器认为
        同一个URL只有一个结果
        05-ajax-get.txt === abc

        console.log(Math.random());
        console.log(new Date().getTime());
        写这个是为了兼容IE浏览器，让每次请求的地址都不一样，IE才能返回新数据，
        否则就是老缓存。
        */
        xhr.open("GET","05-ajax-get.txt?t="+(new Date().getTime()),true);
        xhr.send();
        xhr.onreadystatechange = function (ev2) {
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 ||
                xhr.status === 304){
                    // alert("请求成功");
                    alert(xhr.responseText);
                }else{
                    alert("请求失败");
                }
            }
        }
    }
}
```

php

```php
echo "ajax get page";
```

