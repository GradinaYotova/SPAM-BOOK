// P_2_3_3_01
//
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw tool. shows how to draw with dynamic elements. 
 * 
 * MOUSE
 * drag                : draw with text
 * 
 * KEYS
 * del, backspace      : clear screen
 * arrow up            : angle distortion +
 * arrow down          : angle distortion -
 * s                   : save png

 */

var x = 0, y = 0;
var stepSize = 5.0;
var letters ="GOOD NEWS TO START YOUR DAY: Woman recovering after rare windpipe transplant from donor. Great Britain’s electricity system has greenest day ever over Easter. Iran receives first AstraZeneca doses through COVAX. AI software composes ‘new’ music by Nirvana, Amy Winehouse, Jimi Hendrix, and other singers in 27 club. Longevity hack: Why coffee before a workout could help your body. Study finds Apple Watch actually can assess some heart conditions. Rise of the 'robo-plants', as scientists fuse nature with tech. Nuts for coco de mer: islanders rally to save world’s biggest seed. Brain waves measured using ear implants for the first time. A Chinese ‘Auntie’ Went on a Solo Road Trip. Now, She’s a Feminist Icon. You need to read how this entrepreneur turned garbage into delicious snacks. Meet the woylie, an eco-engineer bringing life back to degraded ecosystems."
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;


function setup() {
  // use full screen size 
  createCanvas(windowWidth, windowHeight);
  background(255);
  smooth();
  noCursor();
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);

}

function draw() {
  if (mouseOver) {
    var d = dist(x,y, mouseX,mouseY);
    textFont('Mynor');
    textSize(fontSizeMin+d/2)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}


function mouseClicked() {
  saveCanvas('SPAM', 'jpg');
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}