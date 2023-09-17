let ecken = 8;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB)
  
 
}

function draw() {
  
  blendMode(BLEND)
  background(0)
  
  blendMode(DIFFERENCE)
  
  angleMode(DEGREES)
  translate(width/2, height/2)
  
  for (let s = 0; s<4; s++){
    
    fill(267 * (0.2* s ), 100, 100);
  
    beginShape()
    for (let i = 0; i < ecken + 3; i++){
      let amp = noise(s, i%ecken, frameCount/100) *300;
      let angle = 360 / ecken;
      let x = cos(i * angle) * amp;
      let y = sin(i * angle) * amp;
      curveVertex(x, y);
      
    }
  
  endShape();
  }
  
}