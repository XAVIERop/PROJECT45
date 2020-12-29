var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1f5dab32-bfcc-4ee2-ad67-1186c034d06e","6f754fab-3cca-4c66-b560-5bde3c9c56af","38732cd7-839e-4b76-ab31-8b83a69ae76e","4948b13e-d658-4d77-8e65-5c1a88932bdc","99c60e41-eb93-4c65-bb18-51ff57c7fcfa","d1b6949a-8b90-409a-b808-d6e80c09f971","50871ba6-0f62-4617-9064-b22854ca0b68","ce37ad30-55bd-4de5-949f-b8df44fe0ea2","11f88313-ab25-4997-9435-cda302eeeee1"],"propsByKey":{"1f5dab32-bfcc-4ee2-ad67-1186c034d06e":{"name":"apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png"},"6f754fab-3cca-4c66-b560-5bde3c9c56af":{"name":"burger_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zddJI3m4p1M6UcMxS4UHm2qoFOIokA4R/category_food/burger.png","frameSize":{"x":300,"y":262},"frameCount":1,"looping":true,"frameDelay":2,"version":"zddJI3m4p1M6UcMxS4UHm2qoFOIokA4R","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":262},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zddJI3m4p1M6UcMxS4UHm2qoFOIokA4R/category_food/burger.png"},"38732cd7-839e-4b76-ab31-8b83a69ae76e":{"name":"orange_1","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"4948b13e-d658-4d77-8e65-5c1a88932bdc":{"name":"pizza_slice_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iOS_nMvxJd1wwEe8Ca9C9ce9gjlyc7ON/category_food/pizza_slice.png","frameSize":{"x":300,"y":200},"frameCount":1,"looping":true,"frameDelay":2,"version":"iOS_nMvxJd1wwEe8Ca9C9ce9gjlyc7ON","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":200},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iOS_nMvxJd1wwEe8Ca9C9ce9gjlyc7ON/category_food/pizza_slice.png"},"99c60e41-eb93-4c65-bb18-51ff57c7fcfa":{"name":"bannana_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ccpZZOVIGskbfrQGMrryQFkMKlec5.T5/category_food/bannana.png","frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"ccpZZOVIGskbfrQGMrryQFkMKlec5.T5","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ccpZZOVIGskbfrQGMrryQFkMKlec5.T5/category_food/bannana.png"},"d1b6949a-8b90-409a-b808-d6e80c09f971":{"name":"fish_cooked_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MVj7jyDzowUFvq4s_BhQsntSnfQIwGtB/category_food/fish_cooked.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"MVj7jyDzowUFvq4s_BhQsntSnfQIwGtB","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MVj7jyDzowUFvq4s_BhQsntSnfQIwGtB/category_food/fish_cooked.png"},"50871ba6-0f62-4617-9064-b22854ca0b68":{"name":"snake","sourceUrl":"assets/v3/animations/H_sI33OGYPnljqfL5EfzWqHffg3f-9wGrZ4T_L2bRus/50871ba6-0f62-4617-9064-b22854ca0b68.png","frameSize":{"x":900,"y":1083},"frameCount":1,"looping":true,"frameDelay":4,"version":"TSQiN3DaZojQwv.UinUQ3h4HhOpnT_Oq","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":1083},"rootRelativePath":"assets/v3/animations/H_sI33OGYPnljqfL5EfzWqHffg3f-9wGrZ4T_L2bRus/50871ba6-0f62-4617-9064-b22854ca0b68.png"},"ce37ad30-55bd-4de5-949f-b8df44fe0ea2":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"},"11f88313-ab25-4997-9435-cda302eeeee1":{"name":"snake1","sourceUrl":"assets/v3/animations/H_sI33OGYPnljqfL5EfzWqHffg3f-9wGrZ4T_L2bRus/11f88313-ab25-4997-9435-cda302eeeee1.png","frameSize":{"x":291,"y":338},"frameCount":1,"looping":true,"frameDelay":4,"version":"bWAtA1QRgOCue7j2sMaNHuqqWYeAVgJn","loadedFromSource":true,"saved":true,"sourceSize":{"x":291,"y":338},"rootRelativePath":"assets/v3/animations/H_sI33OGYPnljqfL5EfzWqHffg3f-9wGrZ4T_L2bRus/11f88313-ab25-4997-9435-cda302eeeee1.png"}}};
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

var w = 10;
var speed = 15;
var t = 1;
var lining = createSprite(0,34,1000,7);
lining.shapeColor = "white";

