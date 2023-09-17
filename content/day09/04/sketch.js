let x, y, n, c

let font

function preload() {
  font = loadFont("BluuNext-Bold.otf")

}

function setup() {
  createCanvas(800, 800);
  background(0)
  x = 300
  y = 500
  n = 0
  c = 0

  noFill()
  colorMode(HSB)
  strokeWeight(0.08)

  textFont(font)
  textSize(500)

}

function draw() {
  n = noise(x/100 ,y/200) + (n/2)
  x += sin(n*4*PI)/1.5
  y += cos(n*4*PI)/1.5

  stroke(c%360, 50, 50)
  //rect(x,y, 50)
  text("G",x,y)
  c++
}
function keyPressed() {
  if (key == 's') {
    save("test.png")
  }
}
