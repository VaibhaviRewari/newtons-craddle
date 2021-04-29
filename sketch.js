
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

	//Create the Bodies Here.
	Roof = new roof (350, 100, 300, 30); 
	World.add(world, roof);

    bobobject1= new bob (250, 300); 
	bobobject2= new bob (300, 300);
    bobobject3 = new bob(350, 300);
	bobobject4= new bob (400,300); 
	bobobject5= new bob(450,300);

	ropel = new rope (bobobject1.body, roof.body , -100 , 0); 
	World.add(world, ropel);

	rope2= new rope (bobobject2.body, roof.body, -50 , 0);
	World.add(world, rope2);

	rope3 = new rope(bobobject3.body, roof.body,0,0); 
	World.add(world, rope3);

	rope4= new rope (bobobject4.body, roof.body,+50,0); 
	World.add(world, rope4);
 
	rope5=new rope(bobobject5.body,roof.body,+100,0);
	World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");



  
  drawSprites();

  Roof.display();
  bobobject1.display(); 
  bobobject2.display(); 
  bobobject3.display(); 
  bobobject4.display();
  bobobject5.display();

  ropel.display();
  rope2.display();
  rope3.display();
  rope4.display(); 
  rope5.display();

function keyPressed() {

if(keyCode=== UP_ARROW){

Matter.Body.applyForce (bobobjects.body,bobobjecti.body.position,{x:-738,y:8});
 
}



}
}