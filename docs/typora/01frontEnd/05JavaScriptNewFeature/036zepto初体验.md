# 36 zepto初体验

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>01-zepto初体验</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            background: skyblue;
        }
    </style>
    <!--<script src="js/jquery-3.1.1.js"></script>-->
    <script src="js/zepto.js"></script>
    <script src="js/event.js"></script>
</head>
<body>
<button>我是按钮</button>
<div></div>
<script>
    /*
    1. Zepto?
    Zepto 是一个轻量级的针对现代高级浏览器的 JavaScript库，
    它与jQuery有着类似的api, 如果你会用jQuery，那么你也会用Zepto

    2.既然和jQuery差不多, 为什么还需要Zepto?
    2.1jQuery更多是在PC端被应用，Zepto更多是在移动端被应用；
       也正是因为jQuery用在PC端, 所以jQuery考虑了很多低级浏览器的的兼容性问题, ,所以代码更多体积更大；
       也正是因为Zepto用在移动端, 所以Zepto则是直接抛弃了低级浏览器的适配问题 , 所以代码更少体积更小；
    2.2综上所述: Zepto其实就是专门用于移动端的轻量级的jQuery

    3.官方网址:
    英文版：http://zeptojs.com/
    中文版：http://www.css88.com/doc/zeptojs_api/
    */
    /*
    let oBtn = document.querySelector("button");
    oBtn.onclick = function () {
        $("div").css({backgroundColor: "red"});
    }
    */
    /*
    4.Zepto的特点
    Zepto采用了模块化的开发, 将不同的功能放到了不同的模块中,
    在使用的过程中我们可以按需导入, 也就是需要什么功能就导入什么模块
    * */
    $("button").click(function () {
        $("div").css({backgroundColor: "red"});
    });
    /*
    5.Zepto注意点
    如果是从官方网站下载的, 那么已经包含了默认的一些模块
    如果是从github下载的, 那么需要我们自己手动导入每一个模块
    当然后续学习了NodeJS后, 我们也可以自己定制
    * */
</script>
</body>
</html>
```