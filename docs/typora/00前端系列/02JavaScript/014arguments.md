# 14 函数arguments

1. 因为`console.log()`也是通过`()`来调用的，所以log也是一个函数

2. log函数的特点

   1. 无论传入多少参数都能接收

      ```
      console.log(1);//1
      console.log(1, 2);//1 2
      ```

3. 为什么log函数可以接收多个参数

   内部实现原理用到了arguments。

4. arguments的作用：

   保存所有传递给函数的实参。

   ```javascript
   function getSum(){
   	//每个函数中都有一个叫做arguments的东东
   	//arguments其实是一个伪数组
   	console.log(arguments);
   	console.log(arguments[0]);
   	console.log(arguments[1]);
   }
   
   getSum(1,2,3);
   ```

   