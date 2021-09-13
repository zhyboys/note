---
title: scrol家族
---

## 文件：家族
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            height: 5000px;
        }
    </style>
</head>
<body>
<script>
    /*
    document.body.scrollWidth   网页正文全文宽(不常用，视频老师没讲)
    document.body.scrollHeight  网页正文全文高(不常用，视频老师没讲)
    document.body.scrollTop     网页被卷去的高
    document.body.scrollLeft    网页被卷去的左

    scrollTo(x,y)//滚动到指定位置

    处理scroll家族的兼容问题
    ie9+和最新浏览器：
        window.pageXOffset:(scrollLeft)
        window.pageYOffset:(scrollTop)
     火狐和其他浏览器
        document.documentElement.scrollTop;
     谷歌浏览器 和没有声明DTD<DOCTYPE>
        document.body.scrollTop

     兼容写法：
     var scrollTop = window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
     */

    window.onscroll = function(){//监听滚动，滚动执行

    }
</script>
</body>
</html>
```
## 文件：JSON封装
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>封装</title>
    <style>
        body{
            height: 3000px;
        }
    </style>
</head>
<body>
<script>
    /**
     * 获取滚动的头部距离和左边距离
     * scroll().top 或 scroll().left
     * @returns {*}
     */
    function scroll(){
        //使用json封装
        if(window.pageYOffset !== null)
        {
            return {
                top:window.pageYOffset,
                left:window.pageXOffset
            }
        }
        else if(document.compatMode=='CSS1Compat')//遵循W3C
        {
            return {
                top:document.documentElement.scrollTop,
                left:document.documentElement.scrollLeft
            }
        }
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }

    //方法的使用举例
    window.onscroll=function(){
        console.log(scroll().top);
    };
    /**
     * 获取可视区域的宽高
     */
    function client(){
        if(window.innerWidth){//针对IE9+
            return {
                width:window.innerWidth,
                height:window.innerHeight
            }
        }else if(document.compatMode === 'CSS1Compat'){//W3C
            return{
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight
            }
        }
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
</script>
</body>
</html>
```