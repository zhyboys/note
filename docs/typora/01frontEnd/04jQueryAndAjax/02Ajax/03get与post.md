# 03 get与post

php文档查看：w3school网页serve板块，找到超全局查看全局变量。

```html
<!--
1.可以通过form标签的method属性指定发送请求的类型
2.如果是get请求会将提交的数据拼接到URL后面
?userName=lnj&userPwd=123456
3.如果是post请求会将提交的数据放到请求头中

4.GET请求和POST请求的异同
4.1相同点:
都是将数据提交到远程服务器
4.2不同点:
4.2.1提交数据存储的位置不同
GET请求会将数据放到URL后面
POST请求会将数据放到请求头中
4.2.2提交数据大小限制不同
GET请求对数据有大小限制
POST请求对数据没有大小限制

5.GET/POST请求应用场景
GET请求用于提交非敏感数据和小数据
POST请求用于提交敏感数据和大数据
-->
<form action="02-get-post.php" method="post">
    <input type="text" name="userName"><br>
    <input type="password" name="userPwd"><br>
    <input type="submit" value="提交"><br>
</form>
```

```php
//print_r($_GET);
//echo $_GET["userName"];
//echo $_GET["userPwd"];

//print_r($_POST);
//echo $_POST["userName"];
//echo $_POST["userPwd"];
```