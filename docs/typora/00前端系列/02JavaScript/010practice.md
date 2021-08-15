# 10 练习

1. 要求用户输入3个0-9的数字，输出那些数字没被用户输入过。

输入格式要求：一次性输入，"x,y,z"。

## 01 切割字符串的方法

`let arr = str.split(",");`以逗号为分界进行切割，返回一个数组。

```javascript
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
for(let i=0;i<arr.length;i++){
    for(let j=0;j<10;j++){
        if(arr[i]==j){
            continue;
        }
        console.log(j);
    }
}
console.log(arr);
//输入234
//输出013456789 012456789 012356789
//显然不行
```

```javascript
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
for(let i=0;i<10;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]==i){
            continue;
        }
        console.log(i);
    }
}

/**
输入4,5,6
输出000111222333445566777888999
显然不行
*/
```

```javascript
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
for(let i=0;i<10;i++){
    if(arr[0]==i||arr[1]==i||arr[2]==i){
        continue;
    }
    console.log(i);
}
/*
输入4，5，6
输出0123789
可以
*/
```

是可以了，但不具有扩展性，如果别人多数了一个数或者需求改了，就不OK了！

优化后：

```javascript
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
let res = new Array(10);
for(let i=0;i<arr.length;i++){
    let str = arr[i];
    res[str] = 88;
}
for(let i=0;i<res.length;i++){
    if(88 == res[i]){
        continue;
    }
    console.log(i);
}
/*
[undefined, undefined, undefined, undefined, 4,5,6, undefined, undefined, undefined, undefined]
*/
```

2. 要求用户输入3个0-9的数字，输出排序后的数字。

输入格式要求：一次性输入，"x,y,z"。

## 02 数组全部赋值的方法

`arr.fill(0);`0就是全部赋默认值0.

```javascript
//与上一题几乎一样的方法
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
let res = new Array(10);
for(let i=0;i<arr.length;i++){
    let str = arr[i];
    res[str] = 88;
}
for(let i=0;i<res.length;i++){
    if(88==res[i]){
        console.log(i);
    }
}
```

缺点：输入了重复数字只能排序输出一次，输入了两个3只能输出1个3.

优化如下

```javascript
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
let res = new Array(10);
res.fill(0);
for(let i=0;i<arr.length;i++){
    let str = arr[i];
    res[str] += 1;
}
for(let i=0;i<res.length;i++){
    for(let j=0;j<res[i];j++){
        console.log(i);
    }
}
```

以上所有方法可谓投机取巧，要知道，实际中比较大小不可能再创建一个数组，而且还要创建一个大于要比较的最大值的长度的数组。显然浪费资源。

```javascript
/*
123
先比较12，取最小
再比较13取最小
在比较23取最小
*/
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let ex = arr[i];
            arr[i] = arr[j];
            arr[j] = ex;
        }
    }
}
console.log(arr);
```

```javascript
/*
123
先比较12，取最大
再比较23取最大
在比较12取最大
*/
let str = prompt("请输入三个数字，逗号隔开");
let arr = str.split(',');
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            let ex = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = ex;
        }
    }
}
console.log(arr);
```

以上就是选择排序和冒泡排序。