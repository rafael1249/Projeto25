class paper{
 
	constructor(x,y,width, height){
      var options={

		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	  } 
	  

	  this.body = Bodies.rectangle(x, y,width, height, options);
	  this.width = width;
	  this.height = height;

	  this.image =loadImage("paper.png");

	  World.add(world, this.body);
	}
    display(){
		var pos =this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(4); 
		stroke("green")	;
		fill("black");
		image(this.image, 0, -21, this.width, this.height);
		pop();

	} 





}