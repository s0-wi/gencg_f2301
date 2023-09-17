let x, y, n, c, ecken, t, maserung, strich


function setup() {
  createCanvas(2000, 1000);
  background(255)
  x = width /2 
  y = height /2
  n = 0
  t=1
  ecken = 24
  maserung = 5
  strich = 0.1

  noFill()
  colorMode(HSB)
  
angleMode(DEGREES)
  smooth()
  pixelDensity(2)

}

function draw() {
  

  x = lerp(x, mouseX, 0.01)
  y = lerp(y, mouseY, 0.01)

  translate(x,y)
  
  strokeWeight(strich)
  stroke(0,t)
  noFill()
  beginShape()
  
  for (let i = 0; i < ecken +3 ; i++){
    let amp = noise((i%ecken)/maserung, frameCount/150) *100;
    let angle = 360 / ecken;
    let vx = cos(i * angle) * amp;
    let vy = sin(i * angle) * amp;
    curveVertex(vx, vy);
    
  }
  endShape()
  
}
function keyPressed() {
  if (key == 's') {
    save("test.png")
    noLoop()
  }
  if (key =="q"){
    t = t-0.05
  }
    if (key =="w"){
    t = t+0.05
  }
      if (key =="t"){
    maserung = maserung-0.1
  }
      if (key =="z"){
    maserung = maserung+0.1
  }
  if (key =="e"){
    strich = strich-0.05
  }
    if (key =="r"){
    strich = strich+0.05
  }
}

function mouseClicked() {
  console.log(mouseX/width, mouseY/height/2)
}