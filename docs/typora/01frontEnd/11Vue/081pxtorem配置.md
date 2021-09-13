# 81 pxtorem配置

03 配置postcss---px-->rem

## 01 下载

```sh
npm i -D postcss-pxtorem
```



## 02 配置

新建postcss.config.js配置，不用管vue.config.js

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 根元素字体大小
      // propList: ['width', 'height']
      propList: ['*']
    }
  }
}

```

**报错**

```
Syntax Error: Error: PostCSS plugin postcss-pxtorem requires PostCSS 8.
```

**解决：降低版本**

```sh
cnpm i postcss-pxtorem@5.1.1
```