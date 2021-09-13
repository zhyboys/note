# 06 each方法

```javascript
var arr = [1, 3, 5, 7, 9];
var obj = {0:1, 1:3, 2:5, 3:7, 4:9, length:5};
/*
第一个参数: 遍历到的元素
第二个参数: 当前遍历到的索引
注意点:
原生的forEach方法只能遍历数组, 不能遍历伪数组
*/
// arr.forEach(function (value, index) {
//     console.log(index, value);
// });
// obj.forEach(function (value, index) {
//     console.log(index, value);
// });

// 1.利用jQuery的each静态方法遍历数组
/*
第一个参数: 当前遍历到的索引
第二个参数: 遍历到的元素
注意点:
jQuery的each方法是可以遍历伪数组的
*/
// $.each(arr, function (index, value) {
//     console.log(index, value);
// });
$.each(obj, function (index, value) {
    console.log(index, value);
});
```

定义一个对象

```javascript
let obj = {1:'o', 2:'p', 3:'q', 4:'r'};
```

1. 对象中的key加引号与不加引号是一样的。只不过如果不加引号，key如果是数字，访问时只能用`obj["33"]`的形式访问。

2. 如果对象中加了length属性，遍历出的结果是不一样的。

   ```JavaScript
   let obj = {1:'o', 2:'p', 3:'q', 4:'r'};//不加length遍历结果：1 o 2 p 3 q 4 r
   let obj = {1:'o', 2:'p', 3:'q', 4:'r', length:4} //加了length后0 undefined 1 o 2 p 3 q 
   ```

   