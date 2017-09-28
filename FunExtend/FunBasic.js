// 函数的默认参数
// function log(x,y){
// 	y = y || "world";
// 	console.log(x,y);
// }

function log(x, y = "World!"){
	console.log(x,y);
}

log("Hello");
log("Hello","China");
log("Hello",""); 








