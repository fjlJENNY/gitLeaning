// 字符串 部署了 iterator 接口
var somestring = "hi";
// for(var i of somestring){
// 	console.log(i);
// }


var iterator = somestring[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// 遍历器对象 也可以部署 return() 和 throw()  可选部署

var obj = {
	data:['Hello','World',"cai","ji","sha","bi"],
	[Symbol.iterator](){
		let count = 0;
		var self = this;
		return {// 返回一个遍历器对象
			next(){
				if(count<self.data.length){
					return {
						value:self.data[count++],
						done:false
					}
				}
				return {
					value:void 0,
					done:true
				}
			},
			return(){
				console.log('laji'); // [!]for...of 遍历提前结束 调用此方法
			}
		}
	}
}

var count = 0;
for(var i of obj){
	if(count>2){
		break;
	}
	count++;
	console.log(i);
}