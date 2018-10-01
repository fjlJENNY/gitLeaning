
//[!a] 非块级作用域案例演示
var temp = "a";

function a(){
	console.log("temp",temp);
	if(false){
		let temp = "b";
	}
}
a();

// i 泄露成全局变量
var arr = new Array(5);
for(var i = 0 ;i<arr.length;i++){

}
console.log(i);


{
	{
		{
			{
				let insane = "Hello world!";
			}
		}
	}
}


//[!b] 可以在块级作用域下定义函数

//[!c] 可能面临死锁的问题(函数声明类似于var,会提升到全局作用域或函数作用域的头部)。
//函数声明还会提升所在块级作用域的头部
function ff(){console.log("I am outside");}

(function(){
	if(false){
		function ff(){console.log("I am inside");}
	}
	ff();
})()


// [!d] const 不能改变 , 1.2 声明必须初始化
const PI = 3.14;
// console.log();


//[!!a]  6种声明变量的方式 var function let const import class

//[!e] var function 声明的全局变量 依旧是顶层对象的属性  
//let const 和 class 命令声明的全局变量  不属于顶层对象的属性

var sd = "a"
console.log(window.sd);  // 编译的问题，不识别 window.sd
let sd2 = "b";
console.log(window.sd2);