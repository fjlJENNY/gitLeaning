// 遍历 方法
//  keys : 返回键名的遍历器
// values : 返回键值的遍历器
// entries : 返回键值对的遍历器
// forEach : 使用回调函数遍历每个成员

var set = new Set(['red','green','blue']);
 
for(let item of set.entries()){
	console.log(' some entry ,,, entries ',item ,set,set.entries(),set.values(),set.entries() === set.values());
}

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);

set.forEach((value,key)=> console.log(value+','+key));


// set -> 数组后 -> map()
var set = new Set([1,2,3]);
console.log(new Set([...set].map((value)=>value*2)));

var set = new Set([1,2,3,4,5]);
console.log(new Set([...set].filter(value => value%2==0)));


// 2 set 实现并集 ， 交集 ， 差集
var set1 = new Set([1,2,3,4]);
var set2 = new Set([3,4,5,6]);

// 并集
console.log(new Set([...set1,...set2]));

// 交集
console.log(new Set([...set1].filter(value=>set2.has(value))));

// 差集 set1 与 set2 的差集
console.log(new Set([...set1].filter(value=>!set2.has(value))));