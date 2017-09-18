let [a,b,c] = [1,2,3];
console.log(a,b,c);
// [!a] 变量解构 "模式匹配"
let [aa,[bb,[cc]]] = [11,[22,[33]]];
console.log(aa,bb,cc);

// 模式匹配不了，解构不成功，变量为 undefined
let [,,thrid] = [11,[22,[33]]];
console.log(thrid);

let [head,...tail] = [1,2,3,4]
console.log(head,tail);

//[!b] 解构不成功的 2 种情况
let [foo] = [];
let [qaz,foo2] = [2];
console.log(foo,foo2);

//[!c] 不完全解构的情况
let [x,y] = [1,2,3];
let [aaa,[bbb],ccc] = [1,[2,3],4];
console.log(aaa,bbb,ccc);

// [!d] 数组解构右边不是数据
//let [ss] = null; //module evaluation error (模块评估错误)
//console.log(ss); 

// [!e] initialication
let [ff = true] = [];
console.log(ff);
// 通过判断一个数组成员不严格等于undefined
let [tt = 4] = [null];
let [kk = 5] = [undefined];
console.log(tt,kk);

// [!f] initialication expression 初始化为 表达式时 , 为惰性的 ，和上述行为一致
function exp(){
	return "ddd"
}
let [sss = exp()] = [undefined];
console.log(sss);

//[!!a] NODE 此时报错  引用错误 ReferenceError (实际上没有报错)
let [cai = goo , goo = 1] = [];
console.log(goo);
