# 83 安装fastclick

解决100-300ms点击事件延迟问题。

```sh
npm install -D fastclick
```



在main.js中使用

```js
import fastclick from 'fastclick'

fastclick.attach(document.body)
```

