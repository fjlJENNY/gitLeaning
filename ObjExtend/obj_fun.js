//【Object.is() 】  description : Same-value equality (同值相等) 
//1.行为不同之处: +0 , -0   2. NaN

console.log(Object.is(+0,-0)) ;
console.log(Object.is(NaN,NaN));
console.log(Object.is(NaN === NaN));



// 【Object.assign() 】 description:  将源对象（source）的所有可枚举属性,复制到目标对象(target)
// assign => 分配，指定
// Object.assign 转换成对象
console.log(Object.assign(2)); // Object.assign(null) 和 Object.assign(undefined) 报错

console.log(Object.assign({"a":1},{"a":2,"b":3},{"b":4}));


//其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其
//他值都不会产生效果。

var v1 = 'abc';
var v2 = true;
var v3 = 10;
var obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
