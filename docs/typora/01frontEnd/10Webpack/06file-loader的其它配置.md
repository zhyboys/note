# 06 file-loader的其它配置

配置option

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>06-webpack-file-loader其它配置</title>
</head>
<body>
<!--
注意点:
默认情况下fileloader生成的图片名就是文件内容的 MD5 哈希值
如何想打包后不修改图片的名称, 那么可以新增配置  name: "[name].[ext]"
其它命名规则详见: placeholders

注意点:
默认情况下fileloader会将生成的图片放到dist根目录下面
如果想打包之后放到指定目录下面, 那么可以新增配置 outputPath: "images/"

注意点:
如果需要将图片托管到其它服务器, 那么只需在打包之前配置 publicPath: "托管服务器地址"即可
-->
</body>
</html>
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