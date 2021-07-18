//Imagens e sons do jogo. 

let imagemDaEstrada; 
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

//Sons do jogo.
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]; 
  
  somDaTrilha = loadSound("Sons/TrilhaSonora.mp3");
  somDaColisao = loadSound("Sons/Colide.mp3");
  somDoPonto = loadSound("Sons/Pontua.mp3");
}