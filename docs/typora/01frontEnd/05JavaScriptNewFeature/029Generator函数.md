# 29 Generator函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>48-Generator函数基本概念</title>
</head>
<body>
<script>
    /*
    1.什么是Generator函数?
    Generator 函数是 ES6 提供的一种异步编程解决方案
    Generator 函数内部可以封装多个状态, 因此又可以理解为是一个状态机

    2.如何定义Generator函数
    只需要在普通函数的function后面加上*即可

    3.Generator函数和普通函数区别
    3.1调用Generator函数后, 无论函数有没有返回值, 都会返回一个迭代器对象,
    3.2调用Generator函数后, 函数中封装的代码不会立即被执行

    4.真正让Generator具有价值的是yield关键字
    4.1在Generator函数内部使用yield关键字定义状态
    4.2并且yield关键字可以让 Generator内部的逻辑能够切割成多个部分。
    4.3通过调用迭代器对象的next方法执行一个部分代码,
       执行哪个部分就会返回哪个部分定义的状态

    5.在调用next方法的时候可以传递一个参数, 这个参数会传递给上一个yield
    */
    function* gen() {
        console.log("123");
        let res = yield "aaa";

        console.log(res);
        console.log("567");
        yield 1 + 1;

        console.log("789");
        yield true;
    }
    let it = gen();
    // console.log(it);
    console.log(it.next());
    console.log(it.next("it666"));
    // console.log(it.next());
    // console.log(it.next());

    // 注意点: yield关键字只能在Generator函数中使用, 不能在普通函数中使用
    // function say() {
    //     yield "abc";
    // }
    // say();
</script>
</body>
</html>
```



