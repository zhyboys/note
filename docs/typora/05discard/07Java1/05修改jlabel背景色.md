---
title: 修改jlabel背景色
---

```
JLabel name=new JLabel();
name.setBackground(Color.red);
```
奇怪，为什么标签没有变成红色？

哼。天真！

透明的标签再怎么调色，还是透明的

```
score.setOpaque(true);//加上这一句吧
```