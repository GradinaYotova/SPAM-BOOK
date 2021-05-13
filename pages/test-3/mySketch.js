var b = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  noCursor();

  for (var i = 0; i < 10; i++) {
    b[i] = new T(random(width / 2 ), random(height))
  }
}

function draw() {
  for (var i = 0; i < b.length; i++) {
    b[i].update()
    b[i].show()
  }
}


function T(x, y) {
  this.pos = createVector(x, y)
  this.acc = p5.Vector.random2D()
  this.angle = 10
  this.s = 300

  this.update = function() {
   
    this.pos.x += cos(this.angle);
    this.pos.y += sin(this.angle);
    this.angle += random(-0.2, 0.2);
    this.s += 0.3

    this.pos.add(this.acc)
      // this.pos.rotate(random(-1,1))

    if (this.x > width) this.x = 0
    if (this.x < 0) this.x = width / 6
    if (this.y > height) y = 0
    if (this.y < 0) y = height / 6
  }

  this.show = function() {
    fill(255)
    stroke(random(0,255),random(0,255),random(0,255))
      // ellipse(this.pos.x,this.pos.y,10)
      // stroke(this.s % 255, 80, 0, 10)
      // fill(s % 255, 0, 0)
      // arc(x, y, s, s, 0, PI * 2)
    textSize(this.s)
    text("new today", this.pos.x, this.pos.y)
  }

}

function mouseClicked() {
  redraw();
  saveCanvas('SPAM', 'jpg');
}
