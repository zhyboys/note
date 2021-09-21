# 083 EggJs框架扩展下

## 1.给helper扩展

helper是工具类，跟utils一样，有了helper就可以不用创建自己的utils目录了。

同理创建`app/extend/helper.js`

```js
const crypto = require('crypto');
module.exports = {
    md5:(password) => {
        // 1.指定加密方式
        const md5 = crypto.createHash('md5')
        // 2.指定需要加密的内容和加密之后输出的格式
        const hash = md5.update(password) // 指定需要加密的内容
            .digest('hex'); // 指定加密之后输出的格式
        return hash;
    }
};
```

使用扩展

```js
console.log(this.ctx.helper.md5('abc123'));
```