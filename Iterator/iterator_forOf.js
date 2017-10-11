//NodeList 默认部署了 Symbol.iterator 接口
let ps = document.querySelectorAll("p");

for(var i of ps){
	console.log(i);
}


// 数组的 for...in 获取键名 , for ... of 获取键值
var arr = ["a","b","c","d","e"];
for(let a of arr){
	console.log(a);
}


// 注意一点：for...of循环调用遍历器接口，数组的遍历器只返回具有数字索引的属性。
var arr = [3,5,7];
arr.foo = "Hello" ; 
for(let i in arr){
	console.log(i); // 1,2,3,foo
}

for(let j of arr){
	console.log(j); // 3,5,7
}