//listas
let yCarros =[30,280,215,150,90]
let xCarros = [500,500,500,500,500]
let velocidadeCarros=[1.5,3.5,1,4,2.8]
let comprimentoCarro = 60;
let alturaCarro = 60;

//código do carro
function mostraCarro(){
      for (let i =0; i < imagemCarros.length;i++){
        image(imagemCarros[i],xCarros[i],yCarros[i], comprimentoCarro,alturaCarro);
      }
}  
  

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++)
  xCarros[i] -= velocidadeCarros[i]
}
function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
      if(passouTodaATela(xCarros[i])){
        xCarros[i]= 520;
    }

  }
}

function passouTodaATela(xCarros){
  return xCarros <-50;
}