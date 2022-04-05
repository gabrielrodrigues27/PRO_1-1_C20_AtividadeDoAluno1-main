const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground,ground_two;
var wedge;
var angle=60;
var poly;
var rock


function setup() {
  
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
  var rock_options = {
    restitution:0.5

  }


  rock = Bodies.circle(400,10,30,rock_options);
  World.add(world,rock);

  ball = Bodies.circle(450,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(250,490,500,20,ground_options);
  World.add(world,ground);
  ground_two = Bodies.rectangle(400,250,200,20,ground_options)
  World.add(world,ground_two)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,500,20);
  rect(ground_two.position.x,ground_two.position.y,200,20)

 fill ("green")
 ellipse(rock.position.x,rock.position.y,30) 
}

