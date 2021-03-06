# 25 Symbol类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>44-Symbol基本概念</title>
</head>
<body>
<script>
    /*
    1.什么Symbol?
    Symbol是ES6中新增的一种数据类型, 被划分到了基本数据类型中
    基本数据类型: 字符串、数值、布尔、undefined、null、Symbol
    引用数据类型: Object

    2.Symbol的作用
    用来表示一个独一无二的值

    3.如果生成一个独一无二的值?
    let xxx = Symbol();
    */
    /*
    4.为什么需要Symbol?
    在企业开发中如果需要对一些第三方的插件、框架进行自定义的时候
    可能会因为添加了同名的属性或者方法, 将框架中原有的属性或者方法覆盖掉
    为了避免这种情况的发生, 框架的作者或者我们就可以使用Symbol作为属性或者方法的名称

    5.如何区分Symbol?
    在通过Symbol生成独一无二的值时可以设置一个标记
    这个标记仅仅用于区分, 没有其它任何含义
    */
    // let xxx = Symbol();
    // let yyy = Symbol();
    // console.log(xxx === yyy);

    /*
    let obj = {
        name: "lnj",
        say: function () {
            console.log("say");
        }
    }
    obj.name = "it666";
    console.log(obj.name);
    obj.say = function () {
        console.log("test");
    }
    obj.say();
    */
    let name = Symbol("name");
    let say = Symbol("say");
    let obj = {
        // 注意点: 如果想使用变量作为对象属性的名称, 那么必须加上[]
        [name]: "lnj",
        [say]: function () {
            console.log("say");
        }
    }
    // obj.name = "it666";
    obj[Symbol("name")] = "it666";
    console.log(obj);
</script>
</body>
</html>
```