# 10 Ajax之jQuery封装

jQuery内部已经封装好了，只要引入jQuery库，按照下面的格式写就OK了。

```JavaScript
$.ajax({
    url: "09-ajax-jquery.php",
    type: "get",
    data: "userName=lnj&userPwd=654321",
    success: function(msg){
        alert(msg );
    },
    error: function (xhr) {
        alert(xhr.status);
    }
});
```