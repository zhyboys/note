# 17 css-loader模块化

让CSS类名样式只能在导入的模块用

```html
<!--
1.默认情况下通过import "./xxx.css"导入的样式是全局样式
也就是只要被导入, 在其它文件中也可以使用
如果想要导入的CSS文件只在导入的文件中有效, 那么就需要开启CSS模块化
{
    loader: "css-loader",
    options: {
        modules: true // 开启CSS模块化
    }
}
然后在导入的地方通过 import xxx from "./xxx.css"导入
然后在使用的地方通过 xxx.className方式使用即可
-->
```

```js
{
	loader: "css-loader",
	options: {
		modules: true
	}
},
```

使用案例

```js
import font from "../css/font.css";
oHeader.setAttribute("class",font.fontt); //fontt是css中的类名
```