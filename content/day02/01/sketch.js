function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
  }
  
  function draw() {

    background(255)
    
    fill(150)
    noStroke()
    rect(240, 100, 20, 400);
    rect(290, 100, 20, 400);
    rect(340, 100, 20, 400);

    let hr = hour();
    let mn = minute();
    let sc = second();

    // Map seconds (0 to 59) to a range of 0 to 500 pixels
    let mappedSc = map(sc, 0, 60, 0, 400);
    let mappedMn = map(mn, 0, 60, 0, 400);
    let mappedHr = map(hr%12, 0, 12, 0, 400);

    stroke(0)
    strokeWeight(2)

    fill(0)
    noStroke()
    rect(240, 100, 20, 400-mappedHr);
    rect(290, 100, 20, 400-mappedMn);
    rect(340, 100, 20, 400-mappedSc);

   /* line(190, 500-mappedSc, 210, 500-mappedSc);
    line(290,500-mappedMn, 310, 500-mappedMn);
    line(390, 500-mappedHr, 410, 500-mappedHr);
    */
 }
