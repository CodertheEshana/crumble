var redzone
var redzone2
var redzone3
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	ball=createSprite(150, 655, 20,20);
	ball.shapeColor=color(255,35,20);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,135,20)



	redzoneSprite=createSprite(width/2, 655, 190,10);

	redzone2Sprite=createSprite(width/2.61, 600,  10,120);
	

	redzone3Sprite=createSprite(width/1.61, 600, 10,120);
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



