# 04 数据双向传递v-model

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>04-Vue数据双向传递</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.Vue调试工具安装
如果你能打开谷歌插件商店, 直接在线安装即可
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN

由于国内无法打开谷歌国外插件商店, 所以可以离线安装
https://www.chromefor.com/vue-js-devtools_v5-3-0/

2.安装步骤:
2.1下载离线安装包
2.2打开谷歌插件界面
2.3直接将插件拖入
2.4报错 程序包无效: "CRX_HEADER_INVALID"
   可以将安装包修改为rar后缀, 解压之后再安装
2.5重启浏览器
-->
<!--
2.数据双向绑定
默认情况下Vue只支持数据单向传递 M -> VM -> V
但是由于Vue是基于MVVM设计模式的, 所以也提供了双向传递的能力
在<input>、<textarea> 及 <select> 元素上可以用 v-model 指令创建双向数据绑定

注意点: v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值
而总是将 Vue 实例的数据作为数据来源
-->

<!--这里就是MVVM中的View-->
<div id="app">
    <p>{{ name }}</p>
    <input type="text" v-model="msg">
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            name: "李南江",
            msg: "知播渔"
        }
    });
</script>
</body>
</html>
```