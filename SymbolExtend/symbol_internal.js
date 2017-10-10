//[内置的symbol 方法]
// [1] Symbol.hasInstance -- 当对象使用 instanceof 运算符时，判断是否为该对象的实例，会调用此方法？？
class MyClass{
	[Symbol.hasInstance](foo){
		return foo instanceof Array
	}
}

console.log([1,2,3] instanceof new MyClass());


// [2] Symbol.isConcatSpreadable  -- 表示一个布尔值，该对象使用Array.prototype.concat() 时，是否可以展开

let arr1 = ['a','b'];
let arr2 = ['c','d'];
//arr2[Symbol.isConcatSpreadable] = false; // ['a','b',['c','d']];
//arr2[Symbol.isConcatSpreadable] = true || undefined; // ['a','b','c','d'];
let arr3 = arr1.concat(arr2);
console.log(arr3);


//[3] Symbol.species(种类)