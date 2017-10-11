class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

class ColorPoint extends Point{
	constructor(x,y,color){
		super(x,y);
		// 'this' is not allowed before super()
		//this.x = x;  
		//this.y = y;
		this.color = color;
	}

	// toString(){
	// 	console.log(this);
	// 	return this.color + " " + super.toString();
	// }
}

var colorpoint = new ColorPoint(2,3,"yellow");
colorpoint.toString();


//【子类必须在constructor方法中调用super方法,否则新建实例时会报错】
