const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,ground1;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    block1 = new block(375,400,30,40);
    block2 = new block(425,400,30,40);
    block3 = new block(475,400,30,40);
    block4 = new block(525,400,30,40);
    block5 = new block(575,400,30,40);
    block6 = new block(625,400,30,40);
    block7 = new block(425,360,30,40);
    block8 = new block(475,360,30,40);
    block9 = new block(525,360,30,40);
    block10 = new block(575,360,30,40);
    block11 = new block(475,300,30,40);
    block12 = new block(525,300,30,40);
    Block1 = new block(525,240,30,40);
    ground1 = new ground(500,500,300,20);
    block13 = new block(780,230,30,40);
    block14 = new block(830,230,30,40);
    block15 = new block(880,230,30,40);
    block16 = new block(930,230,30,40);
    block17 = new block(830,190,30,40);
    block18 = new block(880,190,30,40);
    Block2 = new block(830,150,30,40);
    ground2 = new ground(850,250,300,20);
    polygon1 = new polygon(100,200,30);
    //platform = new ground(180,150,30,30);
    //slingshot1 = new slingshot(polygon1.body,{x:100,y:200});
}

function draw(){
    background(7,7,7);
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    Block1.display();
    ground1.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    Block2.display();
    ground2.display();
    polygon1.display();
    //platform.display();
    //slingshot1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}