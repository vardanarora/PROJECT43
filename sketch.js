var iss,spacecraft,bg,issimg,sciimg,sciimg1,sciimg2,sciimg3;
var hasDock = false;

function preload(){
  bg = loadImage("space.jpg");
issimg = loadImage("iss.png");
sciimg = loadImage("spacecraft1.png");
sciimg1 = loadImage("spacecraft2.png");
sciimg2 = loadImage("spacecraft3.png");
sciimg3= loadImage("spacecraft4.png");
}
function setup(){
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(sciimg);
  spacecraft.scale = 0.15;
iss = createSprite(330,130);
iss.addImage(issimg);
iss.scale = 0.25;
}

function draw(){
  background(bg);
  spacecraft.addImage(sciimg);
  if(!hasDock){
    spacecraft.x = spacecraft.x + random(-1,1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
    }
    if(keyDown("LEFT_ARROW")){ 
      spacecraft.addImage(sciimg3);
      spacecraft.x = spacecraft.x -1;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sciimg2);
      spacecraft.x = spacecraft.x +1;
    }
  
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(sciimg1);
  }
}
if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
  hasDock = true;
  textSize(20);
  fill("white")
  text("DOCKING SUCCESSFULL",200,300);
}
drawSprites();}
