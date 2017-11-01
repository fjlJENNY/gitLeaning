class A {}
class B extends A{}
//A,只要一个有prototype 属性的函数，就能被B继承。
//【实例和对象】 了解实例和对象的关系
// __proto__ 和 prototype 的关系

//【判断是否是个父类】
console.log("B 是否继承 A",Object.getPrototypeOf(B) === A);