# 18 clamp模板的使用

```html
<script id="cityes" type="text/html"><script>
```

```js
//city是id名，obj是数据对象
let html = template('cityes',obj);
//拿到oCity元素后向里面填充模板
oCity.innerHTML = oCity.innerHTML + html;
```