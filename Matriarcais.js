function criarMatriz(linhas, colunas, f1) {
    let matriz = [];
  
    for (let i = 0; i < linhas; i++) {
      let linha = [];
  
      for (let j = 0; j < colunas; j++) {
        linha.push(f1(i, j));
      }
  
      matriz.push(linha);
    }
  
    return matriz;
  }
  
  function f1(i, j) {
    return i + j;
  }
  
  function f2(i, j) {
    return i * j;
  }
  
  function f3(i, j) {
    return i == j ? 1 : 0;
  }
  
  function f4(i, j) {
    return (i ** 2) / (j + 1);
  }
  
  function f5(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
  }