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

	toString(){
		// super 不能被打印出来，无确定指向
		return this.color + " " + super.toString();
	}
}

var colorpoint = new ColorPoint(2,3,"yellow");
console.log(colorpoint.toString());


//【子类必须在constructor方法中调用super方法,否则新建实例时会报错】
// 子类没有定义 constructor，方法会被默认添加 （constructor），如果显式定义了，需要添加constructor


// ======================================
//类的prototype 属性 与__proto__属性


console.log(Point.prototype == new Point().__proto__);
console.log(Point.prototype,new Point().__proto__);

// [todo: __proto__  和 prototype 的关系 且和 类的 prototype 属性 相关]
