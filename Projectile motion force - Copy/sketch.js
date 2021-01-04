var ground, waste;
var holder1,holder2,holder3;
var wasteI,dustbinI;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
		wasteI = loadImage('files/waste.png');
		dunstbinI = loadImage("files/bin.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	

	ground = Bodies.rectangle(600, 590,1300 ,100, {isStatic:true} );
	 World.add(world, ground);


	ground.shapecolor =color("grey");

	 paperCrushed = new  paper(200,100);
	 lside = new dustbin(1040,510,10.5,120.2);
	 rside = new dustbin(1245,510,10.5,120.2);
	 bside = new dustbin(1140,564.5,205,10.2);



	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1400,10);
  paperCrushed.display();
  lside.display();
  rside.display();
  bside.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperCrushed.body,paperCrushed.body.position,{x:85,y:-85});
}
}
 
