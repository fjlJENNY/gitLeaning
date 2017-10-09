let s = Symbol();
console.log(typeof s);  //'symbol'

var s1 = Symbol("foo");
var s2 = Symbol("bar");
var s3 = Symbol();
var s4 = Symbol("foo");
console.log(s1,s2,s3,s4);
console.log(s1 === s4);
console.log(s2.toString()); // 转换成 string
//[1.不可运算 2.可显示转换成string 3.Symbol可以转换成布尔值]
console.log(Boolean(s1));
console.log(!s4);


//【Symbol 值作为属性名】
var mySymbol = Symbol("mySymbol");
var a = {};
// 第一种写法
// a[mySymbol] = "hello";
// console.log(a,a[mySymbol]);
// 第二种写法
// a = {
// 	[mySymbol]:"Hello"
// }

// console.log(a[mySymbol]);
// ！！！注意：Symbol 作为对象属性名称时，不能使用点运算符
a.mySymbol = "hello";
console.log(a["mySymbol"]); // 此 mySymbol 不是变量

var b = {
	[mySymbol](args){},
	c(){}
}

console.log(b); // 简写 b

const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplement(color){
	switch(color){
		case COLOR_RED:
			break;
		case COLOR_GREEN:
			break;
		default:
			break;
	}
}

//【switch上的 + 魔术字符串 + 强耦合（代码多次出现，与代码形成强耦合的某一个具体的字符串或者数组）】


