let canvas, ctx;

const box_size = 50;
const box_color1 = "#0000FF";
const box_color2 = "#00FF00";
let box_x = 0;
let box_y = 0;
let sentido_y = "descer";
let sentido_x = "go";
const step = 2;

function calcular_sentido_y() {
  if (box_y >= canvas.height - box_size) {
    sentido_y = "subir";
  }
  if (box_y <= 0) {
    sentido_y = "descer";
  }
  if (sentido_y == "subir") {
    box_y -= step;
  } else {
    box_y += step;
  }
}

function calcular_sentido_x() {
  if (box_x >= canvas.width - box_size) {
    sentido_x = "back";
  }
  if (box_x <= 0) {
    sentido_x = "go";
  }
  if (sentido_x == "go") {
    box_x += step;
  } else {
    box_x -= step;
  }
}

function draw() {
  ctx.fillStyle = box_color1;
  ctx.fillRect(100, box_y, box_size, box_size);

  ctx.fillStyle = box_color2;
  ctx.fillRect(box_x, 100, box_size, box_size);
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  calcular_sentido_y();
  calcular_sentido_x();
  draw();
  setTimeout(loop, 1000 / 60);
}

function init() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  loop();
}

document.body.onload = init;
