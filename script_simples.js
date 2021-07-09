function box(cor, x, y, largura, altura) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  box(box1.cor, box1.x, box1.y, box1.largura, box1.altura);
  box(box2.cor, box2.x, box2.y, box2.largura, box2.altura);
  box(box3.cor, box3.x, box3.y, box3.largura, box3.altura);
  box(box4.cor, box4.x, box4.y, box4.largura, box4.altura);
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
  moverObjetos(box1);
  verificarSentido(box1);

  moverObjetos(box2);
  verificarSentido(box2);

  moverObjetos(box3);
  verificarSentido(box3);

  moverObjetos(box4);
  verificarSentido(box4);

  desenhar();
  requestAnimationFrame(loop);
  //setTimeout(loop, 1000 / 60);
}

function init() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  loop();
}

const box1 = {
  x: 30,
  y: 0,
  largura: 100,
  altura: 100,
  cor: "red",
  sentido: "descer",
  step: 1,
};

const box2 = {
  x: 180,
  y: 10,
  largura: 50,
  altura: 50,
  cor: "blue",
  sentido: "subir",
  step: 4,
};

const box3 = {
  x: 300,
  y: 50,
  largura: 150,
  altura: 150,
  cor: "green",
  sentido: "descer",
  step: 2,
};

const box4 = {
  x: 500,
  y: 500,
  largura: 70,
  altura: 70,
  cor: "orange",
  sentido: "subir",
  step: 3,
};

let canvas, ctx;

document.body.onload = init;
