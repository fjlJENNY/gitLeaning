// ES6 规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不
// 能显式设定为严格模式，否则会报错
function doSomething(a , b = a){
 	'use strict';
}


// 报错
// const doSomething = function ({a, b}) {
// 'use strict';
// // code
// };
// // 报错
// const doSomething = (...a) => {
// 'use strict';
// // code
// };
// const obj = {
// // 报错
// doSomething({a, b}) {
// 	'use strict';
// 	// code
// 	}
// };
doSomething(1);

//ES6 规定函数内部的严格模式 原因  
// 严格模式下 参数value的默认值是八进制 070,严格模式下不能使用 八进制
// function doSomething(value = 070) {
// 	'use strict';
// 	return value;
// }


function a(){

}

console.log(a.name)

var f = function(){}

console.log(f.name)

// 第三种情况

console.log( (new Function()).name ) //anonymous 

// 第四种情况

console.log((function(){}).name)  // ""

// 第五种情况

console.log((function(){}).bind().name); // bound (边界)
function foo2(){}

console.log(foo2.bind().name) // bound foo2


