# 07 Buffer

## 01 Buffer类

用法写的并不全面，想要全面得搜node api。

1. Buffer.from(来自)
2. Buffer.alloc

```
0.准备知识
0.1计算机只能识别0和1(因为计算机只认识通电和断电两种状态),
0.2所有存储在计算机上的数据都是0和1组成的(数据越大0和1就越多)
0.3计算机中的度量单位
1 B(Byte字节) = 8 bit(位)
// 00000000  就是一个字节
// 111111111 也是一个字节
// 10101010  也是一个字节
// 任意8个 0或1的组合都是一个字节
1 KB = 1024 B
1 MB = 1024KB
1 GB = 1024MB

1.什么是Buffer?
Buffer是NodeJS全局对象上的一个类, 是一个专门用于存储字节数据的类
NodeJS提供了操作计算机底层API, 而计算机底层只能识别0和1,
所以就提供了一个专门用于存储字节数据的类

2.如何创建一个Buffer对象
2.1创建一个指定大小的Buffer
Buffer.alloc(size[, fill[, encoding]])

2.2根据数组/字符串创建一个Buffer对象
Buffer.from(string[, encoding])

3.Buffer对象本质
本质就是一个数组
```

```js
// let buf = Buffer.alloc(5);
// console.log(buf); // <Buffer 00 00 00 00 00>
// 注意点: 通过console.log();输出Buffer. 会自动将存储的内容转换成16进制再输出

// let buf = Buffer.alloc(5, 17);
// console.log(buf);

// let buf = Buffer.from("abc");
// console.log(buf); // <Buffer 61 62 63>

let buf = Buffer.from([1, 3, 5]);
console.log(buf);
// console.dir(buf);
buf[0] = 6;
console.log(buf);
```

## 02 Buffer实例方法

1. buf.toString
2. buf.write
3. buf.slice

```
1.将二进制数据转换成字符串
返回: <string> 转换后的字符串数据。
buf.toString();

2.往Buffer中写入数据
string <string> 要写入 buf 的字符串。
offset <integer> 开始写入 string 之前要跳过的字节数。默认值: 0。
length <integer> 要写入的字节数。默认值: buf.length - offset。
encoding <string> string 的字符编码。默认值: 'utf8'。
返回: <integer> 已写入的字节数。
buf.write(string[, offset[, length]][, encoding])

3.从指定位置截取新Buffer
start <integer> 新 Buffer 开始的位置。默认值: 0。
end <integer> 新 Buffer 结束的位置（不包含）
buf.slice([start[, end]])
```

```js
// let buf = Buffer.from([97, 98, 99]);
// console.log(buf);
// console.log(buf.toString());

// let buf = Buffer.alloc(5); // <Buffer 00 00 00 00 00>
// console.log(buf);
// // buf.write("abcdefg");
// // buf.write("abcdefg", 2);
// buf.write("abcdefg", 2, 2);
// console.log(buf);
// console.log(buf.toString());

let buf1 = Buffer.from("abcdefg");
// let buf2 = buf1.slice();
// let buf2 = buf1.slice(2);
let buf2 = buf1.slice(2,4);
console.log(buf2);
console.log(buf2.toString());
```

## 03 Buffer静态方法

1. Buffer.isEncoding
2. Buffer.isBuffer
3. Buffer.byteLength
4. Buffer.concat

```
1.检查是否支持某种编码格式
Buffer.isEncoding(encoding)

2.检查是否是Buffer类型对象
Buffer.isBuffer(obj)

3.获取Buffer实际字节长度
Buffer.byteLength(string[, encoding])
注意点: 一个汉字占用三个字节

4.合并Buffer中的数据
Buffer.concat(list[, totalLength])
```

```js
// let res = Buffer.isEncoding("gbk");
// console.log(res);

// let obj = {};
// let obj = Buffer.alloc(5);
// let res = Buffer.isBuffer(obj);
// console.log(res);

// let buf = Buffer.from("123");
// let buf = Buffer.from("知播渔");
// let res = Buffer.byteLength(buf);
// console.log(res);
// console.log(buf.length);

let buf1 = Buffer.from("123");
let buf2 = Buffer.from("abc");
let buf3 = Buffer.from("xxx");
let res = Buffer.concat([buf1, buf2, buf3]);
console.log(res);
console.log(res.toString());
```