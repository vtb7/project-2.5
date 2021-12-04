var shark
var fish
var score=0
var ocean
var sharkImg
var oceanImg
var fishImg
var redfish
var redfishImg
var goldfish
var goldfishImg
var box
var boxImg
var endImg
var end
var box;
var horizon
var gameState = "play"


function preload() {
oceanImg = loadImage("Ocean.jpg")
sharkImg = loadImage("shark.png")
fishImg = loadImage("fish.png")
redfishImg = loadImage("redfish.png")
goldfishImg = loadImage("goldfish.png")
boxImg = loadImage("box.png")
endImg = loadImage("GameOver.png")
horizon = loadSound("horizon.mp3")
}
function setup() {
createCanvas(400,400)
if(gameState=="play"){
ocean = createSprite(400,400,400,400)
shark = createSprite(80,160,20,50);
redfish = createSprite(300,200)
goldfish = createSprite(300,300)
fish = createSprite(300,100)
box=createSprite(300,200);
box.visible=false;
shark.addImage(sharkImg)
ocean.addImage(oceanImg)
redfish.addImage(redfishImg)
goldfish.addImage(goldfishImg)
//box.addImage(boxImg)
fish.addImage(fishImg)
//box.addImage(boxImg)
ocean.scale=2
shark.scale=0.25
shark.debug=false;
goldfish.velocityX=-4
ocean.velocityX=-2
redfish.velocityX=-3
goldfish.velocityX=-4
fish.velocityX=-2
redfish.scale=0.2
goldfish.scale=0.3
fish.scale=0.2
horizon.loop()
}
}
function draw() {
  if(gameState=="play")
{
  background("white")

drawSprites()
var select_sprites = Math.round(random(1,4)); 
if (frameCount % 150 == 0) 
{
  var select_sprites = Math.round(random(1,4)); 

   if (select_sprites == 1) 
  { 
    createFish(); 
  } 
  else if (select_sprites == 2)
  {
    createGoldfish();
    }
  else if(select_sprites==3)
    { 
     createRedFish();
     } 

    else if (select_sprites == 4) 
 {
    createBox(); 
  } 
  
}
if(keyDown("up")){
shark.y=shark.y+-5
}
if(keyDown("down")) {
shark.y=shark.y+5
}
text("Score:"+score,320,20)
if(ocean.x < 0 ){
    ocean.x = width/2;
  
  }

  if(shark.isTouching(fish)) {
    fish.destroy(shark)
    score=score+1
  }
 if(shark.isTouching(redfish)) {
   redfish.destroy(shark)
   score=score+3
 }
if(shark.isTouching(goldfish)) {
  goldfish.destroy(shark)
  score=score+5
}

if(box.isTouching(shark)) {
  gameState="end"
  console.log("Game over")
 // text("Click r to restart") 
  }
}
else if(gameState=="end"){
  gameOver();
}
}//draw function ends

function createFish() {
  fish=createSprite(300,100);
  fish.addImage(fishImg)
  fish.y = Math.round(random(10,400))
  fish.lifetime = 200
  fish.scale=0.2
  fish.velocityX=-2
   }
function createGoldfish() {
goldfish=createSprite(300,300)
goldfish.addImage(goldfishImg)
goldfish.y = Math.round(random(10,400))
goldfish.lifetime = 200
goldfish.scale = 0.3
goldfish.velocityX=-4
}
function createRedFish() {
redfish=createSprite(300,200)
redfish.addImage(redfishImg)
redfish.y = Math.round(random(10,400))
redfish.lifetime = 200
redfish.scale = 0.3
redfish.velocityX=-4
}
function createBox() {
box=createSprite(300,350)
box.addImage(boxImg)
box.y = Math.round(random(10,400))
box.lifetime = 200
box.scale = 0.2
box.velocityX=-4
box.debug=false;
}


gameOver.scale = 0.8;
gameOver.visible = false;  


function gameOver() {
background(0);
textSize(10)
text("GAME OVER CLICK REFRESH TO RESTART!!!",100,200)
score=0;
redfish.destroy()
fish.destroy()
goldfish.destroy();
shark.destroy();
box.destroy();
horizon.stop();
if(keyisDown("RIGHT_ARROW")) {
  gameState == "play"
}
}