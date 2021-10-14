var bg, backgroundImg;
var ironmanImage;
var ironman;
var stoneGroup, stoneImage;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImage = loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  ironman = createSprite(200, 505, 20, 50);
  ironman.addImage(ironmanImage);
  ironman.scale= 0.3;
  stoneGroup = new Group ();
}

function draw() {
  if (keyDown("up")) {
    ironman.velocityY = -10;  }
    ironman.velocityY=ironman.velocityY+ 0.5;
    if (keyDown("left")) {
      ironman.x = ironman.x - 5;
    }
    if (keyDown("right")) {
      ironman.x = ironman.x + 5;
    }

 
    if(keyDown("space") ) {
      ironman.velocityY = -16;
    }
    ironman.velocityY = ironman.velocityY + 0.5;
    generatestones();
    for(var i = 0 ; i< (stoneGroup).length ;i++){
      var temp = (stoneGroup).get(i) ;
      
      if (temp.isTouching(ironman)) {
        ironman.collide(temp);
        }
          
      }
         drawSprites();
}
function generatestones(){
  if (frameCount % 60 === 0) {
    console.log("hello rishi")
    var stone = createSprite(1200,10,40,10);
    stone.x = random(50,850);
    stone.addImage(stoneImage);
    stone.scale = 0.5;
    stone.velocityY = 5;
    
    stone.lifetime =250;
    stoneGroup.add(stone);
  }
}
  

