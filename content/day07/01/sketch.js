let url = "https://source.unsplash.com/random/400x400/?food"
let img;

function preload() {
  img = loadImage(url);
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}
function draw() {
  background(255);

  let gridX = width / int(map(mouseX, 0, width, 100, 1, true))
  let gridY = height / int(map(mouseY, 0, height, 100, 1, true))
  
 // let gridX = constrain(mouseX, 1, width);
  //let gridY = constrain(mouseY, 1, height);
  
  for (let x = 0; x < width; x += gridX) {
    for (let y = 0; y < height; y += gridY) {
      fill(img.get(x, y))
      rect(x, y, gridX, gridY);
    }
  }
}

function mousePressed() {
  fetch(url).then(
    function (response) {
      img = loadImage(response.url);
    });
}



