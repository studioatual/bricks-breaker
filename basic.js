let canvas, ctx;
let box1_cor = "#3CE87C";
let box1_largura = 100;
let box1_altura = 80;
let box1_step = 3;
let box1_sentido = "descer";
let box1_x = 100;
let box1_y = 80;

function move() {
  if (box1_y <= 0) {
    box1_sentido = "descer";
  }
  if (box1_y >= canvas.height - box1_altura) {
    box1_sentido = "subir";
  }

  if (box1_sentido == "subir") {
    box1_y -= box1_step;
  } else {
    box1_y += box1_step;
  }
}

function draw() {
  ctx.fillStyle = box1_cor;
  ctx.fillRect(box1_x, box1_y, box1_largura, box1_altura);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  clear();
  move();
  draw();
  setTimeout(loop, 1000 / 60);
}

function init() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  loop();
}

document.body.onload = init;
