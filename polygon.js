class polygon{
    constructor(x,y,radius){
var options ={
    isStatic: true,
    restitution: 0,
    friction: 1,
    density: 1.2
}
this.image = loadImage("polygon.png");
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);
    }
    display(){
var c = this.body.position;
var d = this.body.angle;
push();
translate(c.x,c.y);
rotate(d);
imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop();
    }
}