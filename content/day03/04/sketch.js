let size,x ,y,col,ang

function setup() {
  createCanvas(400, 400);
  
  size = 40
  angleMode(DEGREES)
}

function draw() {
  background(0);
  
 
  y= 0
  ang=0
  while (y<height) {
    x= 0
    while (x<width) {
      col = random(255)
      fill(col)
      //rotate(ang)
      //scale(random(0.5,1.5))
      square(x,y,size)
      x= x+size
      ang=ang+1
    }
    y=y+size
  }
  
  
}