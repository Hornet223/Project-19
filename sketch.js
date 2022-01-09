var grassImg
var bunnyImg
var carrotImg, appleImg
var bombImg, sticksImg
var apple, carrot
var grass 
var bunny 
var bomb, stick
var edges
var leftBoundary, rightBoundary
var points = 0;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
    grassImg = loadImage("grass.jpg");
    bunnyImg = loadImage("rabbit.png");
    carrotImg = loadImage("carrot.png");
    appleImg = loadImage("apple.png");
    bombImg = loadImage("bomb.png");
    sticksImg = loadImage("stick.png");
}

function setup(){
    createCanvas(500,800);
    grass = createSprite(200,200, 300, 10);
    grass.addImage(grassImg);
    bunny = createSprite(180,340,30,30);
    bunny.addImage(bunnyImg);
    bunny.scale = 0.1;

    leftBoundary = createSprite(0,0,100,800);
    leftBoundary.visible = false

    rightBoundary = createSprite(410,0,100,100);
    rightBoundary.visible = false

    apple = new Group();
    stick = new Group();
    carrot = new Group();
    bomb = new Group();
}

function draw(){

    if (gameState === PLAY){
        background(000000);
        bunny.x = mouseX;
    }

    if (grass.y > height){
        grass.y = height/2;
    }

    createApple();
    createBomb();
    createCarrot();
    createStick();

    if (apple.isTouching(bunny)) {
        apple.destroyEach();
        points = points + 10
    }
    else if (carrot.isTouching(bunny)) {
        carrot.destroyEach();
        points = points + 10
    }
    else if (stick.isTouching(bunny)) {
        stick.destroyEach();
        points = points - 10
    }
    else if(bomb.isTouching(bunny)) {
        gameState = END;

        apple.destroyEach();
        bomb.destroyEach();
        stick.destroyEach();
        carrot.destroyEach();
        
        carrot.setVelocityYEach(0);
        bomb.setVelocityYEach(0);
        stick.setVelocityYEach(0);
        apple.setVelocityYEach(0);
    }

    bunny.collide(leftBoundary);
    bunny.collide(rightBoundary);
    grass.velocityY = 1;

    if (grass.y > 400){
        grass.y = height/2;
    }
  

    drawSprites();
    textSize(20);
    fill(255);
    text("Points: "+ points,width-150,30);

    function createApple() {
        if (World.frameCount % 200 == 0) {
        var apple = createSprite(Math.round(random(50, width-50),40, 10, 10));
        apple.addImage(appleImg);
        apple.scale=0.12;
        apple.velocityY = 5;
        apple.lifetime = 200;
        apple.add(apple);
        }
      }
      
      function createCarrot() {
        if (World.frameCount % 320 == 0) {
        var carrot = createSprite(Math.round(random(50, width-50),40, 10, 10));
        carrot.addImage(diamondsImg);
        carrot.scale=0.03;
        carrot.velocityY = 5;
        carrot.lifetime = 200;
        carrot.add(carrot);
      }
      }
      
      function createBomb() {
        if (World.frameCount % 410 == 0) {
        var bomb = createSprite(Math.round(random(50, width-50),40, 10, 10));
        bomb.addImage(jwelleryImg);
        bomb.scale=0.13;
        bomb.velocityY = 5;
        bomb.lifetime = 200;
        bomb.add(bomb);
        }
      }
      
      function createStick(){
        if (World.frameCount % 530 == 0) {
        var stick = createSprite(Math.round(random(50, width-50),40, 10, 10));
        stick.addImage(swordImg);
        stick.scale=0.1;
        stick.velocityY = 4;
        stick.lifetime = 200;
        stick.add(stick);
        }
  
    }

