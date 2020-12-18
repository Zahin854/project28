const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var mango1,mango2,mango3,mango4,mango5,mango6
var stoneObject
var tree
var boy,ground,string
var lforce=100
function preload()
{
	boy=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300,700);


	engine = Engine.create();
	world = engine.world;
mango1= new mango(1100,100,30)
mango2= new mango(1170,130,30)
mango3= new mango(1010,140,30)
mango4= new mango(1000,70,30)
mango5= new mango(1100,70,30)
mango6= new mango(1000,230,30)
mango7= new mango(900,230,40)
mango8= new mango(1140,150,40)
mango9= new mango(1100,230,40)
mango10= new mango(1200,200,40)
mango11= new mango(1120,50,40)
mango12= new mango(900,160,40)

stoneObject= new stone(235,420,30)
tree= new Tree(1050,580)
ground= new Ground(width/2,600,width,20)
string= new String(stoneObject.body,{x:235,y:420})
	Engine.run(engine);
   
  }
  
 
  
function draw() {
  background(230)
  rectMode(CENTER)
  textSize(25)
  text("press space to get a second chance",50,50)
  image(boy,200,340,200,300)
 drawSprites();
 tree.display();
 stoneObject.display();
 ground.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();

 string.display();

 detectcollision(stoneObject,mango1);
 detectcollision(stoneObject,mango2);
 detectcollision(stoneObject,mango3);
 detectcollision(stoneObject,mango4);
 detectcollision(stoneObject,mango5);
 detectcollision(stoneObject,mango6);
 detectcollision(stoneObject,mango7);
 detectcollision(stoneObject,mango8);
 detectcollision(stoneObject,mango9);
 detectcollision(stoneObject,mango10);
 detectcollision(stoneObject,mango11);
 detectcollision(stoneObject,mango12);
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
    string.fly()
  }
  function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
  }
  function keyPressed(){
    if(keyCode==32){
      Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
        string.attach(stoneObject.body)
    }}