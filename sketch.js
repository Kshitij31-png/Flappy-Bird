var bird;
var pipes = [];
var score;
var top,bottom;

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
  score = 0;
  top = random(height / 6, (3 / 4) * height);
}

function draw() {
  background(0);
  // text(score + ":", 400,200);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  // if(bird.y > top || bird.y > height - bottom){
  //   if(bird.x < width && bird.x > width + 80){
  //     score = score + 1;
  //   }
  // }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
