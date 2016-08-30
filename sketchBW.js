var redHue = 0;
var greenHue = 0;
var blueHue = 0;
var sizeTimer = 50;
var randomHue = 0;
var i=0;
var e=0;
var canSize=600;

function setup() {
  createCanvas(canSize, canSize);
}

function draw() {
    if (mouseIsPressed) {
      fill (0);
      }

    else {
          fill(redHue);
          redHue = redHue +1;
          greenHue = greenHue +2;
          blueHue = blueHue +3
          sizeTimer = sizeTimer + 3;
          canSize = canSize + 1;

            for(i=0;sizeTimer > 100;randomHue++) {
              redHue = (Math.floor((Math.random() * 322) + 20));
              greenHue = (Math.floor((Math.random() * 250) + 1));
              blueHue = (Math.floor((Math.random() * 250) + 1));
              sizeTimer = randomHue = (Math.floor((Math.random() * 250) + 1));

              }

        }

  ellipse(redHue,greenHue, sizeTimer, sizeTimer);

}
