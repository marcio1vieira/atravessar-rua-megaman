let trilha;
let ponto;
let perdeu;
function setup() {
  createCanvas(500, 400);
  }

function preload(){
  trilha = loadSound("musicas/GravityBeetleMMX3.mp3")
  ponto = loadSound("musicas/1-up.mp3")
  perdeu =loadSound("musicas/death.mp3")
}
function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
    ganhouJogo();
}

