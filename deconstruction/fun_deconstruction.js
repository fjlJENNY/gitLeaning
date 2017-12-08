function add([x,y]){
	return x + y;
}


console.log(add([1,2]));



// [!a] 函数解构 可以使用 默认值
// 特别注意 // 先解构外层 , 再解构内层
//[!!a]  如果有赋值  就解构 {x=0,y=0} = arguemnts;  否则就解构 {x = 0, y = 0}  = {};
function move({x = 0,y = 0} = {}){
	return [x,y];
}

console.log(move({x:3})); 
console.log(move({}));
console.log(move());

//[!!b] 如果有赋值  就解构 {x,y} = arguemnts;  否则就解构 {x,y}  = {x:0,y:0};
function move2({x,y} = {x:0,y:0}){
	return [x,y];
}

console.log(move2({x:3}));
console.log(move2({}));
console.log(move2());


// 也是有默认值的
console.log([1,undefined ,3].map((x = 'yes')=>x));