// Set 是一个特殊的数组，内部的值唯一
const s = new Set();
[1,2,3,4,3,2,3].forEach(x => s.add(x));
for(let i of s){
	console.log(i);
}

console.log(s)



var set = new Set([1,2,3,4,5,2,3,3,4]);
console.log('set 的',set);

// set 内部判断两个值是否不同，使用的算法叫做 [Same-value equality] 主要判断NaN是否等于自身 【注意是NaN】
// 两个对象总是不相等
var set = new Set();
set.add({}); // set.size = 1;
set.add({}); // set.size = 2;
console.log('size ---- ',set.size);

set.add(NaN)
set.add(NaN)
console.log(' +++ size ---- ',set.size ,set);


// Set 实例属性
// Set.prototype.constructor 返回Set函数
// Set.prototype.size
// Set.add(value) | Set.delete(value) | Set.has(value) | Set.clear()
// 添加值 return (Set)| 删除值 (return boolean) | 判断值 (return boolean) | 清空值 (return void)



Array.from(set); // 将Set 转换成数组
[...set]  // 将 Set 转换成数组
new Set(set) // 将数组转化成Set

var items = new Set([1,2,3,2,3]);
var array = Array.from(items);
console.log(array);