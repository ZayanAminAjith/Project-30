const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_link;

var bg_img,fruit_img,bunny_img;
var bunny, cutButton;


function preload()
{
  bg_img = loadImage('background.png');
  fruit_img = loadImage('melon.png');
  bunny_img = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  bunny = createSprite(width/2,603,20,50)
  bunny.addImage("Bunny", bunny_img)
  bunny.scale = 0.5

  cutButton = createImg("cut_button.png")
  cutButton.position(220,15)
  cutButton.size(60,60)
  cutButton.mouseClicked(buttonClicked)

  rope = new Rope(7,{x:250,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_link = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(fruit_img,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

  drawSprites()

}

function buttonClicked(){
  rope.break()
  fruit_link.cutTheRope()
}