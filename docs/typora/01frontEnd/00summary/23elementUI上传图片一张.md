# 23 elementUI上传图片一张

设置限制上传图片一张后，上传一张图片，后面仍然有 `+` 可以点击，只是点了没反应，大多数情况下，我们希望`+`消失，以表示不能上传。



这需要我们额外用类名控制，当上传一张后，控制类名有无来达到显隐目的。

```css
.disabled /deep/ .el-upload--picture-card {
  display: none !important;
}
```

