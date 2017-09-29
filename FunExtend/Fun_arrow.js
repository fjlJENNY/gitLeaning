// 描述箭头函数

var f = v => v;
console.log(f(2));


// ()包裹的是一个表达式
var sum = (num1 , num2) => (num1 + num2) // 箭头函数完整版  

console.log(sum(1,2));


// 箭头函数简化回调函数

[1,2,3].map(x=>console.log(x*x));

// arrow function  4 点注意
// (1) 函数体内的 this 对象,就是定义时所在的对象，而不是使用时所在的对象
var id = 21;
function foo(){
	setTimeout(()=>{
		console.log("id",this.id);
	},200);
}

foo.call({id:42});
// (2) 不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。

// function Timer() {
// 	this.s1 = 0;
// 	this.s2 = 0;
// 	// 箭头函数
// 	setInterval(() => this.s1++, 1000);
// 	// 普通函数
// 	setInterval(function() {
// 		this.s2++;
// 	}, 1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100); // 3
// setTimeout(() => console.log('s2: ', timer.s2), 3100); //0


// 很多时候箭头函数用于回调函数，箭头函数可以使 this 固定化
var handler = {
	id: '123456',
	init: function() {
		document.addEventListener('click',
			event => this.doSomething(event.type), false);
	},
	doSomething: function(type) {
		console.log('Handling ' + type + ' for ' + this.id);
	}
};

// this 指向的固定化，是因为箭头函数没有自己的 this , 引用外层的 this
// 同此：除了this, arguments、super、new.target 也是不存在的 ，指向外层函数的对应变量。


(function(){
	return [
		(()=> this.x).bind({x:"inner"})() // x 的值为 outer
	]
}).call({x:"outer"});

// 【nesting arrow】
// function insert(value){
// 	return {info:function(array){
// 		return {after:function(afterValue){
// 			array.splice(array.indexOf(afterValue)+1,0,value);
// 			return array;
// 		}}
// 	}}
// }

// let insert = (value) => {
// 	return {info:(array)=>{
// 		return {after:(afterValue)=>{
// 			array.splice(array.indexOf(afterValue)+1,0,value);
// 			return array;
// 		}}
// 	}}
// }
let insert = (value) => ({info:(array)=>({after:(afterValue)=>{
	array.splice(array.indexOf(afterValue)+1,0,value);
	return array;
}})});
console.log(insert(2).info([1,3,4]).after(1));


const plus2 = a => a + 1;
const mult2 = a => a*a ;

console.log(plus2(mult2(5)));

var plus1 = function(a){
	return a + 1;
}

var mult1 = function(a){
	return a*a ;
}


console.log(mult1(plus1(5)));
