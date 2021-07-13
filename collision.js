let canvas, ctx;
let box_size = 100;
let box_color1 = "#8277FF";
let box_color2 = "#E861C5";
let box1_x = 0;
let box1_y = 0;
let box2_x = 0;
let box2_y = 0;
let box1_sentido = "descer";
let box2_sentido = "subir";
let step = 2;

const calcular_movimento = () => {
  if (box1_y <= 0) {
    box1_sentido = "descer";
  }
  if (box1_y >= canvas.height - box_size) {
    box1_sentido = "subir";
  }

  if (box2_y >= canvas.height - box_size) {
    box2_sentido = "subir";
  }

  if (box2_y <= 0) {
    box2_sentido = "descer";
  }

  if (box1_y + box_size >= box2_y && box1_x + box_size >= box2_x) {
    box1_sentido = "subir";
    box2_sentido = "descer";
  }

  if (box1_sentido == "descer") {
    box1_y += step;
  } else {
    box1_y -= step;
  }

  if (box2_sentido == "descer") {
    box2_y += step;
  } else {
    box2_y -= step;
  }
};

const draw = () => {
  ctx.fillStyle = box_color1;
  ctx.fillRect(box1_x, box1_y, box_size, box_size);

  ctx.fillStyle = box_color2;
  ctx.fillRect(box2_x, box2_y, box_size, box_size);
};

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  calcular_movimento();
  draw();
  setTimeout(loop, 1000 / 60);
};

const init = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  box1_x = (canvas.width - box_size) / 2 - 120;
  box1_y = 0;
  box2_x = (canvas.width - box_size) / 2;
  box2_y = canvas.height - box_size;

  loop();
};

document.body.onload = init;
