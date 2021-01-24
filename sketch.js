const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;

var engine, world;
var canvas, scene
var land, tank, villan;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var slingy;

function preload(){
scene = loadImage("road.png");
}

function setup(){
canvas = createCanvas(1500, 600);
engine = Engine.create();
world = engine.world;

//creating land.
land = new Land(0,500,2000,30);

//creating the hero.
tank  = new Me(200, 400, 200, 50);

//creating the monster.
villan = new Demon(1300, 200, 50,215);

//creating block level1.
block1 = new Block(600, 460, 50, 50);
block2 = new Block(650, 460, 50, 50);
block3 = new Block(700, 460, 50, 50);
block4 = new Block(750, 460, 50, 50);
block5 = new Block(800, 460, 50, 50);
block6 = new Block(850, 460, 50, 50);

//creating block level2.
block7 = new Block(650, 410, 50, 50);
block8 = new Block(700, 410, 50, 50);
block9 = new Block(750, 410, 50, 50);
block10 = new Block(800, 410, 50, 50);

//creating block level3.
block11 = new Block(700, 360, 50, 50);
block12 = new Block(750, 360, 50, 50);

//creating the head of the tower.
block13 = new Block(725,310,50,50);

//creating the slingshot.
slingy = new Rope(tank.body, { x:500, y:50})

}

function draw(){
background(scene);

 
land.display();
tank .display();
villan.display();

//displaying the slingshot.
slingy.display();

//displaying block level1.
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

//displaying block level2.
block7.display();
block8.display();
block9.display();
block10.display();

//displaying block level3.
block11.display();
block12.display();
block13.display();
}

function mouseDragged(){
Matter.Body.setPosition(tank.body, { x: mouseX, y: mouseY});
}