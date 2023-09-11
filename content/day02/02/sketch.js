function setup() {




 
}

function draw() {

  createCanvas(400, 400);
  angleMode(DEGREES);
  let triangleSize = 150;
  let centerX = width / 2;
  let centerY = height / 2;
  let angle = 30;

  // Calculate the coordinates for the three points of the triangle
  let x1 = centerX + cos(angle) * triangleSize;
  let y1 = centerY + sin(angle) * triangleSize;
  let x2 = centerX + cos(angle + 120) * triangleSize;
  let y2 = centerY + sin(angle + 120) * triangleSize;
  let x3 = centerX + cos(angle + 240) * triangleSize;
  let y3 = centerY + sin(angle + 240) * triangleSize;

   // Draw the lines to form the triangle
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x1, y1);

  let hr = hour();
  let mn = minute();
  let sc = second()

  let mappedSc = map(sc, 0, 60, 0, triangleSize);
  let mappedMn = map(mn, 0, 60, 0, triangleSize);
  let mappedHr = map(hr, 0, 24, 0, triangleSize);

  let xSc = x1 + cos(angle) * mappedSc;
  let ySc = y1 + sin(angle) * mappedSc;
  let xMn = centerX + cos(angle + 120) * mappedMn;
  let yMn = centerY + sin(angle + 120) * mappedMn;
  let xHr = centerX + cos(angle + 240) * mappedHr;
  let yHr = centerY + sin(angle + 240) * mappedHr;

  strokeWeight(3)
  stroke(0)
  line(x1, y1, xSc, ySc);
  line(x2, y2, xMn, yMn);
  line(x3, y3, xHr, yHr);

}
