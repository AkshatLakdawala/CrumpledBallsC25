
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	/*var paperBall_options = {
		restitution: 0.3,
		isStatic: false,
		friction:0.5,
		density:1.2,
		
	}
	
    paperBall = Bodies.circle (200,200,20,paperBall_options);
	World.add (world,paperBall);*/
	
	



	Engine.run(engine);
	//paperBall = new Paper(100,200,20);
	ground = new Ground(200,690,3200,10);

	dustbin1 = new Dustbin(1300,610,150,150);
	//dustbin2 = new Dustbin(1225,615,15,150);
	//dustbin3 = new Dustbin(1375,615,15,120);

	paperBall = new Paper(600,200,20,PI/4);
  
}


function draw() {
  
  background("grey");

  Engine.update(engine);
  /*rectMode(CENTER);
  ellipseMode (RADIUS);
  ellipse (paperBall.position.x,paperBall.position.y,20,20);*/

  ground.display();
  paperBall.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  keyPressed();

  drawSprites();
  
 
}

function keyPressed () {
   if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce (paperBall.body,paperBall.body.position,{x:4,y:-3});
	   
	   
	
	
   }
}



