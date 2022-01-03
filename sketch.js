var grassImg
var bunnyImg
var carrotImg, appleImg
var bombImg, sticksImg
var apple, carrot
var grass 
var bunny 
var bomb, sticks
var edges
var leftBoundary, rightBoundary

function preload(){
    grassImg = loadImage("grass.jpg");
    bunnyImg = loadImage("rabbit.png");
    carrotImg = loadImage("carrot.png");
    appleImg = loadImage("apple.png");
    bombImg = loadImage("bomb.png");
    sticksImg = loadImage("stick.png");
}

function setup(){
    createCanvas(400,400);
    grass = createSprite(200,200);
    grass.addImage(grassImg);
    grass.velocityY = 3.8;

    bunny = createSprite(180,340,30,30);
    bunny.addImage(bunnyImg);

    leftBoundary = createSprite(0,0,100,800);
    leftBoundary.visible = false

    rightBoundary = createSprite(410,0,100,100);
    rightBoundary.visible = false
}

function draw(){
    background(000000);
    bunny.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);

    if (grass.y > 400){
        grass.y = height/2;
    }
  

    drawSprites();
  
}

