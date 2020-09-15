var bulet
var wall
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(53,82)
  weight=random(223,321)
  thickness = random(22,83)
  bullet = createSprite(50,200,50,50)
  bullet.velocityX = speed;
  wall = createSprite(1400,200,60,200)
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0,0,0);  
  drawSprites();
  if(bullet.isTouching(wall)&& 0.5 * weight * speed * speed/(thickness*thickness*thickness) < 10) {
    bullet.shapeColor = color(0,255,0)
    bullet.velocityX = 0
  }
  if(bullet.isTouching(wall)&& 0.5 * weight * speed * speed/(thickness*thickness*thickness) > 10) {
    bullet.shapeColor = color(255,0,0)
    bullet.velocityX = 0
  }
}