# 98 vconsole

手机端的调试工具，移动端打开控制台，调试工具。

**搜索：**搜索npmjs-----搜索vconsole

```npm
npm install vconsole
```

```js
import VConsole from 'vconsole';

const vConsole = new VConsole();
// or init with options
// const vConsole = new VConsole({ maxLogNumber: 1000 });

// call `console` methods as usual
// console.log('Hello world');

// remove it when you finish debugging
// vConsole.destroy();

Vue.use(vconsole)
```

