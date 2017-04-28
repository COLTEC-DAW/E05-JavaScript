function ehImpar(num){
    return (num%2 != 0);
}

function ehPrimo(num){
    for (var i=2; i<=Math.sqrt(num); i++){
        if (num%i==0) return false;
    }
    return true;
}

function verificaNum(num, verificacao){
    return verificacao(num);
}