// 函数的默认参数
// function log(x,y){
// 	y = y || "world";
// 	console.log(x,y);
// }

// 函数默认参数 是 判断参数typeof === "undefined"
function log(x, y = "World!"){
	console.log(x,y);
	//let y = "dd"; // duplicate declaration
}

log("Hello");
log("Hello","China");
log("Hello",""); 


let x = 99;
function foo(p = x+1){
	console.log(p);
}
foo();
x = 100;
foo();


// 函数默认参 与解构
function foo2 ({x,y=5}){
	console.log(x,y);
}

foo2({x:1});
foo2({x:1,y:1});
foo2({});
// foo2();
foo2(234);


// 双重结构赋值 
// 1. 函数调用时 无值时 （函数参数默认值） {method = "GET"}  为 {}  ,2. method 对象解构后 为 "GET"
function fetch(url,{method = "GET"} = {}){
	console.log(method);
}

fetch();

// m1 和 m2 diff
function m1({x = 0,y = 0 } = {}){
	console.log([x,y]);
}

function m2({x,y} = {x:0,y:0}){
	console.log([x,y]);
}

function m3({x,y}){
	console.log([x,y]);
}

m1(23);
m2(23);
m3(23);


// 【函数的length】  length 属性的含义是：该函数预期传入参数个数  注意2点
//如果设置了默认值参数不是尾参数，length 属性不再计入后面的参数
//(function(a,b=2,c){}).length    // 1
// 指函数预期传入参数的个数，如果参数指定默认值 以后，预期传入参数个数不包括这个参数了
//(function(...args){}).length    // 0  


// 【函数的作用域】 函数进行声明初始化时，参数会形成一个单独的作用域
//var xx = 1;
function f(y = xx){
	let xx = 2;
	console.log(y);
}    
f();


