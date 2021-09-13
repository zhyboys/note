# 09 导入其它SASS文件

## 01 叙述

> 重点语句：而LESS和SASS中的@import是直接将导入的文件拷贝到当前文件中生成一份新CSS。

```
/*
1..scss文件中导入其它.scss文件
和LESS一样SASS文件中也支持导入其它SASS文件

其实原生的CSS也支持通过@import导入其它的CSS文件, 只不过不常用

不常用的原因在于原生的@import导入其它的CSS文件,
只有执行到@import时浏觅器才会去下载对应 css文件，这导致请求次数变多,页面加载起来特别慢

而LESS和SASS中的@import是直接将导入的文件拷贝到当前文件中生成一份CSS, 所以只会请求一次, 速度更快
*/
```



## 02 示例

> `@import "03";`

```scss
@import "03";

.box1{
  width: 300px;
  height: 300px;
  background: yellow;
  //使用导入的文件的混合
  @include center;
}
```