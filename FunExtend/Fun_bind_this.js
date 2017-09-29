//::  绑定this  foo::bar    === bar.bind(foo)          ::obj.foo  ===  obj.foo.bind(obj);
var x = 1;
function bar(){
	console.log(this)
	console.log(this.x);
}

function foo(){
	this.x = 1;
}

(bar.bind(foo))();


// 尾调用优化  Tail Call
function f(x){
	return g(x)
}

// 以下三种情况都不是尾调用 （尾调用不一定出现在函数尾部，只要是最后一步操作即可）
// 情况一
// function f(x) {
// 	let y = g(x);
// 	return y;
// }
// // 情况二
// function f(x) {
// 	return g(x) + 1; // 此情况 是调用 g 后 还有 赋值操作
// }
// // 情况三
// function f(x) {
// 	g(x);  // 此情况为   return false;
// }


//如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消
//失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）