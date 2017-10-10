// WeakSet 成员只能是对象，不能是其他类型的值 ????
// weakset 内的对象是弱引用，垃圾回收机制不考虑WebSet 对该对象的引用
var ws = new WeakSet();
ws.add([1,3]);

var b = [3,4];
//console.log(new WeakSet(b));
console.log(ws);

const foos = new WeakSet();
class Foo{
	constructor(){
		foos.add(this);
	}
	method(){
		if(!foos.has(this)){
			throw  new TypeError("Foo.prototype.method 只能在Foo的实例上调用！");
		}
	}
}