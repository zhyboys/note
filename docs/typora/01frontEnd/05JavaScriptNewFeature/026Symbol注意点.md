# 26 Symbol注意点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>45-Symbol注意点</title>
</head>
<body>
<script>
    // 1.通过Symbol生成独一无二值时需要在后面加上(), 但是前面不能加new, 因为它不是引用类型
    // let xxx = Symbol(); // 正确
    // let xxx = new Symbol(); // 错误

    // 2.通过Symbol生成独一无二值时传入的字符串仅仅是一个标记, 方便我们阅读代码, 没有其它任何意义
    // let xxx = Symbol("name");

    // 3.做类型转换的时候不能转换成数值
    // let xxx = Symbol("name");
    // console.log(String(xxx));
    // console.log(Boolean(xxx));
    // console.log(Number(xxx));

    // 4.不能做任何运算
    // let xxx = Symbol("name");
    // console.log(xxx + "abc");
    // console.log(xxx + 123);

    // 5.Symbol生成的值作为属性或方法名称时, 一定更要保存下来, 否则后续无法使用
    // let name = Symbol("name");
    // let obj = {
    //     // [name]: "lnj"
    //     [Symbol("name")]: "it666"
    // }
    // // console.log(obj[name]);
    // console.log(obj[Symbol("name")]);

    // 6.for循环无法遍历出Symbol的属性和方法
    let name = Symbol("name");
    let say = Symbol("say");
    let obj = {
        // 注意点: 如果想使用变量作为对象属性的名称, 那么必须加上[]
        [name]: "lnj",
        [say]: function () {
            console.log("say");
        },
        age: 34,
        gender: "man",
        hi: function () {
            console.log("hi");
        }
    }
    // for(let key in obj){
    //     console.log(key);
    // }
    console.log(Object.getOwnPropertySymbols(obj));
</script>
</body>
</html>
```

