//  namespacing - optional 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//  store  we  need a var
var engineOfArohi,worldOfArohi;
var object1;
var object2;

function setup() {
  createCanvas(400,400);

  // a=10;
  // first we create engine then using that engine we create world
  engineOfArohi = Engine.create();
  worldOfArohi = engineOfArohi.world;

  // JSON - javasript object notation(very much to var / store info)
  object1_option = {
    isStatic:true
    // fixed
  }

  // creation of object
  object1=Bodies.rectangle(200,390,200,20,object1_option);
  // addition of object in world
  World.add(worldOfArohi,object1);//syntax


  object1_option = {
    restitution:1.0
    // bouncy nature / ball type
  }
  object2=Bodies.circle(200,200,20,object1_option)
  World.add(worldOfArohi,object2);

  console.log(object1);
  console.log(object1.position);
  console.log(object1.position.x);
}

function draw() {
  background(0); 
  Engine.update(engineOfArohi);
  
  rectMode(CENTER); 
  rect(object1.position.x,object1.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(object2.position.x,object2.position.y,20,20);
}