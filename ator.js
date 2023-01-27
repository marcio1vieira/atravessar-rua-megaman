  //código do ator
  let xAtor = 100;
  let yAtor = 366;
  let colisao = false;
  let meusPontos = 0;
  let ganhouParabens = "!!!VOCÊ GANHOU!!!"

  function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 60, 60);
  }

  function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor-=3
    }
    if(keyIsDown(DOWN_ARROW)){
      yAtor +=3
    }
    if(keyIsDown(LEFT_ARROW)){
      xAtor-=3
    }
    if(keyIsDown(RIGHT_ARROW)){
      xAtor +=3
    }
  }

  function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorParaPosicaoInicial();
      }
    }
  }

  function voltaAtorParaPosicaoInicial(){
    yAtor = 366;
  }
  function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorParaPosicaoInicial();
        if(meusPontos > 0 ){
           meusPontos -=1;
         }
      }
    }
  }

  function voltaAtorParaPosicaoInicial(){
    yAtor = 366;
  }

  function incluiPontos(){
    textSize(30);
    fill(color(255,240,0))
    text(meusPontos, width / 5, 28);
  }
  function marcaPonto(){
    if (yAtor <15){
      meusPontos += 1;
      voltaAtorParaPosicaoInicial();
    }
  }
  function ganhouJogo(){
    if (meusPontos >1){
    textSize(30);
    fill(color(255,240,0))
      }
  setTimeout(ganhouJogo, 3000);;

    if (meusPontos > 5){
    textSize(30);
    fill(color(255,240,0))
    text("Esse jogador(a) é brabo(a)", 220, 28);
    }
    if (meusPontos >10){
    textSize(30);
    fill(color(255,240,0))
    text("Platinou o Jogo", 220, 28);
    }
    if (meusPontos > 20){
    textSize(30);
    fill(color(255,240,0))
    text("Sério, jogando até agora?! ", 220, 28);
    }
  }