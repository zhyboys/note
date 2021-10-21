# 08 elementUI时间

## 1 限制选择范围

>  官方文档中使用picker-options属性来限制可选择的日期，这里举例子稍做补充。

解决源地址：https://www.cnblogs.com/xjcjcsy/p/7977966.html

例子：限制只能选择今天之前的日期。

```html
<el-date-picker
       v-model="value1"
       type="date"
       placeholder="选择日期"
       :picker-options="pickerOptions0">
</el-date-picker>
```

```js
data (){
   return {
       pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6
          }
        },  
   }     
}  
```



## 2 设置value-format后报错

设置`value-format="yyyy-MM-dd"`后能输出指定格式，但是报以下错误

```
"TypeError: dateObject.getTime is not a function"
```

解决地址：https://www.yht7.com/news/36011

例子：去掉表单验证规则rules中的`type: 'date'`。

```js
{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
```

