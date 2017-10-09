// 有 2 种方法 Symbol.for() -- 生成一致的Symbol值 Symbol.keyFor()
var s1 = Symbol.for();
var s2 = Symbol.for();
var s3 = Symbol.for();
console.log(s1 === s2);
console.log(s1 === s3);

// 获取 Symbol.keyFor() 上注册的key
var s4 = Symbol();
console.log(Symbol.keyFor(s4));
var s5 = Symbol("foo");
console.log(Symbol.keyFor(s5));
var s6 = Symbol.for("bar");
console.log(Symbol.keyFor(s6));

// ?? 为甚么会创建2个iframe 
var iframe = document.createElement("iframe");
//iframe.src = String(window.location);
document.body.appendChild(iframe);
var cur = iframe.contentWindow.Symbol.for("foo") == Symbol.for("foo");
console.log("p21",cur);