// rest 参数 是arguments 的互通
function add(){
	let sum = 0;
	for(let val of arguments){
		sum += val;
	}
	return sum;
}

console.log(add(2,3,5));

function push(arr,...args){
	console.log(args)
	args.forEach(function(item){
		arr.push(item);
		console.log(item);
	});
}

var arr = [];
push(arr,[1,2,3])


// 【扩展运算符】 ...  将一个数组转化成用逗号分隔的参数序列
var arrextend = [];
arrextend.push(...[1,2,3]);
console.log(arrextend);


// 扩展运算符 可以 替代apply方法  (用于将数组转换成 参数序列)

console.log(Math.max.apply(null,[13,4,77]));


// 扩展运算符的应用
//1.合并数组
var more = [1,2];
[1,2].concat(more);
[1,2,...more];
//2. 与解构结合

var [a,...rest] = more;
console.log(a,rest);

//3. 函数的返回值
function ss(){
	return ["one","two","three"];
}

console.log(...ss());

// 4. 字符串
console.log([..."hello"],...["hello"]);

// 5.实现iterator 接口
// 比如NodeList接口
var nodeList = document.querySelectorAll("p");
console.log(...nodeList);
// 类数组对象未实现 iterator 接口,无法转换成真正的数组
