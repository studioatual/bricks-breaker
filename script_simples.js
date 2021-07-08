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
  requestAnimationFrame(loop);
  //setTimeout(loop, 1000 / 60);
}

function init() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  loop();
}

const box1 = {
  x: 0,
  y: 0,
  largura: 100,
  altura: 100,
  cor: "red",
  sentido: "descer",
  step: 1,
};
console.log(box1);
const box2 = {
  x: 100,
  y: 10,
  largura: 50,
  altura: 50,
  cor: "blue",
  sentido: "subir",
  step: 4,
};
console.log(box2);
const box3 = {
  x: 300,
  y: 50,
  largura: 150,
  altura: 150,
  cor: "green",
  sentido: "descer",
  step: 2,
};
console.log(box3);

const box4 = {
  x: 500,
  y: 500,
  largura: 70,
  altura: 70,
  cor: "orange",
  sentido: "subir",
  step: 3,
};

const list = [box1, box2, box3, box4];
console.log(list[3]);

let canvas, ctx;
let posY = 0;
let sentido = "descer";
document.body.onload = init;
