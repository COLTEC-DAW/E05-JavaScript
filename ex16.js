function FuncMatriz(matriz, i, j, action){
  return action(matriz, i, j);
}

function soma(matriz, i, j){
  matriz[i, j] = i + j;
}

function multiplicacao(matriz, i, j){
  matriz[i, j] = i * j;
}

function igual(matriz, i, j){
  if(i==j){
    matriz[i,j] = 1;
  } else{
    matriz[i,j] = 0;
  }
}

function Untitled(matriz, i, j){
  matriz[i,j] = i*i/(j-1);
}

function iDontKnow(matriz, i, j){
  if(i>j){
    matriz[i,j] = 1;
  } else if(j>i){
    matriz[i,j] = 5;
  } else{
    matriz[i,j] = 0;
  }
}
