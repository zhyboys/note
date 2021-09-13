---
title: this关键字
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>this关键字</title>
</head>
<body>
<script>
    /*
    1）普通函数执行，内部this指向全局变量window
    2）函数在定义的时候this是不确定的，只有在调用的时候才确定
    3）如果函数作为一个对象的方法，则this指向调用该方法的对象
    4）构造函数中的this是一个引述对象，类似一个初始化的模型，所有方法和属性都挂载到了这个隐式对象身上，后续通过new关键字来调用，从而实现实例化
     */
//    普通函数执行
    var str = '张三';
    function  func()
    {
        console.log(this);//window
        console.log(this.str);//张三
    }
//    指向对象
    var obj={
        name : '小李',
        age  : 19,
        func : function(){
        console.log(this);
        console.log(this.name);
    }
    };
    obj.func();//obj
// 构造函数
    function Fn(){
        this.name='kk';
        this.age=10;
        console.log(this);
    }
    new Fn();//如果没有使用new关键字，则this指向window，有了new就是构造函数指向对象
</script>
</body>
</html>
```

