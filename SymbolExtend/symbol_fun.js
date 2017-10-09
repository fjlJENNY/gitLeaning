// 有 2 种方法 Symbol.for() -- 生成一致的Symbol值 Symbol.keyFor()
var s1 = Symbol.for();
var s2 = Symbol.for();
var s3 = Symbol.for();
console.log(s1 === s2);
console.log(s1 === s3);