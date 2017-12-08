var [a,b,c,d,e] = "hello";
console.log(a,b,c,d,e);

var {length:len} = "hello";
console.log(len);

let {toString:s} = 123;
console.log(s);

let {toString:boolS} = true;
console.log(boolS);

//解构的规则是：只要等号右边的值是对象或数组，就先将其转成对象。
//由于undefined 和 null 无法转换成对象，所以无法解构
//let {prop:x} = undefined;
//let {prop:y} = null;