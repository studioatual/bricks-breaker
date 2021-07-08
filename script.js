function box(cor, x, y, largura, altura) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < list.length; i++) {
    box(list[i].cor, list[i].x, list[i].y, list[i].largura, list[i].altura);
  }
}

function verificarSentido(box) {
  if (box.y >= canvas.height - box.altura) {
    box.sentido = "subir";
  }
  if (box.y <= 0) {
    box.sentido = "descer";
  }
}

function moverObjetos(box) {
  if (box.sentido == "descer") {
    box.y = box.y + box.step;
  } else {
    box.y = box.y - box.step;
  }
}

function printPosicao() {
  console.log("Y:", posY);
}

function loop() {
  for (let i = 0; i < list.length; i++) {
    moverObjetos(list[i]);
    verificarSentido(list[i]);
  }
  //printPosicao();
  desenhar();
  //requestAnimationFrame(loop);
  setTimeout(loop, 1000 / 60);
}

function init() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  loop();
}

const cores = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "black",
  "gray",
  "purple",
];

const list = [];

for (let i = 0; i < 100; i++) {
  const index = Math.round(Math.random() * cores.length);
  list.push({
    x: Math.round(Math.random() * 800),
    y: Math.round(Math.random() * 600),
    largura: Math.round(Math.random() * 200),
    altura: Math.round(Math.random() * 200),
    cor: cores[index],
    sentido: Math.round(Math.random() * 100) > 50 ? "subir" : "descer",
    step: Math.round(Math.random() * 10) + 1,
  });
}

let canvas, ctx;
let posY = 0;
let sentido = "descer";
document.body.onload = init;
