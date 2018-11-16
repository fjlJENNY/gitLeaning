'use strict'
//生成器 generator
//1.Generator 是一种状态机，封装了多个内部状态
//2.Generator 函数 返回一个遍历器对象,遍历器对象生成函数
//
//
//
function* helloworldGenerator(){
	yield 'hello'
	yield 'world'
	return 'ending'
}

var hw = helloworldGenerator()

console.log(hw.next())


while(true){
	let value = hw.next()

	if(value.done){
		break;
	}
	console.log(value)
}


// 注意一点  yield 后面的表达式  
// 
// 
//  比如  yield 123+456  -> 后面的结算结果不会立即出来，在 执行  .next() 才会求值
//  
//  
//  
//  
//  
//  
//  
function* demo(){
	console.log('hello ' + (yield));
	console.log('hello2 ' + (yield 123))
}


var de = demo();

console.log('---------',de.next(),de.next(),de.next())



