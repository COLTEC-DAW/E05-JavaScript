var verifica = function(numero, verificacao){
    return verificacao(numero);
}

var vImpar = function(numero){
    if (numero%2 == 1){
        return true;
    }else{
        return false;
    }
}   

var vPrimo = function(numero){
    for (var i=2; i<numero; i++){
        if (numero%i == 0){
            return false;
        }
    }
    return true;
}

console.log("3 é ímpar? " + verifica(3, vImpar));
console.log("10 é ímpar? " + verifica(10, vImpar));
console.log("17 é primo? " + verifica(17, vPrimo));
console.log("14 é primo? " + verifica(14, vPrimo));

