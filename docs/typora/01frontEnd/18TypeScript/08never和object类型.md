# 08 never和object类型

```js
// Never类型
// 表示的是那些永不存在的值的类型
// 一般用于抛出异常或根本不可能有返回值的函数
// function demo():never {
//     throw new Error('报错了');
// }
// demo();

// function demo2():never {
//     while (true){}
// }
// demo2();

// Object类型
// 表示一个对象
let obj:object; // 定义了一个只能保存对象的变量
// obj = 1;
// obj = "123";
// obj = true;
obj = {name:'lnj', age:33};
console.log(obj);
```

经过个人实践证明有些地方是令人难以理解的，百度说不必纠结于这些，没啥用。

**以下均不会报错**，但是使用ES5的语法f1就会报错

```ts
let f1:(b:number) => void
let f2:(b:number) => number
let f3:(b:number) => never

f1 = (b) => {
    return 2
}
f2 = (b) => {
   return 2
}
f3 = (b) => {
    while (true){}
}
```

**以下均会报错**只有写了`while(true)`或`throw new Error`才不会报错

```ts
function demo():never {
    
}
demo();
```