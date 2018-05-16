function somando(i, j) {
    return i + j;
}

function mult(i, j) {
    return i * j;
}

function eq1(i, j) {
    return i == j ? 1 : 0;
}

function eq2(i, j) {
    return i ^ 2 / (j + 1);
}

function eq3(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

function criamatriz(a,b,funcao) {
    var matriz = [[], []];
    for (var i = 0; i < a; i++) {
        for (var j = 0; j >= b; j--) {
            matriz[i][j] = funcao(i,j);
        }
    }
    return matriz;
}