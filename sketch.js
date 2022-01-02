var grassImg
var bunnyImg
var carrotImg, appleImg
var bombImg, sticksImg
var apple, carrot
var grass 
var bunny 
var bomb, sticks

function preload(){
grassImg = loadImage("grass.jpg");
// bunnyImg = loadImage("favpng_easter-bunny-bugs-bunny-hare-rabbit-clip-art.png");
// carrotImg = loadImage("carrot-17697.png");
// appleImg = loadImage("SeekPng.com_apple-cartoon-png_1095833.png");
// bombImg = loadImage("bomb-gf69a29837_1280.png");
// sticksImg = loadImage("pngwing.com.png");
}

function setup(){
    createCanvas(400,400);

    path=createSprite(400,400);
    path.addImage(pathImg);

    bunny=createSprite(180,340,30,30);
    bunny.addImage(bunnyImg);






}

function draw(){
  
}

