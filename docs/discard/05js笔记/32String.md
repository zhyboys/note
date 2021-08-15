---
title: String
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>String</title>
</head>
<body>
<script>
    /*
    charAt()        //获取指定位置处字符
    charCodeAt()    //获取指定位置处字符的ASCII码
    下标获取        //HTML5，IE8+支持 和charAt（）等效
     */

    var str='abc.com';

    //charAt()charCodeAt（）
    console.log(str.charAt(2));//输出第二个
    for(var i=0;i<str.length;i++)
    {
        console.log(str.charAt(i));
        console.log(str.charCodeAt(i));//遍历所有的阿斯克码值
    }

    //substr截取
    console.log(str.substr(2,3));//第一个参数是从哪开始截取，第二个参数是截取多少个(字符),不写第二个参数就往后截取所有的
    console.log(str.substr(str.lastIndexOf(('.'))));//截取后缀名的常用方法

    //indexOf()返回指定内容在元素字符串中的位置
    //lastIndexOf()从后往前找，只找第一个匹配的
    //trim（）去除字符串的前后的空白
    //toUpperCase()转换大写
    //toLowerCase()转换小写

//    =========================================
    //获取链接中的属性和值并生成对象
    function getUrlParams(url)
    {
        var index = url.indexOf('?')+1;//获取？后内容的所在位置
        var params = url.substr(index);//获取字符串
        var paramsArr = params.split('&');//分开&前后两端的内容
        console.log(paramsArr);
        var obj = {};
        paramsArr.forEach(function(value,index,array){
            var tempArr = value.split('=');//分开=前后两端的内容
            console.log(tempArr);

            var key = tempArr[0];
            obj[key]=tempArr[1];
            console.log(obj);
        });
        return obj;
    }
    var url='http://www.itlike.com/user?name=xl&pwd=lovexl&sex=女&age=22';
    getUrlParams(url);
</script>
</body>
</html>
```

