// Array.from  将 array-like object 和 可遍历（iterable） 的对象
let arrayLike = {
	"0":"a",
	"1":"b",
	"2":"c",
	"length":3
}
// 这种 array-like object 数组 (包括 0,1,2,3 length属性)  自定义
console.log(Array.from(arrayLike));


//NodeList array-like object 数组
let ps = document.querySelectorAll("p");
ps.forEach(function(p){
	console.log(p);
});

console.log(Array.prototype.slice.apply(ps));
// console.log(Array.from(ps));


// arguments 对象
function foo(){
	var args = Array.from(arguments);
}

// 3 种 类数组格式对象
// 1. 自定义类型 (对象上必须包含length 属性)
// 2. NodeList
// 3. arguments

console.log(Array.from({length:3,"foo":"tom","23":"ss","1":"dd"}));


var fruits = ["Apple","Orange"];

//let last = fruits.pop(); // 返回 删除的元素
//let first = fruits.shift(); // 返回 删除的元素
//let first = fruits.unshift("Balala","Spact"); // 返回 fruits 添加后的值
//let last = fruits.push("Spact"); // 返回 fruits 添加后的值

//console.log(last);

console.log(fruits.indexOf("Apple")); // arr.indexOf(searchElement[, fromIndex = 0])


// slice  返回一个从开始到结束 数据 的一部分浅拷贝

var aa = ["zero","one","two","three"];
//var sliced = aa.slice(-2,1);
//console.log(sliced);

let names = Array.prototype.map.call(ps,s=>{return s.textContent});
console.log(names);
