let t = 'WHY ARE TARGET ADDS SO TERRIBLE?';
let angle = 0;
let hue = 0;
let hue2 = 180;

function setup() {
	createCanvas(windowWidth,windowHeight);
	colorMode(HSB);
	noCursor();
}

function draw() {
	background(255, 0.1);
	
	textSize(70);
	textFont('Atiba');
	let startX = (width - textWidth(t)) / 2;
	let currentX = startX;
	let a = angle;
	if (frameCount % 5 == 0) {
		hue = (hue + 5) % 360;
	}
	if (frameCount % 5 == 0) {
		hue2 = (hue2 + 5) % 360;
	}
	
	let h = hue;
	
	for (let i = 0; i < t.length; i++) {
		let chr = t.charAt(i);
		let y = height / 2 + (sin(a)  * mouseY);
		fill(h, 100, 100, mouseY);
		text(chr, currentX, y);
		h += 1;
		currentX += textWidth(chr);
		a += mouseX / 80;
	}
	
	angle -= 0.1;
}


function mousePressed() {
	save('SPAM.jpg');
}