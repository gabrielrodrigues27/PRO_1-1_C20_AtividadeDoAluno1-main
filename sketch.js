const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground, ground_two;
var wedge;
var angle = 60;
var poly;
var rock
var topW, bottomW, letfW, rightW;
var fan1,fan2


function setup() {

  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  }
  var rock_options = {
    restitution: 0.5

  }


  rock = Bodies.circle(200, 10, 30, rock_options);
  World.add(world, rock);

  ball = Bodies.circle(220, 10, 20, ball_options);
  World.add(world, ball);

  ground_two = Bodies.rectangle(400, 250, 200, 20, ground_options)
  World.add(world, ground_two)

  topW = new Wall(250, 490, 500, 20);
  bottomW = new Wall(250,10,500,20);
  letfW = new Wall(10,250,20,500)
  rightW = new Wall(490,250,20,500)

  fan1 = new Fan(200,120,120,20)
  fan2 = new Fan(200,300,120,20)



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  //rect(ground.position.x,ground.position.y,500,20);
  rect(ground_two.position.x, ground_two.position.y, 200, 20)

  fill("green")
  ellipse(rock.position.x, rock.position.y, 30)
  angle +=1
  topW.display();
  bottomW.display();
  rightW.display();
  letfW.display()
  fan1.display();
  fan2.display()
}

