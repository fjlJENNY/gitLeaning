// constructor 方法是类的默认方法
// constructor 方法默认返回实例对象(即this)
// constructor 没有显示定义 ，一个空的constructor 会默认添加
class Foo{
	constructor(){
		return Object.create(null);
	}
}

console.log("instanceof Foo:",new Foo() instanceof Foo)

// 2.类的构造函数，不用new 没法调用，会报错。 ES5 的构造函数 可以直接调用

//实例的属性除非显式定义在其本身(即定义在this对象上) 否则都是定义在原型上(即定义在class 上)
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}
var point = new Point(2, 3);
point.toString() // (2, 3)
console.log("point.hasOwnProperty('x')",point.hasOwnProperty('x')) // true
point.hasOwnProperty('y') // true
console.log("point.hasOwnProperty('toString')",point.hasOwnProperty('toString'));


var p1 = new Point(2,3);
var p2 = new Point(3,2);
console.log(p1.__proto__ === p2.__proto__); // true  它们的原型都是Point.prototype,属性都是相等的


//3. 不存在变量提升  与ES5 差异
//new Foo2();  // Foo2 is not a constructor
class Foo2{}


//[class expression]
// 使用表达式定义了一个类
const myClass = class Me{
	getClassName(){
		return Me.name
	}
}

console.log("类名",myClass.name);
var m = new myClass(); // 这个类（通过表达式）的名字是 myClass, Me只在Class内部代码可用
console.log("内部类名",m.getClassName());
//如果类的内部没用到的话，可以省略 Me ，也就是可以写成下面的形式。
//const MyClass = class { /* ... */ };

//立刻执行的class  就像 Object
let person = new class{
	constructor(name) {
		this.name = name;
	}

	sayName(){
		console.log(this); //Object
		console.log(this.name);
	}
}("张三");
person.sayName();



//类的私有属性  1. 方法名 加上下划线
//2.将私有方法移除模块
class Widget{
	foo(baz){
		bar.call(this,baz);
	}
}

function bar(baz){}

//3.将Symbol 值 最为唯一值
const bar2 = Symbol('bar2');
class Widget2{
	foo(baz){
		this[bar2](baz);
	}
	// 私有方法
	[bar2](){
		console.log("bar2");
	}
}
new Widget2()[bar2]();


//【this 的指向问题】
class Logger{
	constructor(){
		console.log(this);
		this.printName = this.printName.bind(this);
	}
	printName(name = "there"){
		console.log(this);
		console.log(this.print)
		this.print(`Hello ${name}`);
	}
	print(text){
		console.log(text);
	}
}

const logger = new Logger();
const {printName} = logger;  // 怎样解构 ?
console.log(printName);
printName();

//【顺便提一句 】 : 类和模块的内部都是严格模式

// 类的name属性 总是返回class关键字后面的类名