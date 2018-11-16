// Symbol 值最为 对象的属性 ， 使用 Object.getOwnPropertySymbols();
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = "Hello";
obj[b] = "World";

console.log(obj);
for(var i in obj){
	console.log('i',i);
}

var objSymbols = Object.getOwnPropertySymbols(obj);
console.log('objSymbols',objSymbols);


var foo = "foo";//Symbol("foo");
Object.defineProperty(obj, foo, {
	value: "foobar",
});
for (var i in obj) {
	console.log('second 输入 i',i); // 无输出
}
console.log(Object.getOwnPropertyNames(obj));
	// []
console.log(Object.getOwnPropertySymbols(obj));