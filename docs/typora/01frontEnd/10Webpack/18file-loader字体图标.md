# 18 file-loader字体图标

<p style="color:#ff00ff"> 唯一一个没成功的打包 </p>

**首先下载file-loader**

```html
<!--
1.如何打包字体图标
字体图标中也用到了url用到了文件, 所以我们需要通过file-loader来处理字体图标文件
{
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    use:[{
        loader: "file-loader",
        options: {
            name: "[name].[ext]",
            outputPath: "font/",
        }
    }]
}
-->
```



**JavaScript文件引入使用图标**

```js
import "./font/iconfont.css"

document.body.innerHTML = "<i class='iconfont icon-icon' style='font-size: 100px'></i>";
```

