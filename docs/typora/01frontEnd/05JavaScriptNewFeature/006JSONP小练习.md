# 06 JSONP小练习

没有新内容，实现百度输入框的搜索内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>24-JSONP练习</title>
    <script src="js/jquery-1.12.4.js"></script>
</head>
<body>
<input type="text" placeholder="请输入要搜索的内容">
<ul></ul>
<script>
    /*
    jQuery1102031111030815926477_1559740511411(
    {
    "q":"i",
    "p":false,
    "g":[
    {"type":"sug","sa":"s_1","q":"ins"},
    {"type":"sug","sa":"s_2","q":"iphone"},
    {"type":"sug","sa":"s_3","q":"ig"},
    {"type":"sug","sa":"s_4","q":"iphone x"},
    {"type":"sug","sa":"s_5","q":"ieee"},
    {"type":"sug","sa":"s_6","q":"iu"},
    {"type":"sug","sa":"s_7","q":"it"},
    {"type":"sug","sa":"s_8","q":"ipo"},
    {"type":"sug","sa":"s_9","q":"ipad"},
    {"type":"sug","sa":"s_10","q":"ipados"}
    ]
    }
    );

    https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=i&cb=jQuery1102031111030815926477_1559740511411
    */
    let $ul = $("ul");
    $("input").on("input", function () {
        // console.log(this.value);
        $.ajax({
            url: "https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=" + this.value,
            data:{
                "teacher": "lnj",
                "age": 34
            },
            dataType: "jsonp", // 告诉jQuery需要请求跨域的数据
            jsonp: "cb",  // 告诉jQuery服务器在获取回调函数名称的时候需要用什么key来获取
            success: function (msg) {
                // console.log(msg);
                createItems(msg.g);
            }
        });
    });
    function createItems(list) {
        $("ul>li").remove();
        for(let i = 0; i < list.length; i++){
            let $li = $("<li>"+list[i].q+"</li>");
            $ul.append($li);
        }
    }
</script>
</body>
</html>
```