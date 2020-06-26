//Global Variables
var bananaImage,obstacleImage,GroundImage;
var obstacleGroup;
var background,score;
var backImage;
var bananaGroup;
function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = 
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")


  
  
  
  
  
  bananaImage = loadImage("Banana.png");
 
  
}
function setup() {
  createCanvas(600,300);
  backG = createSprite(300,30,10,10);
  backG.addImage(backImage);
  backG.velocityX = -3;
  backG.scale = 1;
  
  player = createSprite(100,120,10,10);
  player.addAnimation("running",player_running);
  player.scale = 0.1
  
  invisibleground = createSprite(300,240,600,5)
  invisibleground.visible = false;
  
  score = 0;
  
 bananaGroup = new Group();
  
  
}


function draw(){
 background(255,10,200); 
 
   if (backG.x < 350){
    backG.x = backG.width/2;
  }
   if(keyDown("space") && player.y >= 159){
    player.velocityY = -10 ;
  }
  
     
  
  player.velocityY = player.velocityY + 1.2;
  
  
  player.collide(invisibleground);
    
  
  switch(score){
    case 10:player.scale=0.12;
            break;
    case 20:player.scale=0.14;
            break;
    case 30:player.scale=0.16;
            break;
    case 40:player.scale=0.18;
            break; 
    case 50:player.scale = 0.2
            break;
  }
  spawnObstacles();
  bananas();
   for (var i = 0; i < bananaGroup.maxDepth(); i++) {
  
  var banana = bananaGroup.get(i);
  
  if (banana != null && banana.isTouching(player)) {
    banana.destroy();
    score = score + 1;
  }  
 }     
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:  "+score,450,50)
  count = 0;
}
function bananas(){

if (frameCount % 140 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(145,160));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
  
     
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
     
  }

}
function spawnObstacles(){
if(frameCount % 150 === 0){
   var obstacle = createSprite(600,120,40,10)
    obstacle.y = Math.round(random(320 ,300));
    
    obstacle.scale = 0.05;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    


}
}