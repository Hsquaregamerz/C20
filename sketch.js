var FR,MR;





function setup() {
  createCanvas(800,400);

FR=createSprite(200,200,50,100);
FR.shapeColor="red"
MR=createSprite(200,200,100,50);
MR.shapeColor="red"
}

function draw() {
  background(255,255,255);  

MR.x=World.mouseX;
MR.y=World.mouseY;

if(MR.x-FR.x<FR.width/2+MR.width/2 && FR.x-MR.x<FR.width/2+MR.width/2 && MR.y-FR.y<FR.height/2+MR.height/2 && FR.y-MR.y<FR.height/2+MR.height/2){
  FR.shapeColor="yellow"
  MR.shapeColor="yellow"
}
else{
  FR.shapeColor="red"
  MR.shapeColor="red"
}

  drawSprites();
}