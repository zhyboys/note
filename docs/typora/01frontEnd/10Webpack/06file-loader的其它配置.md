# 06 file-loader的其它配置

配置`option`，例如：

1. 配置打包后的**文件名**，如果默认就是`'[hash].[ext]'`，默认会将文件名转对应的hash值。
   1. 如果想文件名不变就写为`name: '[name].[ext]'`。
   2. 其中`[name] [ext] [hash]`叫 placeholder（占位符），可以找placehoder，还有很多。
2. 配置打包后的**输出路径**，`outputPath: "images"`就会放在images文件夹中。
   1. 关于`images`文件夹的路径是基于`webpack`的配置`output:{path: path.resolve(__dirname, "bundle")}`的。如果在`file-loader`中的`option`配置的`outputPath`是相对路径则会基于`bundle`发生相对变化。

```html
<!--
注意点（name）:
默认情况下fileloader生成的图片名就是文件内容的 MD5 哈希值
如何想打包后不修改图片的名称, 那么可以新增配置  name: "[name].[ext]"
其它命名规则详见: placeholders

注意点（outputPath）:
默认情况下fileloader会将生成的图片直接放到dist根目录下面
如果想打包之后放到指定目录下面, 那么可以新增配置 outputPath: "images/"

注意点（publicPath）:
如果需要将图片托管到其它服务器, 那么只需在打包之前配置 publicPath: "托管服务器地址"即可，这样require文件输出的文件路径会自动变为服务器地址。例如let img = require('./a.png'), console.log(img)此时输出的就是服务器文件地址（值得注意的是只是改了文件路径，并没有上传文件的功能）。但是打包时依然会将图片拷贝到该拷贝的位置，例如拷贝到images文件夹中。
-->
```

```js
rules: [
    {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    // 指定打包后文件名称
                    name: '[name].[ext]',
                    // 指定打包后文件存放目录
                    outputPath: 'images/',
                    // 指定托管服务器地址(统一替换图片地址)
                    publicPath: 'http://www.it666.com/images/'
                }
            }
        ]
    }
```