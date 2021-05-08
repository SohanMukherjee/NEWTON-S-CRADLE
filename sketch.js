
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,800,20)
	roof=new Ground(400,50,400,30)

	bob1=new Bob(400,300,40)
	rope1 = new Rope(bob1.body,roof.body,0,0)

	bob2=new Bob(320,300,40)
	rope2 = new Rope(bob2.body,roof.body,-80,0)

	bob3=new Bob(240,300,40)
	rope3 = new Rope(bob3.body,roof.body,-160,0)

	bob4=new Bob(480,300,40)
	rope4 = new Rope(bob4.body,roof.body,80,0)

	bob5=new Bob(560,300,40)
	rope5 = new Rope(bob5.body,roof.body,160,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  roof.display()
  bob1.display()
  rope1.display()
  bob2.display()
  rope2.display();
  bob3.display()
  rope3.display()
  bob4.display()
  rope4.display();
  bob5.display()
  rope5.display()
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-150,y:-55})
	}
}

