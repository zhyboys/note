# 15 postcss-loader之加前缀

> 遇到20/100px不能转化为0.2px是正常的（Less4.0版本后和Sass中的运算必须加括号）

postcss是一个工具，里面有很多插件可供使用（也需要额外安装）

```
npm i -D postcss-loader

# 自动补全前缀，适配浏览器的插件
npm i -D autoprefixer
```

安装完在`postcss.config.js`中配置autoprefixer



## 01 postcss的介绍

```html
<!--
1.什么是PostCSS?
https://www.postcss.com.cn/
PostCSS和sass/less不同, 它不是CSS预处理器
PostCSS是一款使用插件去转换CSS的工具，
PostCSS有许多非常好用的插件
例如
autoprefixer(自动补全浏览器前缀)
postcss-pxtorem(自动把px代为转换成rem)
... ...
-->
```



## 02 安装插件

```html
<!--
2.使用PostCSS自动补全浏览器前缀
2.1安装postcss-loader
npm i -D postcss-loader
2.2安装需要的插件（自动补充浏览器前缀）
npm i -D autoprefixer
2.3配置postcss-loader
在[css-loader or less-loader or sass-loader]之前添加postcss-loader
 * 务必把loader: "postcss-loader",添加到所有 有关cssloader 的最后（添加到最后的会被先处理）
2.4创建postcss-loader配置文件
postcss.config.js
https://github.com/browserslist/browserslist#queries
2.5在配置文件postcss.config.js中配置autoprefixer
module.exports = {
    plugins: {
        "autoprefixer": {
            "overrideBrowserslist": [
                // "ie >= 8", // 兼容IE7以上浏览器
                // "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
                // "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
                // "opera >= 11.5" // 兼容欧朋版本号大于11.5浏览器,
                "chrome  >= 36", // 如果需要适配的浏览器完全兼容则不会添加前缀
            ]
        }
    }
};
-->
```



## 03 配置postcss.config.js

```js
module.exports = {
    plugins: {
        "autoprefixer": {
            "overrideBrowserslist": [
                // "ie >= 8", // 兼容IE7以上浏览器
                // "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
                // "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
                // "opera >= 11.5" // 兼容欧朋版本号大于11.5浏览器,
                "chrome  >= 36",
            ]
        }
    }
};
```