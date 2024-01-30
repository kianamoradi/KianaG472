function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(102);

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 400.0);
  polygon(0, 0, 80, 3);
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
