let x, y, n

let font

function preload() {
  font = loadFont("BluuNext-Bold.otf")

}

function setup() {
  createCanvas(800, 800);
  background(20)
  x = 200
  y = height/2
  n = 0

  fill(247, 140, 164, 12)
  noStroke()
  strokeWeight(0.09)

  textFont(font)
  textSize(100)

}

function draw() {
  //n = noise(x/100 ,y/200) + (n/2)
  //x += sin(n*4*PI)
  //y += cos(n*4*PI)
  x = lerp(x, mouseX, 0.01)
  y = lerp(y, mouseY, 0.01)
  //rect(x,y, 50)
  text("Don't Panic!",x,y)

}
function keyPressed() {
  if (key == 's') {
    save("test.png")
  }
}
