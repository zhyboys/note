# 04 Node环境与浏览器环境

```
1.Node环境和浏览器环境区别
NodeJS环境和浏览器环境一样都是一个JS的运行环境, 都可以执行JS代码.
但是由于宿主不同所以特点也有所不同

1.1内置对象不同
- 浏览器环境中提供了window全局对象
- NodeJS环境中的全局对象不叫window, 叫global

1.2this默认指向不同
- 浏览器环境中全局this默认指向window
- NodeJS环境中全局this默认指向空对象{}

1.3API不同
- 浏览器环境中提供了操作节点的DOM相关API和操作浏览器的BOM相关API
- NodeJS环境中没有HTML节点也没有浏览器, 所以NodeJS环境中没有DOM/BOM
```