// 比较 for...of...      for...in...

// Iterator 是这种机制 。它是一种接口，任何数据结构只要部署Iterator接口，就可以完成遍历操作。

var it = makeIterator(["a","b"]);

function makeIterator(array){
	var nextIndex = 0;
	return {
		next(){
			return nextIndex < array.length ? {"value":array[nextIndex++],"done":false} : {"value":void 0,"done":true}
		}
	}
}

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());


// Iterator 的遍历过程 
// 创建一个指针对象，第一次调用指针对象的 next 方法 , 第二次调用指针的 next 方法...


// 为数据结构 部署Symbol.iterator接口，称为部署了遍历器接口(iterable) 指针对象(Iterator)

//一种数据结构只要部署了Iterator接口，我们称这种数据结构是iterable


// [一个数据结构只要具有Symbol.iterator属性，就认为iterable]
// [默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性]



// 原生部署 Symbol.iterator 对象
// Array | Map | Set | String | TypedArray  | 函数的arguments | NodeList 对象









class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		var value = this.value;
		if (value < this.stop) {
			this.value++;
			return {
				done: false,
				value: value
			};
		}
		return {
			done: true,
			value: undefined
		};
	}
}

function range(start, stop) {
	return new RangeIterator(start, stop);
}
for (var value of range(0, 3)) {
	console.log(value);
}

var obj = {
	data:['Hello','World'],
	[Symbol.iterator](){
		let count = 0;
		var self = this;
		return {// 返回一个遍历器对象
			next(){
				if(count<self.data.length){
					return {
						value:self.data[count++],
						done:false
					}
				}
				return {
					value:void 0,
					done:true
				}
			}
		}
	}
}

for(var i of obj){
	console.log('例子3-'+i,i)
}








var something = 'heowowo'
var iteratorSomething = something[Symbol.iterator]();

console.log('遍历器的接口。。。。',iteratorSomething.next)










// 类数组对象  部署 Iterator 接口 可实现 for...of 遍历
var iterable = {
	0:"a",
	1:"b",
	2:"c",
	length:3,
	[Symbol.iterator]:Array.prototype[Symbol.iterator]
}

for(var i of iterable){
	console.log(i);
}



// 扩展运算符 默认调用 Iterator 接口


let arr = 'world'
console.log('字符串解构','/n',...arr)
// 了解一下 yield*
// 
// 
// yield* 后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
// 


