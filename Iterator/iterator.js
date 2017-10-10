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



