var soma = function(i, j){
    return i + j;
}

var mult = function(i, j){
    return i * j;
}

var igual = function(i, j){
    return i == j ? 1 : 0;
}

var calc = function(i, j){
    return i^2/(j+1);
}

var seila = function(i, j){
    return i > j ? 1 : (i < j ? 5 : 0);
}

var matriciando = function(tam, param){
    matriciado = [];
    for (var i = 0; i<tam; i++){
        matriciado[i] = [];
        for (var j=0; j<tam; j++){
            matriciado[i][j] = param(i, j);
        }
    }
    return matriciado;
}

console.log(matriciando(4, soma));
console.log(matriciando(6, seila));