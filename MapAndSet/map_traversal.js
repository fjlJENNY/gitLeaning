// keys() ：返回键名的遍历器。
// values() ：返回键值的遍历器。
// entries() ：返回所有成员的遍历器。
// forEach() ：遍历Map的所有成员
let map = new Map([
	['F', 'no'],
	['T', 'yes'],
]);
for (let key of map.keys()) {
	console.log(key);
}
for(let value of map.values()){
	console.log(value);
}

for(let item of map.entries()){
	console.log(item);
	console.log(item[0]+','+item[1]);
}


// map结构 转换成 数组结构，

let map2 = new Map([
	[1,"one"],
	[2,"two"],
	[3,"three"]
]);

console.log([...map2.keys()]);
console.log([...map2.values()]);
// 转换成数组格式
console.log([...map2.entries()]);

// map 转换成数组  [...map]
// 特定格式的数组转化成map + new Map(array);

// 如果所有的Map的键都是字符串,它可以转成对象 ==> 只要遍历存取
// 对象转换为 Map  ==> 遍历map 存取


// map 转换成 JSON , Map的键名 都是 字符串  转换成对象json
// map 键名包含 对象，转换成 数组JSON
//使用JSON.stringify 转换成JSON ，JSON.parse 转换成 Map






