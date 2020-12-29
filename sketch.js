const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1, box2 , g1;
function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  world = myengine.world;

  //creating object for the class Box using keyword new
  box1 = new Box(200,300,40,40);
  box2 = new Box(220,100,40,100);
  
  g1 = new Ground(200,380,400,20);
  
}

function draw() {
  background(0);  

  Engine.update(myengine);
  g1.show();
  box1.display();
  box2.display();
 
  
}