// [!a] 基础解构
var {foo,bar} = {foo:"aaa",bar:"bbb"};
console.log(foo,bar);
var {bar,foo} = {foo:"ccc0",bar:"ddd0"};
console.log(bar,foo);


//[!b] 解构实解  属性名和变量名不一致
var {foo:qaz} = {foo:"ddd",bar:"eee"};
console.log(qaz);

var {foo:foo,bar:bar} = {foo:"fff",bar:"ooo"};
console.log(foo,bar);


let team ;
let {team} = 