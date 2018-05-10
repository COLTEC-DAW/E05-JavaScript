function geraMatriz(i, j, criteria, tam){

    var x = new Array(tam);
    for (let index = 0; index < tam; index++) {
        x[index] = new Array(tam);
    }      

    for (index = 0; index < tam; index++) {
        for (index2 = 0; index2 < tam; index2++) {
            x[index][index2]=criteria(i, j);
        }
    }
    return x;
}

function soma(i, j) {
    return i+j;
}

function multiplicacao(i, j) {
    return i*j;
}

function operacao3(i, j) {
    return i == j ? 1 : 0;
}

function operacao4(i, j) {
    return i^2/(j+1);
}

function operacao5(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

console.log(geraMatriz(12,13, multiplicacao, 3));