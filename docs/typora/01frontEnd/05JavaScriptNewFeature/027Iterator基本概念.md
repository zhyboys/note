# 27 Iterator基本概念

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>46-Iterator基本概念</title>
</head>
<body>
<script>
    /*
    1.什么是Iterator?
    Iterator又叫做迭代器, 是一种接口
    这里的接口和现实中接口一样, 是一种标准一种规范
    例如: 电脑的USB接口有电脑USB接口的标准和规范, 正式因为有了标准和规范
          所以A厂商生成的USB线可以插到B厂商电脑的USB接口上

    它规定了不同数据类型统一访问的机制, 这里的访问机制主要指数据的遍历
    在ES6中Iterator接口主要供for...of消费

    2.默认情况下以下数据类型都实现的Iterator接口
    Array/Map/Set/String/TypedArray/函数的 arguments 对象/NodeList 对象
    */
    /*
    1.只要一个数据已经实现了Iterator接口, 那么这个数据就有一个叫做[Symbol.iterator]的属性
    2.[Symbol.iterator]的属性会返回一个函数
    3.[Symbol.iterator]返回的函数执行之后会返回一个对象
    4.[Symbol.iterator]函数返回的对象中又一个名称叫做next的方法
    5.next方法每次执行都会返回一个对象{value: 1, done: false}
    6.这个对象中存储了当前取出的数据和是否取完了的标记
    */
    /*
    // let arr = [1, 3, 5];
    // console.log(arr[Symbol.iterator]);
    // let it = arr[Symbol.iterator]();
    // console.log(it);
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());

    // for(let value of arr){
    //     console.log(value);
    // }

    // let obj = {
    //     name: "lnj",
    //     age: 34,
    //     gender: "man"
    // }
    // console.log(obj[Symbol.iterator]);
    // for(let value of obj){
    //     console.log(value);
    // }
    */

    class MyArray{
        constructor(){
            for(let i = 0; i < arguments.length; i++){
                // this[0] = 1;
                // this[1] = 3;
                // this[2] = 5;
                this[i] = arguments[i];
            }
            this.length = arguments.length;
        }
        [Symbol.iterator](){
            let index = 0;
            let that = this;
            return {
                next(){
                    if(index < that.length){
                        return {value: that[index++], done: false}
                    }else{
                        return {value: that[index], done: true}
                    }
                }
            }
        }
    }
    let arr = new MyArray(1, 3, 5);
    // console.log(arr);
    // console.log(arr[0]);
    // arr[0] = 666;
    // console.log(arr);
    for(let value of arr){
        console.log(value);
    }
    // console.log(arr[Symbol.iterator]);
    // let it = arr[Symbol.iterator]();
    // console.log(it);
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
</script>
</body>
</html>
```

