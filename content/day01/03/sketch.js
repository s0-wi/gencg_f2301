let col_size, row_size,x ,y 

function setup() {
  createCanvas(400, 400);
  
  col_size = 40
  row_size = 40

}

function draw() {
  background(0);
  
  x= col_size
  while (x<width) {
    stroke(200)
    strokeWeight(2)
    line(x, 0,x,height )
    x=x+col_size
  }
  
  y = row_size
  while (y <height) {
    stroke(200)
    strokeWeight(2)
    line(0 , y ,width ,y )
    y=y+row_size
  }
  
  
}