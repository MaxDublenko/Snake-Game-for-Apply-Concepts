// Please go to Snake.txt to begin

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;

trail = [];

tail = 6;

// Calling function game() every 200/3 milliseconds
setInterval(game, 200/3);

function game() {

  // Game is in 400 x 400 grid, but squares are 20 pixels long

  // Moving Snake
  px += xv;
  py += yv;

  if (px < 0) {
    px = tc - 1;
  };

  if (px > tc-1) {
    px = 0;
  };

  if (py < 0) {
    py = tc - 1;
  };

  if (py > tc-1) {
    py = 0
  };

  // Drawing background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Drawing snake
  ctx.fillStyle = 'lime';
  for (let i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x === px && trail[i].y === py) {
       tail = 5;
    }
  }

  // Snake body
  trail.push({
    x: px,
    y: py
  });


  while(trail.length > tail) {
    trail.shift();
  }

  // If food touched by snake head
  if (ax === px && ay === py) {
    tail++;
    ax = Math.floor(Math.random() * tc); ay = Math.floor(Math.random() * tc);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

};

document.addEventListener('keydown', keyPush);

function keyPush(evt) {
  // If the left, right, up, or down arrow keys are pressed, then change the snake's direction
  switch(evt.keyCode) {
    case 37: xv=-1;
      yv=0;
      break;
    case 38: xv=0;
      yv=-1;
      break;
    case 39:
      xv=1;
      yv=0;
      break;
    case 40:
      xv=0;
      yv=1;
      break;
  }
}
