// 问题: 写成 class Point() 
class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}		
}

class ColorPoint extends Point{
	//constructor(){}
}


var point = new Point(1,2);
console.log(point);


var colorPoint = new ColorPoint(3,4);
console.log(colorPoint);


console.log(ColorPoint.__proto__ == Point);


