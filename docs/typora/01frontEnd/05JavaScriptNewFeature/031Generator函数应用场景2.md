# 32 Generator函数应用场景2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>50-Generator函数应用场景</title>
</head>
<body>
<script>
    /*
    1. 应用场景: 利用 Generator 函数，可以在任意对象上快速部署 Iterator 接口
    */
    /*
    Generator 函数特点
    1.Generator 函数也是一个函数
    2.Generator 函数会返回一个迭代器对象
    3.迭代器对象有next方法
    4.next方法每次执行都会返回一个对象{value: xxx, done: false}
    */
    /*
    function* gen() {
        yield "aaa";
        yield "bbb";
        yield "ccc";
    }
    let it = gen();
    // console.log(it);
    console.log(it.next());
    */

    /*
   1.必须有一个叫做[Symbol.iterator]的属性
   2.[Symbol.iterator]的属性会返回一个函数
   3.[Symbol.iterator]返回的函数执行之后会返回一个可迭代对象
   4.[Symbol.iterator]函数返回的对象中又一个名称叫做next的方法
   5.next方法每次执行都会返回一个对象{value: xxx, done: false}
   */
    /*
    let obj = {
        name: "lnj",
        age: 34,
        gender: "man",
        [Symbol.iterator](){
            let keys = Object.keys(this);
            // console.log(keys);
            let index = 0;
            let that = this;
            return {
                next(){
                    if(index < keys.length){
                        return {value: that[keys[index++]], done: false};
                    }else{
                        return {value: undefined, done: true};
                    }
                }
            }
        }
    }
    // console.log(obj[Symbol.iterator]);
    // let it = obj[Symbol.iterator]();
    // console.log(it);
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    for(let value of obj){
        console.log(value);
    }
    */

    let obj = {
        name: "lnj",
        age: 34,
        gender: "man"
    }
    function* gen(){
        let keys = Object.keys(obj);
        for(let i = 0; i < keys.length; i++){
            yield obj[keys[i]];
        }
    }
    obj[Symbol.iterator] = gen;
    // console.log(obj[Symbol.iterator]);
    let it = obj[Symbol.iterator]();
    // console.log(it);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
</script>
</body>
</html>
```