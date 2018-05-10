var criaMatrizes = function(imax, jmax, funcao){
    matriz = [];
    for(var i=0; i<imax; i++){
        matriz[i] = [];
        for(var j=0; j<jmax; j++){
            matriz[i][j] = funcao(i, j);
        }
    }
    return matriz;
}


var soma = function(a, b){
    return a+b;
}

var multiplicacao = function(a, b){
    return a*b;
}

var identidade = function(a, b){
    return a == b ? 1 : 0;
}

var complicada = function(a, b){
    return a*a/(b+1);
} 

var complicada2 = function(a, b){
    return a > b ? 1 : (a < b ? 5 : 0);
}

console.log(criaMatrizes(5, 5, soma));
console.log(criaMatrizes(5, 5, multiplicacao));
console.log(criaMatrizes(5, 5, identidade));
console.log(criaMatrizes(5, 5, complicada));
console.log(criaMatrizes(5, 5, complicada2));