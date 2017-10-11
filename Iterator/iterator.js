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
	console.log(i)
}


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

