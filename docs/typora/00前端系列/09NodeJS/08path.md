# 08 path路径模块

Buffer模块已经添加到了globel中，所以不用导入，path模块没有，所以需要导入。

path模块时系统模块，导入时不需要加路径`./`。

```js
1.路径模块(path)
封装了各种路径相关的操作
和Buffer一样,NodeJS中的路径也是一个特殊的模块
不同的是Buffer模块已经添加到Global上了, 所以不需要手动导入
而Path模块没有添加到Global上, 所以使用时需要手动导入

2.获取路径的最后一部分
path.basename(path[, ext])

3.获取路径
path.dirname(path)

4.获取扩展名称
path.extname(path)

5.判断是否是绝对路径
path.isAbsolute(path)

6.获取当前操作系统路径分隔符
path.delimiter  （windows是\ Linux是/）

7.获取当前路径环境变量分隔符
path.sep  (windows中使用; linux中使用:)
-->
<!--
1.路径的格式化处理
// path.parse()  string->obj 路径转对象
// path.format() obj->string 对象转路径

2.拼接路径
path.join([...paths])

3.规范化路径
path.normalize(path)

4.计算相对路径
path.relative(from, to)

5.解析路径
path.resolve([...paths])
```

```js
let path = require("path");

/*
// basename用于获取路径的最后一个组成部分
// let res = path.basename('/a/b/c/d/index.html');
// let res = path.basename('/a/b/c/d');
// let res = path.basename('/a/b/c/d/index.html', ".html");
// console.log(res);

// dirname用于获取路径中的目录, 也就是除了最后一个部分以外的内容
// let res = path.dirname('/a/b/c/d/index.html');
// let res = path.dirname('/a/b/c/d');
// console.log(res);

// extname用于获取路径中最后一个组成部分的扩展名
// let res = path.extname('/a/b/c/d/index.html');
// let res = path.extname('/a/b/c/d');
// console.log(res);
*/
/*
isAbsolute用于判断路径是否是一个绝对路径
注意点:
区分操作系统
在Linux操作系统中/开头就是绝对路径
在Windows操作系统中盘符开头就是绝对路径

在Linux操作系统中路径的分隔符是左斜杠 /
在Windows操作系统中路径的分隔符是右斜杠 \
* */
/*
// let res = path.isAbsolute('/a/b/c/d/index.html'); // true
// let res = path.isAbsolute('./a/b/c/d/index.html'); // false
// let res = path.isAbsolute('c:\\a\\b\\c\\d\\index.html'); // true
// let res = path.isAbsolute('a\\b\\c\\d\\index.html'); // false
// console.log(res);

// path.sep用于获取当前操作系统中路径的分隔符的
// 如果是在Linux操作系统中运行那么获取到的是 左斜杠 /
// 如果是在Windows操作系统中运行那么获取到的是 右斜杠 \
// console.log(path.sep);

// path.delimiter用于获取当前操作系统环境变量的分隔符的
// 如果是在Linux操作系统中运行那么获取到的是 :
// 如果是在Windows操作系统中运行那么获取到的是 ;
// console.log(path.delimiter);
*/

/*
path.parse(path): 用于将路径转换成对象
{
  root: '/',
  dir: '/a/b/c/d',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
path.format(pathObject): 用于将对象转换成路径
* */
/*
// let obj = path.parse("/a/b/c/d/index.html");
// console.log(obj);

let obj = {
    root: '/',
    dir: '/a/b/c/d',
    base: 'index.html',
    ext: '.html',
    name: 'index'
};
let str = path.format(obj);
console.log(str);
 */

/*
path.join([...paths]): 用于拼接路径
注意点:
如果参数中没有添加/, 那么该方法会自动添加
如果参数中有.., 那么会自动根据前面的参数生成的路径, 去到上一级路径
* */
/*
// let str = path.join("/a/b", "c"); // /a/b/c
// let str = path.join("/a/b", "/c"); // /a/b/c
// let str = path.join("/a/b", "/c", "../"); // /a/b/c --> /a/b
// let str = path.join("/a/b", "/c", "../../"); // /a/b/c --> /a
// console.log(str);
 */

/*
path.normalize(path): 用于规范化路径
* */
/*
let res = path.normalize("/a//b///c////d/////index.html");
console.log(res);
*/

/*
path.relative(from, to): 用于计算相对路径
第一个参数: /data/orandea/test/aaa
第二个参数: /data/orandea/impl/bbb

/data/orandea/test/aaa --> ../  --> /data/orandea/test
/data/orandea/test --> ../ --> /data/orandea
..\..\impl\bbb
* */
/*
let res = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(res);
 */

/*
path.resolve([...paths]): 用于解析路径
注意点: 如果后面的参数是绝对路径, 那么前面的参数就会被忽略
* */
// let res = path.resolve('/foo/bar', './baz'); // /foo/bar/baz
// let res = path.resolve('/foo/bar', '../baz'); // /foo/baz
let res = path.resolve('/foo/bar', '/baz'); // /baz
console.log(res);
```

这些东西不用记，会看文档会用就行。