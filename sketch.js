let img;

function preload() {
img = loadImage('House Frame 3-min.png');
}

function setup() {
createCanvas(800, 450);
img.resize(800, 450);
}

function draw() {
background(220);
image(img, 0, 0);

////structure

line(238, 178, 238, 220);
strokeWeight(4);
stroke('yellow');

line(231, 176, 242, 173);
strokeWeight(4);
stroke('yellow');

  line(242, 173, 251, 173);
strokeWeight(4);
stroke('yellow');
  
    line(251, 173, 275, 166);
strokeWeight(4);
stroke('yellow');

  line(275, 166, 342, 164);
strokeWeight(4);
stroke('yellow');
  
   line(342, 164, 342, 143);
strokeWeight(4);
stroke('yellow');
  
  line(332, 141, 456, 137);
strokeWeight(4);
stroke('yellow');
  
  line(456, 137, 454, 130);
strokeWeight(4);
stroke('yellow');

  line(454, 130, 550, 127);
strokeWeight(4);
stroke('yellow');
  
    line(540, 127, 542, 153);
strokeWeight(4);
stroke('yellow');
  
    line(542, 153, 645, 150);
strokeWeight(4);
stroke('yellow');
  
    line(645, 150, 705, 145);
strokeWeight(4);
stroke('yellow');
  
    line(705, 145, 800, 154);
strokeWeight(4);
stroke('yellow');
  
   line(795, 154, 795, 217);
strokeWeight(4);
stroke('yellow');
  
  

////posts

line(250, 223, 250, 265);
strokeWeight(4);
stroke('yellow');

line(263, 223, 263, 265);
strokeWeight(4);
stroke('yellow');

 line(302, 223, 302, 265);
strokeWeight(4);
stroke('yellow');

 line(315, 223, 315, 265);
strokeWeight(4);
stroke('yellow');

 line(370, 223, 370, 268);
strokeWeight(4);
stroke('yellow');

 line(385, 223, 385, 268);
strokeWeight(4);
stroke('yellow');

 line(445, 223, 445, 270);
strokeWeight(4);
stroke('yellow');


 line(460, 223, 460, 270);
strokeWeight(4);
stroke('yellow');

 line(528, 223, 528, 274);
strokeWeight(4);
stroke('yellow');

 line(543, 223, 543, 274);
strokeWeight(4);
stroke('yellow');

 line(611, 223, 611, 274);
strokeWeight(4);
stroke('yellow');

 line(625, 223, 625, 274);
strokeWeight(4);
stroke('yellow');

line(696, 222, 696, 270);
strokeWeight(4);
stroke('yellow');



// ///post tops

line(265, 223, 301, 222);
strokeWeight(4);
stroke('yellow');

line(316, 222, 369, 222);
strokeWeight(4);
stroke('yellow');

line(386, 222, 444, 222);
strokeWeight(4);
stroke('yellow');

line(460, 222, 528, 222);
strokeWeight(4);
stroke('yellow');

line(543, 222, 610, 222);
strokeWeight(4);
stroke('yellow');

line(626, 222, 694, 222);
strokeWeight(4);
stroke('yellow');
  
  line(250, 222, 238, 222);
strokeWeight(4);
stroke('yellow');

///text

fill(0);
textSize(32);
textFont('bebas kai');
text('House Frame 3', 620, 430);

}