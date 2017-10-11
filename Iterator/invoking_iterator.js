//1.数组和set的解构场景  默认调用Symbol.iterator
let set = new Set().add("a").add("b").add("c");
let [first,...rest] = set;

//2.扩展运算符
var str = "hello";
console.log([...str])


// 以下场景 都会默认调用Symbol.iterator 接口
// for...of
// Array.from()
// Map(), Set(), WeakMap(), WeakSet()（比如 new Map([['a',1],['b',2]]) ）
// Promise.all()
// Promise.race()