function funcaoDeMatriz1(i, j) {

    var valor = i + j;
    return valor;
}

function funcaoDeMatriz2(i, j) {

    var valor = i * j;
    return valor;
}

function funcaoDeMatriz3(i, j) {

    var valor = i == j ? 1 : 0;
    return valor;
}

function funcaoDeMatriz4(i, j) {

    var valor = i ^ 2 / (j + 1);
    return valor;
}

function funcaoDeMatriz5(i, j) {

    var valor = i > j ? 1 : (i < j ? 5 : 0);
    return valor;
}

matriz = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

function criaMatriz(matriz, funcao) {

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = funcao(i, j)
        }
        console.log(matriz[i]);
    }
    return matriz;
}

console.log(`Resultado da função 1`);
matriz = criaMatriz(matriz, funcaoDeMatriz1);

console.log(`Resultado da função 2`);
matriz = criaMatriz(matriz, funcaoDeMatriz2);

console.log(`Resultado da função 3`)
matriz = criaMatriz(matriz, funcaoDeMatriz3);

console.log(`Resultado da função 4`);
matriz = criaMatriz(matriz, funcaoDeMatriz4);

console.log(`Resultado da função 5`);
matriz = criaMatriz(matriz, funcaoDeMatriz5);