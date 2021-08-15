# 75 vue-MintUI

坑太多，不推荐使用！！！



## 01 重点

使用方式与篇74 vue-ElementUI一样，优化也一样。

**但有几点不同需注意：**具体请看下面两个注意点

```js
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import { Button, Switch } from 'mint-ui'
// 注意点: 在MintUI中哪怕是按需引入也必须导入CSS文件
import 'mint-ui/lib/style.css'
// 注意点: MintUI和ElementUI的第一个不同, 就是在MintUI中需要通过Vue.component来告诉Vue我们需要使用哪个组件
// Vue.use(Button)
// Vue.use(Switch)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)
```



## 02 无关说明

```html
<!--
1.什么是MintUI?
MintUI是饿了么前端团队推出的一款基于Vue的移动端UI框架
大白话: 和Bootstrap一样对原生的HTML标签进行了封装, 进行了美化, 让我们能够专注于业务逻辑而不是UI界面

2.MintUI使用
http://mint-ui.github.io/#!/zh-cn
-->
```