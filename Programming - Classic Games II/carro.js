//codigo do carro

//carro1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1 = 2;

//carro2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

//carro3

let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 3.2;

function mostraCarro(){
  image(imagemDoCarro, xCarro, yCarro, 50, 40);
  image(imagemDoCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemDoCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
  xCarro -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}