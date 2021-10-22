# 09 CSS显示省略号

> 源文：[css 文本两行显示，超出省略号表示 - 小碎步 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiaosuibu/p/8196067.html)

**重点：text-overflow: ellipsis;只对display：inline；起作用**

```css
b{
   display:inline; //正确
   display：inline-block //错误，b标签里的字超出不能显示省略号（...）
}
```



## 1 一行

```css
.box{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
}
```



## 2 两行

```css
.box{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
```



## 3 多行

```css
.box{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
```

> 适用范围：因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；

注：

1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
2. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

实现方法：

```css
p{
	position: relative; 
	line-height: 20px; 
	max-height: 40px;
	overflow: hidden;
}
p::after{
	content: "..."; 
	position: absolute; 
	bottom: 0; 
	right: 0; 
	padding-left: 40px;
	background: -webkit-linear-gradient(left, transparent, #fff 55%);
	background: -o-linear-gradient(right, transparent, #fff 55%);
	background: -moz-linear-gradient(right, transparent, #fff 55%);
	background: linear-gradient(to right, transparent, #fff 55%);
}
```

>  适用范围：该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合js优化该方法。

注：

1. 1. 将height设置为line-height的整数倍，防止超出的文字露出。
   2. 给p::after添加渐变背景可避免文字只显示一半。
   3. 由于ie6-7不显示content内容，所以要添加标签兼容ie6-7（如：`<span>…<span/>`）；兼容ie8需要将::after替换成:after。

