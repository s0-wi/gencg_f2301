let stemlength, stemwidth, ball_color;

function setup() {
  stemwidth = 20;
  stemheight = 70;
  ball_color = 0;
  ("colorMode(HSB)");

  createCanvas(500, 500);
}

function draw() {
  background(220);

  noStroke();
  fill("brown");
  rect(
    width / 2 - stemwidth / 2,
    height / 2 + stemheight / 2,
    stemwidth,
    stemheight
  );

  noStroke();
  fill("green");
  vertex(width / 2 - 60, height / 2 + stemheight / 2);
  vertex(width / 2 + 60, height / 2 + stemheight / 2);
  vertex(width / 2, height / 2 + stemheight / 2 - 200);
  endShape(CLOSE);

  noStroke();
  fill((ball_color + 120) % 360, 50, 50);
  circle(210, 250, 30);
  ball_color++;

  noStroke();
  fill((ball_color + 240) % 360, 50, 50);
  circle(260, 150, 40);
  ball_color++;

  noStroke();
  fill(ball_color % 360, 50, 50);
  circle(270, 210, 50);
  ball_color++;
}
