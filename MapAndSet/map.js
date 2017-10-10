//map 设计 --> 扩充 键值对(使用键的范围不限制字符串。亦可以使用对象)
var m = new Map();
var o = {p:"Hello World"};
m.set(o,"content");
console.log(m);
console.log(m.get(o));


var map2 = new Map([{"name":"张三"},{"title":"Author"}]);
console.log(map2); // 此种方式创建不了新的map2


//map 使用 数组作为参数
var map = new Map([["name","张三"],["title","Author"]]);
console.log(map);
console.log(map.get("Author"));


// || 等价于以下函数
var items = [
	['name','zhangsan'],
	['title','Author']
]
var map3 = new Map();
console.log('constructor',map3.constructor);
map3.forEach(([key,value])=> map3.set(key,value));


// 注意，只有对同一个对象的引用，Map结构才将其视为同一个键
map3.set(["a"],555)
console.log('只有对同一个对象的引用，Map结构才将其视为同一个键',map3.get(['a']));

// Map 实例属性
// Map.prototype.size
// Map.set(key,value) | Map.get(key) | Map.delete(key) | Map.has(key) | Map.clear()
// 添加值 return (Map)| 获取值 return value | 删除值 (return boolean) | 判断值 (return boolean) | 清空值 (return void)




