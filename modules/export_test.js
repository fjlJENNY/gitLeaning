//ES6 import 和 export

// ['default' is not exported by 'modules/export_test.js]
// export var firstName = "Mick";
// export var lastName = "tom";



var firstName = "mick";
var lastName = "tom";
// export {firstName,lastName};
export function multiply(x,y){
	return x*y;
}


var n = 1;
export {n as mm}  // 注意 : as 作为变量输出的别名
// 注意 : export 规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// 下面写法出错
// var m = 1;
// export m  


