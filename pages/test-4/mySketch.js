let blocks = [];
let graphics;
let letters = "How to Get Your Heart and Your Brain on the Same Page? How we can hallucinate our way back to sanity How Can We Address Gender Inequity in Artificial Intelligence? How could design help home buyers better understand mortgages? What does it mean to “humanise” technology? How My Brain-Damaged Mother Changed How I Look at Interface Design? How Spotify’s Algorithm Knows Exactly What You Want to Listen To? Could the No Code Movement Put Programmers Out of a Job? How Tech Companies Can Make Their Products Less Addictive? Is Pypolars the New Alternative to Pandas? What happened if computer vision passes the Turing test? What is The Unintentional Racism Found in Traffic Signals? How long is now?";
let counter = 0;
let char;
let loaded_num = 0;

function setup() {
	createCanvas(windowWidth,windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	graphics = createGraphics(width, height);
	graphics.noStroke();
	for (let i = 0; i < width * height * 3 / 100; i++) {
		let x = random(width);
		let y = random(height);
		let w = random(3);
		let h = random(3);
		let a = random(TWO_PI);
		graphics.fill(random(255), 30);
		graphics.push();
		graphics.translate(x, y);
		graphics.rotate(a);
		graphics.ellipse(0, 0, w, h);
		graphics.pop();
		background(255);
		noCursor();
	}
	matter.init();
	platform = matter.makeBarrier(width / 2, height, width, 50);
	platform2 = matter.makeBarrier(12.5, height / 2.5, 25, height);
	platform3 = matter.makeBarrier(width - 12.5, height / 2.5, 25, height);
}

function makeNekodearu(x, y, d) {
	tSize = random(d / 4, d);
	textSize(tSize);
	textFont('Kobe');
char = letters.substr(counter++%letters.length, 1).toUpperCase();
	let b = matter.makeSign(char, x, y);
	b.textSize = tSize;
	blocks.push(b);
}


function draw() {
	clear();
	background(0);

	// noStroke();
	// platform.show();
	// platform2.show();
	// platform3.show();

	if (frameCount % 50 == 0) {
		let d = random(width/10,width / 5);
		let x = random(d/2,width-d/2);
		let y = random(d/2,height / 8-d/2);
		makeNekodearu(x, y, d);
	}

	for (let i = blocks.length - 1; i >= 0; i--) {
		fill(i%360, 100, 100);
		// fill(0);
		let b = blocks[i];
		// print(b);
		let p = b.body.position;
		// fill(p.x%360, 100, 100);
		fill(255);
		push();
		translate(p.x, p.y, 0);
		rotate(b.body.angle);
		textAlign(CENTER, CENTER);
		textStyle(BOLD);
		textSize(b.textSize);
		text(b.text, 0, 0);
		pop();
		if (b.isOffCanvas()) {
			matter.forget(b);
			blocks.splice(i, 1);
		}
	}
}


function mouseClicked() {
 makeNekodearu(mouseX, mouseY, random(width / 10, width / 5));
 saveCanvas('SPAM', 'jpg');
}

