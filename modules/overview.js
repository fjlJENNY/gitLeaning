//import {readFile} from "fs";
//console.log(readFile);


// "ES6" 的模块默认采用严格模式
//1.evel 和 arguments 不能重新赋值
//2.arguments 不会自动反映函数参数的变化
//3.不能使用arguments.callee
//4.不能使用arguments.caller

//5.顶层的this 指向 undefined (特别注意),不应该在顶层代码使用this


import test from "modules/export_test.js"
console.log(test);