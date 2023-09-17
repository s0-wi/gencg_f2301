let ecken = 12;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB)
  background(0)
 
}

function draw() {
  
 
 // background(0)
  
  blendMode(DIFFERENCE)
  
  angleMode(DEGREES)
  translate(width/2, height/2)
  
  for (let s = 0; s<5; s++){
    
    fill(220 * (1-s*0.05), 50, 80);
  
    beginShape()
    for (let i = 0; i < ecken + 3; i++){
      let amp = noise(s, i%ecken, frameCount/100) *300;
      let angle = 360 / ecken;
      let x = cos(i * angle) * amp;
      let y = sin(i * angle) * amp;
      vertex(x, y);
      
    }
  
  endShape();
  }
  
}