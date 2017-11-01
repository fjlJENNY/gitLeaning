//【super 关键字  p269】
class A{
	constructor(){
		//console.log(new target.name); //不支持此方法
	}
}

class B extends A{
	constructor(){
		super();
	}
}

console.log("A:",new A());
console.log("B:",new B());