# 34 html-withimg-loader

搭配html-plugin

```html
<!--
1.什么是html-withimg-loader?
我们通过file-loader或者url-loader已经可以将JS或者CSS中用到的图片打包到指定目录中了(既能打包js引入的图片，也能打包css背景引入的图片)
但是file-loader或者url-loader并不能将HTML中用到的图片打包到指定目录中
所以此时我们就需要再借助一个名称叫做"html-withimg-loader"的加载器来实现HTML中图片的打包

2.html-withimg-loader使用
https://www.npmjs.com/package/html-withimg-loader
2.1安装html-withimg-loader
npm install html-withimg-loader --save
2.2配置html-withimg-loader
{
    test: /\.(htm|html)$/i,
    loader: 'html-withimg-loader'
}
-->
```

报错：路径变为一个对象`{default: 'xxx'}`

解决：`file-loader`修改`esModule: false`

