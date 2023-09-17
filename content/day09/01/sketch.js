let text = "Zucker";
let font;
let fontSize = 150;
let pnts = [];

function preload() {
  font = loadFont('Sono-Bold.ttf');
}

function setup() {
  createCanvas(1200, 600);
  rectMode(CENTER)

  let bounds = font.textBounds(text, 0, 0, fontSize);
  pnts = font.textToPoints(text, width / 2 - bounds.w / 2, height / 2 + bounds.h / 2, fontSize, {
    sampleFactor: 0.12,
    simplifyThreshold: 0
  })
  // alt + shft + f Code formatieren
  noFill();
}

function draw() {
  background(255);
  
  for (let i = 0; i < pnts.length; i = i + 1) {
    stroke("blue");
    noFill();
    // Rest von i / 5 -> sprich jeder 5. Punkt.
    if (i % 5 == 0) {
      push();
      translate(pnts[i].x, pnts[i].y);
      rotate(radians(pnts[i].alpha + mouseX))
      rect(0, 0, 10, mouseY);
      pop();
    }
    noStroke();
    fill(250, 20, 20, 50);

    push();
    translate(pnts[i].x, pnts[i].y);
    rotate(radians(pnts[i].alpha + mouseX))
    rect(0, 0, 10, mouseY);
    pop();

  }
}

function keyPressed() {
  if (key == 's'){
    save("test.png")
  }
}