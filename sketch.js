
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var solo
var parede1
var parede2
var bola

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var solopropriedade = {
    isStatic: true 
	}
	 
	solo = Bodies.rectangle (800,670,2000,20,solopropriedade)
	World.add(world,solo)

	var parede1propriedade = {
     isStatic: true 
	}

	parede1 = Bodies.rectangle (1100,600,20,120,parede1propriedade)
	World.add(world,parede1)

	var parede2propriedade = {
		isStatic:true
	}
	parede2 = Bodies.rectangle (1350,600,20,120,parede2propriedade)
	World.add(world,parede2)
  
	var bolapropriedade = {
		isStatic: false, density:1.2, restitution:0.3, friction:0
	}
	bola = Bodies.circle (260,100,40,bolapropriedade)
	World.add(world,bola)
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  rect(solo.position.x,solo.position.y,2000,20)
  rect(parede1.position.x,parede1.position.y,20,120)
  rect(parede2.position.x,parede2.position.y,20,120)
  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,40,40)
  Engine.update(engine)
}

function keyPressed() {
if (keyCode == UP_ARROW){
Matter.Body.applyForce(bola,bola.position,{x:120,y:-150})

}




}




