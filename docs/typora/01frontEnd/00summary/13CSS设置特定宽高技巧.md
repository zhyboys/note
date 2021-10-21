# 13 CSS设置特定宽高技巧

```css
  .scroll-view {
    height: calc(100vh - 88rpx);
  }
```

calc是CSS自带属性，rpx只能在小程序中使用。

除了使用定位同时设置top，bottom外，这不失为第二种好方法。