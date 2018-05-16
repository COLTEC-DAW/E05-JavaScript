function verificanumero(numero, verificando) {
    if (verificando(numero))
        return true;
    else
        return false;
}
function impar(numero) {
    if (numero % 2 != 0)
        return true;
    else
        return false;
}
function primo(numero) {
    var start = 2;
    while (start <= Math.sqrt(numero)) {
        if (numero % start++ < 1) 
        return false;
    }
    return numero > 1;
}