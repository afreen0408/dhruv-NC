
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	bobObject1=new bob (400,350,40);
	bobObject2=new bob (450,350,40);
	bobObject3=new bob (500,350,40);
	bobObject4=new bob (550,350,40);
	bobObject5=new bob (600,350,40);
	roof1=new roof(500,100,300,20);
	rope1=new rope(bobObject1.body,roof1.body,-80, 0)
  rope2=new rope(bobObject2.body,roof1.body,-40, 0)
  rope3=new rope(bobObject3.body,roof1.body,0, 0)
  rope4=new rope(bobObject4.body,roof1.body,40, 0)
  rope5=new rope(bobObject5.body,roof1.body,80, 0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display()
  

  drawSprites();
 
}



