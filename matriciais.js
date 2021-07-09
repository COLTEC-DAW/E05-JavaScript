function somaMatriz(i, j){
    return i + j;
}
function multMatriz(i, j) {
    return i * j;
}

function binariosMatriz(i, j) {
    return i == j ? 1 : 0;
}

function elevadoMatriz(i, j) {
    return i ^ 2 / (j + 1);
}

function contaLoucaMatriz(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

function criarMatriz(tamanho, modMatriz){
    var matrix = [];
    for(var i = 0; i < tamanho; i++) {
        matrix[i] = [];
        for(var j = 0; j < tamanho; j++) {
            matrix[i][j] = modMatriz(i, j);
        }
    }
    return matrix;
}

console.log(criarMatriz(5, somaMatriz));