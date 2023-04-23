function criaMatriz(linhas, colunas, funcao){
    
    var matriz = [];
    for(i = 0; i < linhas; i++){
        var tmp = [];
        for(j = 0; j < colunas; j++){
            tmp[j] = funcao((i + 1), (j + 1));
        }
        matriz[i] = tmp;
    }
    
    return matriz;
}

function funcao1(i, j){
    return i + j;
}

function funcao2(i, j){
    return i * j;
}

function funcao3(i, j){
    return i == j ? 1 : 0;
}

function funcao4(i, j){
    return i**2/(j+1);
}

function funcao5(i, j){
    return i > j ? 1 : (i < j ? 5 : 0);
}

console.log("Funcao 1");
console.log(criaMatriz(5, 5, funcao1));
console.log("Funcao 2");
console.log(criaMatriz(5, 5, funcao2));
console.log("Funcao 3");
console.log(criaMatriz(5, 5, funcao3));
console.log("Funcao 4");
console.log(criaMatriz(5, 5, funcao4));
console.log("Funcao 5");
console.log(criaMatriz(5, 5, funcao5));