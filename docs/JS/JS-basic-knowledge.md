# 基础
## 预编译
::: tip 步骤
1. 创建AO对象。
2. 将变量和形参作为AO对象的属性名，值为undefined。
3. 将实参和形参统一。
4. 在函数体内找函数声明，值赋予函数体。
:::
```js
function fn(a,b) {
	console.log(a);
	console.log(b);
	var b = 234;
	console.log(b);
	a = 123;
	console.log(a);
	function a() {};
	var a;
	b = 345;
	var b = function() {};
	console.log(a);
	console.log(b);
}
fn(1); // fun a; undefined; 234; 123; 123; fun;
```