function criarMatriz(linhas, colunas, funcaoescolhida) 
{
    var matriz = [];
    for (i = 0; i < linhas; i++) {
      var linha = [];
      for (j = 0; j < colunas; j++) {
        linha.push(funcaoescolhida(i, j));
      }
      matriz.push(linha);
    }
    return matriz;
  }
  
function soma(i, j) 
{   return i + j;   }
  
function produto(i, j) 
{   return i * j;   }
  
function igual(i, j) 
{   return i == j ? 1 : 0;  }
  
function divisao(i, j) 
{   return i ** 2 / (j + 1);    }
  
function maiorOuMenor(i, j) 
{   return i > j ? 1 : (i < j ? 5 : 0); }
  
  console.log(criarMatriz(3, 3, somaIndices));
  console.log(criarMatriz(3, 3, produtoIndices));
  console.log(criarMatriz(3, 3, identidade));
  console.log(criarMatriz(3, 3, divisaoIndices));
  console.log(criarMatriz(3, 3, maiorOuMenor));