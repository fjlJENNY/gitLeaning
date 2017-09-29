// 直接写入变量和函数，作为对象的属性和方法
var foo = "baz";
var baz = {foo}; // === {foo:foo}  这种属性的简写
console.log(baz)
// 属性的简写
function f(x,y){
	return {x,y};
}

console.log(f(1,2));

// 方法的简写
var o = {
	method:function(){}
}

var o = {
	method(){
		return ss;
	}
}


// 需要注意的一点

var obj = {
	class(){}
};

// ===  总是 字符串形式  不会因为  关键字导致语法解析报错
// var obj = {
// 	"class":function(){}
// }


// 【属性名表达式】  可以使用 {表达式} 作为对象的属性名
let objT = {
	["a" + "bc"] : 123
}

// 表达式  可以作为定义方法名
let objS = {
	["h" + "ello"](){
		return "ss";
	}
}


console.log(objS["h"+"ello"]());


// 表达式注意的 2 点   

var fooo = "bar";
var barr = "abc";
//console.log({[fooo]});  //1.属性名表达式与简洁表示法，不能同时使用
// 2. 属性名表达式 是个对象的话，默认会将对象转成字符串[object Object]




