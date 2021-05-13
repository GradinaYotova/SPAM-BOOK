let num = 5;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	textAlign(CENTER, CENTER);
	textFont('Beastly');
	noCursor();
	for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
		alphabet[i] = char(counter).toUpperCase();
		counter++;
	}
}

function draw() {
	for (let y = 0; y < height; y += height / num) {
		for (let x = 0; x < width; x += width / num) {
			textSize(random(100, 1000));
			drawingContext.save();
			noStroke();
			fill(random(0,255), random(0,255), random(0,255));
			rect(x, y, height );
			drawingContext.clip();
			// fill(random(0,255), random(0,255), random(0,255));
			fill(255);
			push();
			translate(x + height / num / 2, y + height / num / 2);
			rotate(90 * int(random(0, 3)));
			text(alphabet[int(random(alphabet.length - 1))], 0, 0);
			drawingContext.restore();
			pop();
		}
	}

	// noLoop();
}

function mouseClicked() {
  saveCanvas('SPAM', 'jpg');
}



