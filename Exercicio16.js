function somaMatriz(i, j) {
    return i + j;
}

function multMatriz(i, j) {
    return i * j;
}

function matrizBinaria(i, j) {
    return i == j ? 1 : 0;
}

function elevaMatriz(i, j) {
    return i ^ 2 / (j + 1);
}

function matrizConta(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

function criaMatriz(tamanho, funcoes) {
    var newMatriz = [];
    for (var i = 0; i < tamanho; i++) {
        newMatriz[i] = [];
        for (var j = 0; j < tamanho; j++) {
            newMatriz[i][j] = funcoes(i, j);
        }
    }
    return newMatriz;
}

console.log(criaMatriz(5, somaMatriz));
console.log(criaMatriz(5, multMatriz));
console.log(criaMatriz(5, matrizBinaria));
console.log(criaMatriz(5, elevaMatriz));
console.log(criaMatriz(5, matrizConta));