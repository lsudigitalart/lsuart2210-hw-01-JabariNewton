var redHue = 0;
var greenHue = 0;
var blueHue = 0;
var sizeTimer = 50;
var randomHue = 0;
var i=0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
    if (mouseIsPressed) {
      fill (0);
      <script>
        window.alert(5 + 6);
      </script>

    }
    else {
          fill(redHue,greenHue,blueHue);
          redHue = redHue +1;
          greenHue = greenHue +2;
          blueHue = blueHue +3
          sizeTimer = sizeTimer + 3;

            for(i=0;sizeTimer > 100;randomHue++) {
              redHue = (Math.floor((Math.random() * 250) + 1));
              greenHue = (Math.floor((Math.random() * 250) + 1));
              blueHue = (Math.floor((Math.random() * 250) + 1));
              sizeTimer = randomHue = (Math.floor((Math.random() * 250) + 1));

          }

    }


  ellipse(mouseX,mouseY, sizeTimer, sizeTimer);
}
