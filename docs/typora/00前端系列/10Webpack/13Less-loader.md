# 13 Less-loader

## 01 踩坑

### 1.1 配置踩坑

在webpack官网配置这个Less会报错，必须复制`标题02 正确配置里的东西`。

```js
{
        test: /\.less$/i,
        loader: [ // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
```

### 1.2 结果踩坑

遇到20/100px不能转化为0.2px是正常的（Less4.0版本后和Sass中的运算必须加括号）





## 02 正确配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

## 03 介绍

```html
<!--
1.less-loader
自动将less转换为CSS

2.less-loader使用:
2.0安装less
npm install --save-dev less
2.1安装less-loader
npm install --save-dev less-loader
2.2配置less-loader
{
    test: /\.less$/,
    use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "less-loader"
    }]
}

注意点:
因为loader是从右至左从下至上,所以必须先由less-loader处理往后才能交给其他loader处理
-->
```