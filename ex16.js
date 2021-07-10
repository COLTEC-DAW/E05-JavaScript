function criaMatriz(tamanho, funcaoMatriz) {
    var matriz = [];
    for (var i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (var j = 0; j < tamanho; j++) {
            matriz[i][j] = funcaoMatriz(i, j);
        }
    }
    return matriz;
}

function somaIndices(i, j) {
    return i + j;
}

function multiplicaIndices(i, j) {
    return i * j;
}

function indicesIguais(i, j) {
    return i == j ? 1 : 0;
}

function elevaIndice(i, j) {
    return i ^ 2 / (j + 1);
}

function maiorIndice(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

var matriz = criaMatriz(5, somaIndices);
console.log(matriz);
var matriz = criaMatriz(5, multiplicaIndices);
console.log(matriz);
var matriz = criaMatriz(5, indicesIguais);
console.log(matriz);
var matriz = criaMatriz(5, elevaIndice);
console.log(matriz);
var matriz = criaMatriz(5, maiorIndice);
console.log(matriz);