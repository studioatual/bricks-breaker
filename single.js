function box() {
  ctx.fillStyle = cor;
  ctx.fillRect(posX, posY, largura, altura);
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  box();
}

function verificarSentido() {
  if (posY >= canvas.height - altura) {
    sentido = "subir";
  }
  if (posY <= 0) {
    sentido = "descer";
  }
}

function moverObjetos() {
  if (sentido == "descer") {
    posY = posY + step;
  } else {
    posY = posY - step;
  }
}

function printPosicao() {
  console.log("Y:", posY);
}

function loop() {
  moverObjetos();
  verificarSentido();
  printPosicao();
  desenhar();
  //requestAnimationFrame(loop);
  setTimeout(loop, 1000 / 60);
}

function init() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  loop();
}

let canvas, ctx;
let largura = 100;
let altura = 100;
let cor = "blue";
let posX = 100;
let posY = 0;
let step = 2;
let sentido = "descer";
document.body.onload = init;
