# 32 bable转换ES678语法下

```html
<!--
1.直接在文件中导入polyfill模块的弊端
直接导入polyfill的方式只适用于一般项目开发, 但是如果是在编写一些第三方模块的时候这种方式会出现一些问题
因为这种方式是通过全局变量的方式来注入代码, 会污染全局环境. 所以我们再来看一下polyfill的第二种配置方式

2.第二种配置方式
2.1安装相关模块
npm install --save @babel/polyfill
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime

2.2配置相关信息
plugins: [
    ["@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": 2,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }
    ]
]

注意点:
"corejs": false, 还是全局注入,还是会污染全局环境
"corejs": 2, 则不会污染全局环境
npm install --save @babel/runtime-corejs2
-->

<!--
// 转换前
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
// "corejs": false转换后
require("core-js/modules/es6.promise");  // 全局引入

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

// "corejs": 2转换后
var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");
var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise")); // 独立变量, 局部引入
function sleep(ms) {
  return new _promise.default(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
-->
```

