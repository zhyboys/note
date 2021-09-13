# 13 prop方法



1. prop方法
2. removeProp方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>17-jQuery的prop方法</title>
    <script src="js/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            /*
            1.prop方法
            特点和attr方法一致
            2.removeProp方法
            特点和removeAttr方法一致
            */
            /*
            $("span").eq(0).prop("demo", "it666");
            $("span").eq(1).prop("demo", "lnj");
            console.log($("span").prop("demo"));

            $("span").removeProp("demo");
            */

            /*
            注意点:
            prop方法不仅能够操作属性, 他还能操作属性节点

            官方推荐在操作属性节点时,具有 true 和 false 两个属性的属性节点，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()
            */
            // console.log($("span").prop("class"));
            // $("span").prop("class", "box");

            /*
            prop与attr的不同之处
            1.prop能返回true和false，举例如下
            2.prop不仅能操作属性节点，还能操作属性。
            */
            console.log($("input").prop("checked")); // true / false
            console.log($("input").attr("checked")); // checked / undefined

        });
    </script>
</head>
<body>
<span class="span1" name="it666"></span>
<span class="span2" name="lnj"></span>

<input type="checkbox">
</body>
</html>
```

