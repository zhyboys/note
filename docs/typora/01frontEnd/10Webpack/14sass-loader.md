# 14 sass-loader

需要安装`node-sass`和`sass-loader`

```bash
npm install --save-dev sass-loader
npm install --save-dev sass-loader
```



```html
<!--
1.scss-loader
自动将scss转换为CSS

2.scss-loader使用:
2.0安装scss
npm install --save-dev node-sass
2.1安装less-loader
npm install --save-dev sass-loader
2.2配置less-loader
{
  test: /\.scss$/,
  use: [{
      loader: "style-loader" // 将 JS 字符串生成为 style 节点
  }, {
      loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
  }, {
      loader: "sass-loader" // 将 Sass 编译成 CSS
  }]
}
// use: ['style-loader','css-loader', 'sass-loader'] 
注意点:
因为loader是从右至左从下至上,所以必须先由sass-loader处理往后才能交给其他loader处理
-->
```

```js
// 打包SCSS规则
{
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // 将 JS 字符串生成为 style 节点
    }, {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
    }, {
        loader: "sass-loader" // 将 Sass 编译成 CSS
    }]
}
```