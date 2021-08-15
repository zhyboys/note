# 08 Ajax之post

与get相比主要有三行代码有变化，其它都一样

```JavaScript
xhr.open("POST","08-ajax-post.php",true);
// 注意点: 以下代码必须放到open和send之间
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("userName=zs&userPwd=321");
```

1. 第一行代码需要说明请求为post请求，请求路径后不用加发送的内容。
2. 第三行代码必须加。
3. 第四行代码设置发送的内容。