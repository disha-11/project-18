
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone1;
var m1,m2,m3,m4,m5,m6,m7;
var elastic1;
var boy1;
var boyimg;
var tree1;
var ground1;
function preload()
{
boyimg=loadImage("boy.png");	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

stone1= new stone(290,200,20,20);
ground1 = new ground(500, 595, 1000, 10);
boy1=createSprite(200,500,200,200);
boy1.addImage("boy",boyimg);
boy1.scale=0.3

m1=new mango(1100,180);
m2=new mango(1300,180);
m3=new mango(1200,260);
m4=new mango(990,260);
m5=new mango(1100,260);
m6=new mango(900,250);
m7=new mango(1000,110);
tree1=new tree(1100,350)
elastic1=new Chain(stone1.body,{x:74,y:350});

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  textSize(20);
  text("Press Space To Try Again!", 450, 50);

tree1.display();
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
elastic1.display();
 stone1.display();
 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}




