function criarMatriz(criterio) {
    var matriz = [];
    for(i = 0; i < 5; i++){
      matriz[i] = [];
      for(j = 0; j < 5; j++){
        matriz[i][j] = criterio(i, j);
      }
    }
    console.log(matriz);
  }
  
  function m1(i, j){
    return i + j;
  }
  function m2(i, j){
    return i * j;
  }
  function m3(i, j){
    return i == j ? 1 : 0;
  }
  function m4(i, j){
    return i^2/(j+1);
  }
  function m5(i, j){
    return i > j ? 1 : (i < j ? 5 : 0);
  }
  
  criarMatriz(m1);
  criarMatriz(m2);
  criarMatriz(m3);
  criarMatriz(m4);
  criarMatriz(m5);