# 基础
## 预编译
::: tip 步骤
1. 创建AO对象。
2. 将变量和形参作为AO对象的属性名，值为undefined。
3. 将实参和形参统一。
4. 将函数声明添加到AO对象，如果与变量重名就覆盖。
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

## 立即执行函数(IIFE)
1. 执行完后立即被销毁，外部不能访问立即执行函数中的变量。
2. 将 IIFE 分配给一个变量，不是存储 IIFE 本身，而是存储 IIFE 执行后返回的结果。
```js{2,3}
// 两种写法，w3c推荐第一种
(function(){/* code */}());
(function(){/* code */})();

var result = (function () { 
	var name = "Barry"; 
	return name; 
})(); 
// IIFE 执行后返回的结果：
result; // "Barry"
```
3. 只有表达式才能被执行符号`()`执行。
```js
function foo(){ /* code */ }();//SyntaxError: Unexpected token

//函数没有执行，因为：
function foo(){/* code */}(1)

//它等同于如下，一个函数声明跟着一个完全没有关系的表达式:
function foo(){/* code */}
(1);

//可以执行，执行完之后函数名foo被释放。
var foo = function() {
	console.log('foo')
}();
foo(); //Uncaught TypeError: foo is not a function

// 可以通过一元操作符将函数声明变成表达式。
+function foo(){ /* code */ }();
-function foo(){ /* code */ }();
~function foo(){ /* code */ }();
!function foo(){ /* code */ }();
```
4. 保存闭包状态
```js
function fn() {
	var arr = [];
	for(var i = 0; i < 10; i++) {
		// 循环的时候arr[i]中的i随循环中的i改变，但是每次循环只是相当于给arr每项赋值一个函数
		arr[i] = function() {
			//function中的i并不会改变，当最后执行时，i已经变成了10。
			console.log(i)
		}
	}
	return arr
}
var t = fn()
t[0](); //10
t[1](); //10
t[2](); //10


// 通过ES6中的let声明和IIFE可以保存住i的状态
function fn() {
	var arr = [];
	// 或者用let声明i
	for(var i = 0; i < 10; i++) {
		(function(j){
			// 每次赋值时直接调用函数，获取j的值，而j的值是每次循环传进来的i
			arr[j] = function() {
				console.log(j)
			}
		})(i)
	}
	return arr
}
var t = fn()
t[0](); //0
t[1](); //1
t[2](); //2
```

## 闭包
::: tip 产生条件
当内部函数被保存到外部时，会生成闭包。闭包会导致原有作用域链不释放，造成内存泄漏。
:::
- 作用: 
	1. 实现公有变量。
	2. 做缓存。
  ```js
	function add() {
		var num = 0; // 公有变量，被缓存。
		function demo() {
			num++;
			console.log(num);
		}
		return demo;
	}
	var counter = add();
	counter(); // 1
	counter(); // 2
	counter(); // 3
	```
  3. 实现封装，属性私有化。
  4. 模块化开发，防止污染全局变量。