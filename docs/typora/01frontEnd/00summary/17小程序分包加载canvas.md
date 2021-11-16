# 17 小程序分包加载canvas

工作时，遇到了主包放canvas就会主包体积变大的问题。canvas太大了。毕竟主包最大2M

单个分包最大2M但最有分包加起来最大貌似能为8M。

分包中加载canvas，别的分包是不能使用的，只有该分包能使用，主包也不能使用。

主包中加载canvas，所有包都能使用。





这次放在了home分包中，直接将canvas文件夹放在pages下的home文件夹中即可，home文件夹本来只放页面的，但也可放canvas，使用时直接引用即可

```js
import * as echarts from './ec-canvas/echarts'
```

相关文档：

https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html