var anime = createSprite(195,20);
anime.setAnimation("snake1");
anime.scale=0.090;

var obstacle = createSprite(randomNumber(10,390),randomNumber(50,390),10,10);
  obstacle.setAnimation("apple_1");
  obstacle.scale = 0.2;


var group = createGroup();


var snake = createSprite(200, 200, w, w);
snake.shapeColor=rgb(randomNumber(100,255),100,100);


createEdgeSprites();

group.add(snake);

var lastTime = 0;

var gameOver = 0;

var goal =0;

var gameState = "serve";

textFont("comic sans ms");

function draw() {
  
  //defining background
background("black");



//calling functions
goaling();
spawnFoodies();


World.frameRate = speed;


//serve state
if (gameState === "serve") {
   
 textSize(14);
fill("rgb(255, 200, 20)"); 
 
  text("Press Space to start",130,80);
  
  textSize(13);
  text("Please reset the game if snake doesn't elongates", 60, 100)
  
  obstacle.visible = false
  snake.visible = false
  }
  snake.se
  
    
    
   //space key function
   if (keyDown("space") && gameState === "serve") {
   
    
    if(keyDown("space")){
    snake.velocityX = w;
    }
    
  gameState = "play";
    
  }
  
  if(gameState === "play"){
  over();
  obstacle.visible = true;
  snake.visible = true;
  }
 
 
  
   border();
 
  
   
   
  drawSprites();
}

function over(){
  if (!gameOver) {
    // die, if we hit snake collides with its own body or edges
    if (edges.isTouching(snake)  ||  group.isTouching(snake) || lining.isTouching(snake))  {
      playSound("assets/category_digital/hop.mp3", false);
      
      //reset()
      gameOver = 1;
      snake.setSpeedAndDirection(0,0);
    }
  }
   if (!gameOver) {
  
    // inc snake length with every t seconds
    if (World.seconds == (lastTime + t)) {
      lastTime = World.seconds;
      
      var s = createSprite(200,200, w, w);
      s.shapeColor=rgb(randomNumber(100,255),100,100);
      
      group.add(s);
      
    }
    
    // increasing snake length
    for (var i = group.length - 1; i > 0; i--) {
      group.get(i).x = group.get(i-1).x;
      group.get(i).y = group.get(i-1).y;
  
    }
  
    // move the snake  
    if (keyDown("up")) {
       snake.setSpeedAndDirection(w, -90);
    }
    if (keyDown("down")) {
       snake.setSpeedAndDirection(w, 90);
    }snake
    if (keyDown("left")) {
       snake.setSpeedAndDirection(w, 180);
    }
    if (keyDown("right")) {
       snake.setSpeedAndDirection(w, 0);
    }
  }
  else {
    fill("red");
    textSize(20);
    
    text("GAME OVER",150,200);
    
}
}



function border(){
  
  
strokeWeight(5);
stroke("white");
//outer borders
line(2,0,397,0);
line(2,0,2,398);
line(2,398,397,398);
line(397,398,397,0);
  
  //inner borders
  
  
  //seperating line
for (var i = 0; i < 34; i=i+20) {
  line(220,i,220,i+10);
  }
}


function goaling(){
  if(snake.isTouching(obstacle)){
   goal = goal+1;
    
  }
  fill("yellow");
  textSize(22);
  text("SCORE: "  +goal + "/100",235,30);
  
  fill("white");
  
  textSize(25);
  text("SNAKE GAME "  ,10,30);
}

function spawnFoodies(){
  //spawn random food items for the snake to eat
  if(snake.isTouching(obstacle)){
var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : obstacle.setAnimation("apple_1");
      obstacle.x = randomNumber(10,390);
      obstacle.y = randomNumber(50,390);
        break;
        case 2 : obstacle.setAnimation("burger_1");
        obstacle.x = randomNumber(10,390);
      obstacle.y = randomNumber(50,390);
        break;
        case 3 : obstacle.setAnimation("orange_1");
        obstacle.x = randomNumber(10,390);
      obstacle.y = randomNumber(50,390);
        break;
        case 4 : obstacle.setAnimation("pizza_slice_1");
        obstacle.x = randomNumber(10,390);
      obstacle.y = randomNumber(50,390);
        break;
        case 5 : obstacle.setAnimation("bannana_1");
        obstacle.x = randomNumber(10,390);
      obstacle.y = randomNumber(50,390);
        break;
        case 6 : obstacle.setAnimation("fish_cooked_1");
        obstacle.x = randomNumber(10,390);
      obstacle.y = randomNumber(50,390);
        break;
        default: break;
        
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
