//[!a] 基础用法
{
	//let a = 3;
	const b = 5;
}

// [为什么let 在 for 上有效]
// console.log(a);
// console.log(b);

var a = [];
for(let j = 0 ; j<3;j++){
	//let j = "tom";
	//console.log(j);
	a[j] = function(){
		console.log(j);
	}
}

a[2]();

//[!b] 不存在变量提升 ? 浏览器支持?
console.log(ff);
let ff = "23";


// [!c] 暂时性死区 ? 浏览器支持?  
//暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的
//那一行代码出现，才可以获取和使用该变量
var temp = 123;
if(true){
	temp = "1234";
	let temp;
	console.log('temp',temp);
}

// [!d] 不允许重复声明 Duplicate declaration 
function func(args){
	//let args = "123";
	console.log(args);
}

func("demo")

