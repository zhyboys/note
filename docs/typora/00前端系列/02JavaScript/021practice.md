# 21 作用域练习

1. 找出哪些是全局变量，那些是局部变量

   ```javascript
   var num1 = 123;//全局变量
   function test(){
   	var num2 = 456;//局部变量
   }
   {
   	var num3 = 789;//全局变量
   }
   function test(){
   	num4 = 666;//全局变量
   }
   ```

   

2. 找出哪些是全局变量，那些是局部变量

   ```javascript
   let num1 = 123;//全局变量
   function test(){
   	let num2 = 456;//局部变量
   }
   {
   	let num3 = 789;//局部变量
   }
   function test(){
   	num4 = 666;//全局变量
   }
   ```

3. 下列代码运行是否会报错

   ```javascript
   var num = 123;
   var num = 456;//不会报错
   //=========================
   {
   	var num = 123;
   	{
   		var num = 456;
   	}
   }//不会报错
   //=========================
   console.log(num);//不会报错
   var num = 123;
   ```

4. 下列代码运行是否会报错

   ```javascript
   let num = 123;
   let num = 456;//会报错
   //=========================
   {
   	let num = 123;
   	{
   		let num = 456;
   	}
   }//不会报错
   //=========================
   console.log(num);//会报错
   let num = 123;
   ```

5. 下列代码运行是否会报错

   ```javascript
   let num = 123;
   var num = 456;//会报错
   ```

   注意点：只要出现了let，在相同作用域内就不能出现同名变量。

   ```javascript
   var num = 456;
   let num = 123;//会报错
   ```

   

