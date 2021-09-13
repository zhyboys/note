# 05 Node全局方法之模块

## 01 简单内容

```
1.和浏览器一样Node环境中的全局对象也提供了很多方法属性供我们使用
中文文档地址: http://nodejs.cn/api/

__dirname: 当前文件所在文件夹的绝对路径
__filename: 当前文件的绝对路径
setInterval / clearInterval : 和浏览器中window对象上的定时器一样
setTimeout /  clearTimeout : 和浏览器中window对象上的定时器一样
console :  和浏览器中window对象上的打印函数一样
```

```js
// console.log(__dirname); // C:\Users\Jonathan_Lee\Desktop\Git-Webpack\Node//当前js文件路径
// console.log(__filename); // C:\Users\Jonathan_Lee\Desktop\Git-Webpack\Node\05.js

console.log("abc");
/*
setTimeout(function () {
    console.log("123");
}, 2000);
 */
setInterval(function () {
    console.log("123");
}, 1000);
```

## 02 模块

exports  require

```
1.什么是模块?
1.1浏览器开发中的模块
   在浏览器开发中为了避免命名冲突, 方便维护等等
   我们采用类或者立即执行函数的方式来封装JS代码, 来避免命名冲突和提升代码的维护性
   其实这里的一个类或者一个立即执行函数就是浏览器开发中一个模块
   let obj = {
       模块中的业务逻辑代码
   };
   ;(function(){
      模块中的业务逻辑代码
      window.xxx = xxx;
   })();
存在的问题:
没有标准没有规范

1.2NodeJS开发中的模块
   NodeJS采用CommonJS规范实现了模块系统

1.3CommonJS规范
CommonJS规范规定了如何定义一个模块, 如何暴露(导出)模块中的变量函数, 以及如何使用定义好的模块

- 在CommonJS规范中一个文件就是一个模块
- 在CommonJS规范中每个文件中的变量函数都是私有的，对其他文件不可见的
- 在CommonJS规范中每个文件中的变量函数必须通过exports暴露(导出)之后其它文件才可以使用
- 在CommonJS规范中想要使用其它文件暴露的变量函数必须通过require()导入模块才可以使用
```

1. 暴露

```js
let name = "it666.com";

function sum(a, b) {
    return a + b;
}

exports.str = name;
exports.fn = sum;
```

2. 导入

```js
let aModule = require("./06-a");
console.log(aModule);
console.log(aModule.str);
let res = aModule.fn(10, 20);
console.log(res);
```

## 03 模块导出数据的三种方式

1. `exports.str = name;`，使用时需要导入，xxx.属性名使用。
2. `module.exports.str = name;`，与上面第一种方式等价。
3. `global.str = name;`，使用时也需要导入，但不需要xxx.属性名，而是可以直接使用属性名。

```
1.在NodeJS中想要导出模块中的变量函数有三种方式
1.1通过exports.xxx = xxx导出
1.2通过module.exports.xxx = xxx导出
1.3通过global.xxx = xxx导出
注意点:
无论通过哪种方式导出, 使用时都需要先导入(require)才能使用
通过global.xxx方式导出不符合CommonJS规范, 不推荐使用

let name = "it666.com";

function sum(a, b) {
    return a + b;
}

// exports.str = name;
// exports.fn = sum;

// module.exports.str = name;
// module.exports.fn = sum;

global.str = name;//global虽然可用，但不建议使用
global.fn = sum;
```

**方法一与方法二的区别：**

```
1.exports和module.exports区别
exports只能通过 exports.xxx方式导出数据, 不能直接赋值
module.exports既可以通过module.exports.xxx方式导出数据, 也可以直接赋值

注意点:
在企业开发中无论哪种方式都不要直接赋值, 这个问题只会在面试中出现
```

区别举例

```js
let name = "lnj";
// exports.str = name;
// module.exports.str = name;

// exports = name;

module.exports = name;
```

```js
let aModule = require("./08-a.js");
/*
exports = name;
{}
* */
/*
module.exports = name;
lnj
* */
console.log(aModule);
```

## 04 require注意点

```
1.require注意点
1.1require导入模块时可以不添加导入模块的类型（后缀名）
如果没有指定导入模块的类型, 那么会依次查找.js .json .node文件
无论是三种类型中的哪一种, 导入之后都会转换成JS对象返回给我们

1.2导入自定义模块时必须指定路径
require可以导入"自定义模块(文件模块)"、"系统模块(核心模块)"、"第三方模块"
导入"自定义模块"模块时前面必须加上路径（就是./）
导入"系统模块"和"第三方模块"是不用添加路径

1.3导入"系统模块"和"第三方模块"是不用添加路径的原因
如果是"系统模块"直接到环境变量配置的路径中查找
如果是"第三方模块"会按照module.paths数组中的路径依次查找
```