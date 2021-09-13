# 23 预解析练习

预解析从外到内

1. 下面程序的执行结果是什么？

   ```javascript
   var num = 123;
   fun();
   function fun(){
   	console.log(num);
   	var num = 666;
   }
   //预解析之后
   var num;
   function fun(){
   	var num;
   	console.log(num);
   	num = 666;
   }
   num = 123;
   fun();
   ```

   

2. 下面程序的执行结果是什么？

   ```javascript
   var a = 666;
   test();
   function test(){
   	var b = 777;
   	console.log(a);
   	console.log(b);
   	console.log(c);
   	var a = 888;
   	let c = 999;
   }
   //预解析之后
   var a;
   function test(){
   	var b;
   	var a;
   	b = 777;
   	console.log(a);//undefined
   	console.log(b);//777
   	console.log(c);//报错
   	a = 888;
   	let c = 999;
   }
   a = 666;
   test();
   ```

3. 下列程序的执行结果是什么？

   ```javascript
   console.log(value);//输出函数的定义
   var value = 123;
   function value(){
   	console.log(222);
   }
   console.log(value);//输出123
   
   //==预解析后(老师讲的)
   function value(){
   	console.log(222);
   }
   console.log(value);
   var value;
   value = 123;
   console.log(value);
   
   //==我的理解
   var value;
   function value(){
   	console.log(222);
   }
   console.log(value);//输出函数的定义
   value = 123;
   console.log(value);//输出123
   ```

   

4. 下列程序执行的结果是什么？（这道题了解，面试可能用得上，但写代码一定不能用，不要钻牛角尖）

   ```javascript
   if(true){
   	function demo(){
   		console.log(111);
   	}
   }else{
   	function demo(){
   		console.log(222);
   	}
   }
   demo();
   ```

   在ES6之前没有块级作用域，并且没有讲这两个函数定义到其它的函数中。所以这两个函数应该属于全局作用域。

   **在高级浏览器中，不会对{}中定义的函数进行提升；只有在低级浏览器中，才会按照正常的方式解析**

   ```javascript
   //高级浏览器运行结果
   if(true){
   	function demo(){
   		console.log(111);
   	}
   }else{
   	function demo(){
   		console.log(222);
   	}
   }
   demo();//111
   
   //===
   if(false){
   	function demo(){
   		console.log(111);
   	}
   }else{
   	function demo(){
   		console.log(222);
   	}
   }
   demo();//222
   ```

   ```javascript
   //低级浏览器运行结果与true和false无关，都是222
   //原因是进行了预解析
   function demo(){
   	console.log(111);
   }
   function demo(){
   	console.log(222);
   }
   if(true/fale){}else{};
   demo();
   //显然预解析后，输出222的demo函数覆盖了第一个demo函数。
   ```




个人理解：

之前不理解为什么说预解析函数优先级比变量优先级高，现在理解了，是因为理解不同。我理解的是一定先提升var a;所以变量优先。但是人家理解的是函数整体先被预解析出来，函数预解析出来之后才能解析a = 7;，所以函数优先。显然对知识的掌握都差不多，只不过理解有偏差。函数优先解析才是正道。

```javascript
    console.log(a);//function
    var a = 1;
    function a() {
        alert('a')
    }
    console.log(a);//1
```



