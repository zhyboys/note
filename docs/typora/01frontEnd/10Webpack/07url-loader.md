# 07 url-loader

`url-loader`也是打包图片的。

不同于file-loader的是能将图片压缩为base64。压缩后就不会再拷贝图片到打包目录了。

```bash
cnpm install url-loader --save-dev
```



```html
<!--
1.urlloader
url-loader 功能类似于 file-loader，
但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL

2.urlloader使用
https://www.webpackjs.com/loaders/url-loader/
2.1安装urlloader
npm install --save-dev url-loader
2.2配置urlloader
{
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                name: "[name].[ext]",
                outputPath: "/images",
                limit: 1024
            }
        }
    ]
}

优势:
图片比较小的时候直接转换成base64字符串图片, 减少请求次数
图片比较大的时候由于生成的base64字符串图片也比较大, 就保持原有的图片
-->
```

```js
rules: [
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
                    limit: 1024 * 100, // 100Kb
                    // 指定打包后文件名称
                    name: '[name].[ext]',
                    // 指定打包后文件存放目录
                    outputPath: 'images/',
                }
            }
        ]
    }
]
```