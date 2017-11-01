function Point(x,y){
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function(){
	return "("+this.x +','+ this.y + ")";
}

var p = new Point(1,2);


console.log(p.toString());


// 定义一个类 (实质是ES5 的语法糖)
class Point2{
	constructor(x,y){ // 类似于ES5构造函数
		this.x = x;
		this.y = y; 
	}  // 后面不需要加逗号
	toString(){ 
		console.log(this);
		return "("+this.x +','+ this.y + ")";
	}
}

var p = new Point2(2,3);
console.log(p.toString());

//类内部定义的方法，都是不可枚举的，而ES5 定义的方法是可枚举的
console.log("Object.keys",Object.keys(Point2.prototype));
console.log("getOwnPropertyNames",Object.getOwnPropertyNames(Point2.prototype));


class Bar{
	constructor(x,y){
		this.x = x; 
		this.y = y;
	}
	doStuff(){
		console.log('stuff' , this);
	}
}

var bar = new Bar();
bar.doStuff();


let methodName = {"a":3}; 
let methodName2 = {"b":4};  // 用对象作为方法名称时，只会生成[object Object]
let methodName3 = "getArea";  // 类的方法名，可以从表达式得到
class Square{
	constructor(){
	}

	[methodName](){

	}
	[methodName2](){

	}
	[methodName3](){

	}
}

console.log(Square.prototype);
