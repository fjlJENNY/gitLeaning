//import {readFile} from "fs";
//console.log(readFile);



//[a!]
//CommonJs 模块
let {start , exists , readFile} = require("fs");


// 相当于 整体加载 fs 模块, (这种加载模式称为运行时加载)
let _fs = require("fs");
let start = _fs.start;


// 而 ES6 中的加载 是从 "编译时加载"  (但是无法引入 ES6 模块的 本身，ES6 不是对象)
import {start , exists , readFile } from "fs";



// "ES6" 的模块默认采用严格模式
//1.evel 和 arguments 不能重新赋值
//2.arguments 不会自动反映函数参数的变化
//3.不能使用arguments.callee
//4.不能使用arguments.caller

//5.顶层的this 指向 undefined (特别注意),不应该在顶层代码使用this


import test from "modules/export_test.js"
console.log(test);