// [!a] 基础解构
var {foo,bar} = {foo:"aaa",bar:"bbb"};
console.log(foo,bar);
var {bar,foo} = {foo:"ccc0",bar:"ddd0"};
console.log(bar,foo);


//[!b] 解构实解  属性名和变量名不一致
var {foo:qaz} = {foo:"ddd",bar:"eee"};
console.log(qaz);

var {foo:foo,bar:bar} = {foo:"fff",bar:"ooo"};
console.log(foo,bar);

//foo->foo  foo->"fff"  第一项 对应 第一项 , 第二项 对应 第二项

// let team ;  // "MultipleErrors"  多次声明会报错
let {team} = {team:1};
console.log(team);  


// 如何理解下面这段
let team1;
({team1:team1} = {team1:2}); // 只有不将大括号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题
console.log(team1);


let demo2 = 23;
{	
	{
		console.log(demo2);
	}
}


var node = {
	loc:{
		start:{
			line:1,
			column:5
		}
	}
}

var {loc:{start:{line}}} = node;
//console.log(loc);  //ModuleEvaluationError  +　loc is not defined


// [!c] initialication expression 初始化为 表达式时 
var {x:y=3} = {x:2}; // 一个是模式 + 变量 。声明默认值
console.log(y);

var {x = 3} = {x:32};
console.log(x); // 一个是 模式 赋值 , 声明默认值

var {message:msg="Something went wrong"} = {};
console.log(msg); // 默认条件的值 是 underfined , 才使用初始化的值

// msg => "underfined"  上述解构 也是 不完全解构。


//[!!a] 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。

//let {foo: {bar}} = {baz: 'baz'};

// 上述原因  (同时可以从后面对象推导前面的对象) , 此时_tmp.foo 为 undefined , 再取 bar 会报错。

// let _tmp = {baz: 'baz'};
// _tmp.foo.bar // 报错