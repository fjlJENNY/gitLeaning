var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
console.log('target.a',target.a) // b

// 要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作
// 如果handler没有设置任何拦截，那就等同于直接通向原对象。  -- 这句话有点考究，相当于 复制一份内存 然后 proxy 生成了一个拦截函数
// 
// 
// 
var handler = {
	get:function(target,name){
		console.log('gettttting   ')
		if(name === 'prototype'){
			return Object.prototype
		}
		return 'hello ' + name
	},

	construct(target,args){
		console.log(args , args instanceof Array)
		return {value:args[1]}
	},

	apply(target,thisBinding,args){
		return args[0]
	}
}
var fproxy = new Proxy(function(x,y){
	return x+y
},handler)


console.log(fproxy(1,2))
console.log(new fproxy(1,2,3,4,5,6,7))

