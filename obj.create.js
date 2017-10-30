function Shape(){
	this.x = 0;
	this.y = 0;
}

Shape.prototype.move = function(x,y){
	this.x += x;
	this.y += y;
	console.info("shape move");
}

function Rectangle(){
	Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);

var rect = new Rectangle();

console.log(rect);
rect.move(1,1);

