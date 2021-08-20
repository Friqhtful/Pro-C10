var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var gameState = "serve";
// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

//creating scores
var cScore=0;
var pScore=0;
  gameState=="serve";
playerMallet.velocityX=0;
playerMallet.velocityY=0;
function draw() {

  //clear the screen
  background("green");

if(gameState=="serve"){
  textSize(25);
      fill("black");
      text("Press space to start!", 100, 130);
 if (keyDown("space")) {
    serve();
 }
  if(keyWentDown("space")){
    gameState="play";
  }
}
if(gameState=="serve2"){
  if (keyDown("space")) {
    serve();
 }
 if(keyWentDown("space")){
    gameState="play";
  }
}
if(gameState=="play"){
   paddleMovement();
   if (keyDown("space")) {
    serve();
 }
}
 
if(cScore>4||pScore>4){
   textSize(25);
      fill("black");
      text("Game over!", 140, 130);
      striker.x=200;
      striker.y=200;
      playerMallet.x=200;
      playerMallet.y=50;
 }
 
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;

  //serve the striker when space is pressed
  if(striker.isTouching(goal1)){
  playerMallet.x=200;
  playerMallet.y=50;
  cScore=cScore+1;
  striker.velocityY=0;
  striker.velocityX=0;
  striker.x=200;
  striker.y=200;
  gameState="serve2";
}
if(striker.isTouching(goal2)){
   playerMallet.x=200;
  playerMallet.y=50;
  pScore=pScore+1;
  striker.velocityY=0;
  striker.velocityX=0;
  striker.x=200;
  striker.y=200;
  gameState="serve2";
}
 
   
   
    
      
     
    
textSize(25)
fill("black")
text(pScore, 20, 185)
text(cScore, 20, 235)

  
 
 
 
 
  
  
  
 
  
 

  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  

 
  
  
  
 
  drawSprites();
}






function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("LEFT_ARROW")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("RIGHT_ARROW")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("UP_ARROW")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("DOWN_ARROW")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
