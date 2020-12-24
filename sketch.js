
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var log1;

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,height,1800,20);
ball1 = new Ball(200,200,50);
  log1 = new Log(400,690,200,20);
  log2 = new Log(500,650,20,200);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ground.display();
  log1.display();
  log2.display();
  
 keyPressed();
 keyWentUp ();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:2,y:-2});
	}
	
	}

function keyWentUp(){
	if(keyCode === UP_ARROW){

		ball1.isStatic = true;

	}

	
}