# 41 CSS-Tree-Shaking

```html
<!--
1.CSS模块Tree-Shaking
不光JS模块可以进行Tree-Shaking, CSS模块也可以进行Tree-Shaking

2.如何开启CSS模块Tree-Shaking
https://github.com/webpack-contrib/purifycss-webpack
2.1安装相关插件
npm i -D purifycss-webpack purify-css glob-all
2.2配置插件
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");

new PurifyCSS({
    paths: glob.sync([
        // 要做CSS Tree Shaking的路径文件
        path.resolve(__dirname, "./*.html"),
        path.resolve(__dirname, "./src/js/*.js"),
    ])
}),
-->
```

