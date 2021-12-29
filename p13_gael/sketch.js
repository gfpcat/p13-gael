var arco, flecha, stage;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;

var score = 0;

function preload() {
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

  red_balloonImage = loadImage("red_balloon0.png");
 
}

  

function setup() {
  createCanvas(400, 400);

 
  stage = createSprite(0, 0, 400, 400);
  stage.addImage(backgroundImage);
  stage.scale = 2.5

 
  arco = createSprite(380, 220, 20, 50);
  arco.addImage(bowImage);
  arco.scale = 1;

  score = 0
}

function draw() {
  background(0);

  stage.velocityX = -3

  if (stage.x < 0) {
    stage.x = stage.width / 2;
  }

  
  arco.y = World.mouseY


  if (keyDown("space")) {
    createArrow();

  }

  

   var select_balloon = Math.round(random(1,4));

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  drawSprites();
  text("Puntuación: " + score, 300, 50);
}



function createArrow() {
  var flecha = createSprite(100, 100, 60, 10);
  flecha.addImage(arrowImage);
  flecha.x = 360;
  flecha.y = arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}
