function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
		Dw.EasyCam.prototype.apply = function(n) {
    var o = this.cam;
    n = n || o.renderer,
    n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
  };
	cam = createEasyCam()
	word = "The cameraphone added a new pose to the vocabulary of street styles. The cameraphone photographer is identified by a pose in which the phone is held at arm length, pointing the back of the phone at the object of the photograph, while staring at the screen. "
	letters = []
	for(let letter of word){
		let temp = new Word3D(letter, 4, 7, 50)
		temp.angle = random(0, 10)
		letters.push(temp)
	}
	spacing = 40;
	r = 3;
	noCursor();
}

function draw() {
	normalMaterial();
	background(255);
	translate(-spacing*word.length*0.2,0,0)
	for(let letter of letters){
		translate(spacing,0,0)
		push();	
		translate(0,100*tan(letter.angle),0)	
		rotateY(letter.angle*2);
		letter.show()
		letter.angle += 0.02
		pop()
	}	
}

function mouseClicked() {
 saveCanvas('SPAM', 'jpg');
}