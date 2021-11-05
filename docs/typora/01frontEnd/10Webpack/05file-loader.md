# 05 file-loader

`file-loader`只学了打包图片和字体（格式为eot|svg|ttf|woff|woff2）。

## 0 关于loader的补充说明

loader使用时不需要require引入，但plugin需要。并且loader只能打包文件，处理文件，但plugin不只打包文件，更能在webpack不同生命周期广播出来的事件对文件各种操作。

tip: 对于loader，打包前只要require的路径（写代码的路径，而不是打包后的路径）是正确的，那么无论打包文件路径在webpack怎么配置，你都不必担心文件路径找不到的问题。webpack会帮你处理好一切。

## 1 提炼

```js
//3.1安装file-loader
npm install --save-dev file-loader
//3.2在webpack.config.js中配置file-loader
module: {
    // 定义规则
    rules: [
      {
          // 定义正则表达式
        test: /\.(png|jpg|gif)$/,
          // 使用哪些loader
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
```



## 2 踩坑

事实上，配置后图片不显示，并且浏览器会报错。

```
[object%20Module]:1 GET file:///C:/Users/THINKPAD/Desktop/webpack-studay/webpack03/[object%20Module] net::ERR_FILE_NOT_FOUND
```

**解决方案一：**

解决方案是`esModule:false`关闭ES模块语法。关闭后`let img = require('./xx.png')`输出的`console.log(img)`才与老师一样，输出的是图片路径。

```js
use: [
    {
        loader: 'file-loader',
        options: {
            limit:10240,
            name:"[name].[ext]",
            esModule: false
        }
    },
],
```

**解决方案二：**

默认输出的`console.log(img)`是一个对象，对象中有`default`属性，`default`属性中是一个路径。那就使用default属性就可以了。`oImg.src = img.default`(`oImg`是document的img元素)。



## 3 老师的原文

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>05-webpack-file-loader</title>
</head>
<body>
<!--
1.什么是loader?
webapck的本质是一个模块打包工具, 所以webpack默认只能处理JS文件,不能处理其他文件,
因为其他文件中没有模块的概念, 但是在企业开发中我们除了需要对JS进行打包以外,
还有可能需要对图片/CSS等进行打包, 所以为了能够让webpack能够对其它的文件类型进行打包,
在打包之前就必须将其它类型文件转换为webpack能够识别处理的模块,
用于将其它类型文件转换为webpack能够识别处理模块的工具我们就称之为loader

2.如何使用loader
webpack中的loader都是用NodeJS编写的, 但是在企业开发中我们完全没有必要自己编写,
因为已经有众多大神帮我们编写好了企业中常用的loader, 我们只需要安装、配置、使用即可

2.1通过npm安装对应的loader
2.2按照loader作者的要求在webpack进行相关配置
2.3使用配置好的loader

3.fileloader使用
https://www.webpackjs.com/loaders/file-loader/
3.1安装file-loader
npm install --save-dev file-loader
3.2在webpack.config.js中配置file-loader
module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
-->
</body>
</html>
```

