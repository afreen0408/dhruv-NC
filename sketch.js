
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	bobObject1=new bob (400,350,80);
	bobObject2=new bob (450,350,80);
	bobObject3=new bob (500,350,80);
	bobObject4=new bob (550,350,80);
	bobObject5=new bob (600,350,80);
	roof1=new roof(500,100,300,20);
	//rope1=new ground ();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();

  drawSprites();
 
}



