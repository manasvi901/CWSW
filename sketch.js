var f;
var mr;
var w;
var s;

function setup() {
  createCanvas(800,400);
f= createSprite(1500, 200, 60, height/2);
mr = createSprite(50,200,50,50);
f.shapeColor = "red"
mr.shapeColor = "red"
s = random(55,90)
w = random(400,1500)
}

function draw() {
  background(0,0,0); 

  mr.velocityX = s;

  if (isTouching(mr,f,fr,pr)){
    f.shapeColor = "yellow"
    mr.shapeColor = "yellow"  
  }
  else {
    f.shapeColor = "red"
mr.shapeColor = "red"
  }

if (f.x-mr.x<(mr.width+f.width)/2){
  mr.velocityX=0;
  var d = 0.5*w*s*s/22509;
  
  if (d>180)
  {
mr.shapeColor = color(255,0,0);
  }
  
  if (d<180 && d>100)
{
mr.shapeColor = color(230,230,0);
}

if (d<100)
{
mr.shapeColor = color(0,255,0);
}

}

  drawSprites();
}

