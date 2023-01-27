var trex,trex_running, trex_collided;
var ground, invisibleGround,groundImage;







function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png"."trex3.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");



}

function steup(){

  createCanvas(600,200)

//create a trex sprite
  trex = createSprite(50,160,50,70);
  trex.addAnimation("running",trex_running);
  trex.scale = 3.5;

  //create a ground sprite
  ground= createSprite(200,180,35,75);
  trex.addAnimation("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocity = -4;

  //creating invisible ground
  invisibleGround = createSprite(200,190,457,25);
  invisibleGround.visible = false;

}

function draw () {
  //set background color
  background(220); 

  drawSprites();
}


