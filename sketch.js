
var background_Image,
    tom,
    tom_Image,
    tom_collided,
    tom_Image1,
    jerry,
    jerry_Image,
    jerry_collided,
    jerry_Image1;
    

function preload() {
    //load the images here
    background_Image = loadImage("images/garden.png");
    tom_Image = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tom_collided = loadAnimation("images/tomFour.png");
    jerry_Image = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerry_collided = loadAnimation("images/jerryFour.png");
    tom_Image1 = loadImage("images/tomOne.png");
    jerry_Image1 = loadImage("images/jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(500,300,25,25);
    background.addImage(background_Image);

    tom = createSprite(903,527,25,25);
    tom.addImage(tom_Image1);
    tom.addAnimation("running",tom_Image);
    tom.addAnimation("collided",tom_collided);
    tom.setCollider("circle",1,0,400);
    tom.velocityX = 0;
    tom.debug = false;
    tom.scale = 0.1;
    
    jerry = createSprite(203,527,25,25);
    jerry.addImage(jerry_Image1);
    jerry.addAnimation("running",jerry_Image);
    jerry.addAnimation("collided",jerry_collided);
    jerry.setCollider("circle",10,0,100);
    jerry.debug = false;
    jerry.scale = 0.1;   





   
}

function draw() {

    

    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    if(tom.isTouching(jerry))
    {
        tom.changeAnimation("collided",tom_collided);
        jerry.changeAnimation("collided",jerry_collided);
        tom.velocityX = 0;
        jerry.velocityX = 0;
    }

    console.log(mouseX,mouseY);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
      tom.changeAnimation("running",tom_Image);
      jerry.changeAnimation("running",jerry_Image);
      tom.velocityX = -5;
  }

}
