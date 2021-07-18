let imagemDaEstrada; 
let imagemDoAtor;
let imagemDoCarro;

//variáveis do carro
let xCarro = 600; 

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro = loadImage("Imagens/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
}

function mostraAtor(){
  image(imagemDoAtor, 100, 366, 30, 30);
}

function mostraCarro(){
  image(imagemDoCarro, xCarro, 40, 50, 40)
}

function movimentaCarro(){
  xCarro -= 2;
}