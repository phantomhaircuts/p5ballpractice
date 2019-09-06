// declare variables
let x,y,xdir,ydir,ball;

//starting rgb values
let [r,g,b] = [50,168,166]

function setup() {
  createCanvas(800,500)
  x = width/2;
  y =  height/2;
  xdir = 3;
  ydir = 5;
}

function draw() {
  //create a ball
  background(0);
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 80,80);

  //set the ball in motion
  x = x + xdir;
  y = y + ydir;

  //have the ball it bounce if it hits a wall
  if(y > height || y < !height) {
    ydir = -ydir;
  }
  if (x > width || x < !width){
    xdir = -xdir;
  }
}

//ball color changes on click
function mousePressed() {
  //if mouse intersects X value with within the radius of the ball change color.
  let d = dist(mouseX, mouseY, x, y);
  if (d < 80){
    [r,g,b] = [random(255),random(255),random(255)];
  }
}
