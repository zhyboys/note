# 08 CSS-loader

> 新知识：CSS中引入CSS：`@import index.css`。

使用这个需要同时use`css-loader`和`style-loader`，也需要同时安装这两个。

```bash
npm install --save-dev css-loader
npm install style-loader --save-dev
```

```
css-loader:   解析css文件中的@import依赖关系
style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
```

即便是css代码，也是通过js引入，打包后的js在html中引入，js会自动将css插入到html头部。



**原文：**

```html
<!--
1.css-loader
和图片一样webpack默认能不能处理CSS文件, 所以也需要借助loader将CSS文件转换为webpack能够处理的类型

2.css-loader使用:
2.1安装cssloader
npm install --save-dev css-loader
2.2安装styleloader
npm install style-loader --save-dev
2.3配置css-loader
{
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ]
}

3.css-loader和style-loader作用
css-loader:   解析css文件中的@import依赖关系
style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
-->
```

```js
const path = require("path");

module.exports = {
    /*
    配置sourcemap
    development: cheap-module-eval-source-map
    production: cheap-module-source-map
    * */
    devtool: "cheap-module-eval-source-map",
    /*
    mode: 指定打包的模式, 模式有两种
    一种是开发模式(development): 不会对打包的JS代码进行压缩
    还有一种就是上线(生产)模式(production): 会对打包的JS代码进行压缩
    * */
    mode: "development", // "production" | "development"
    /*
    entry: 指定需要打包的文件
    * */
    entry: "./index.js",
    /*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */
    output: {
        /*
        filename: 指定打包之后的JS文件的名称
        * */
        filename: "bundle.js",
        /*
        path: 指定打包之后的文件存储到什么地方
        * */
        path: path.resolve(__dirname, "bundle")
    },
    /*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */
    module: {
        rules: [
            // 打包图片规则
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            /*
                            limit: 指定图片限制的大小
                            如果被打包的图片超过了限制的大小, 就会将图片保存为一个文件
                            如果被打包的图片没有超过限制的大小, 就会将图片转换成base64的字符串
                            注意点:
                            对于比较小的图片, 我们将图片转换成base64的字符串之后, 可以提升网页的性能(因为减少了请求的次数)
                            对于比较大的图片, 哪怕我们将图片转换成了base64的字符串之后, 也不会提升网页的性能, 还有可能降低网页的性能
                            (因为图片如果比较大, 那么转换之后的字符串也会比较多, 那么网页的体积就会表达, 那么访问的速度就会变慢)
                            * */
                            limit: 1024 * 100,
                            // 指定打包后文件名称
                            name: '[name].[ext]',
                            // 指定打包后文件存放目录
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            // 打包CSS规则
            {
                test: /\.css$/,
                /*
                css-loader:   解析css文件中的@import依赖关系
                style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
                * */
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
```