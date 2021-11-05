# 16 postcss之变px为rem

```bash
npm i -D postcss-loader

npm install postcss-pxtorem -D
```



## 01 安装

```html
<!--
3.使用PostCSS自动将px转换成rem
https://www.npmjs.com/package/postcss-pxtorem

3.1安装postcss-pxtorem
npm install postcss-pxtorem -D
3.2在配置文件中配置postcss-pxtorem
"postcss-pxtorem": {
            rootValue: 100, // 根元素字体大小
            // propList: ['*'] // 可以从px更改到rem的属性
            propList: ["height"]
        }

rootValue (Number) root 元素的字体大小。
unitPrecision (Number) 允许REM单位增长到的十进制数。
propList ( array ) 可以从px更改到rem的属性。
    值需要精确匹配。
    使用通配符 * 启用所有属性。 示例：['*']
    在单词的开头或者结尾使用 *。 ( ['*position*'] 将匹配 background-position-y )
    使用 与属性不匹配。! 示例：['*','letter-spacing']!
    将"非"前缀与其他前缀合并。 示例：['*','font*']!
selectorBlackList ( array ) 要忽略和离开的选择器。
    如果值为字符串，它将检查选择器是否包含字符串。
    ['body'] 将匹配 .body-class
    如果值为 regexp，它将检查选择器是否匹配正则表达式。
    [/^body$/] 将匹配 body，但不匹配 .body
replace (Boolean) 替代包含rems的规则，而不是添加回退。
mediaQuery (Boolean) 允许在媒体查询中转换 px。
minPixelValue (Number) 设置要替换的最小像素值。

突然感觉淡淡不忧伤了, 过去麻烦的事webpack都帮我们做完了
-->
```

## 02 配置postcss.config.js

```js
module.exports = {
    plugins: {
         // 自动加前缀
        "autoprefixer": {
            "overrideBrowserslist": [
                "ie >= 8", // 兼容IE7以上浏览器
                "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
                "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
                "opera >= 11.5" // 兼容欧朋版本号大于11.5浏览器,
            ]
        },
        "postcss-pxtorem": {
            rootValue: 100, // 根元素字体大小(其实是除数例如20/100rem中的100)
            // propList: ['*'] // 可以从px更改到rem的属性
            propList: ["height"]
        }
    }
};
```