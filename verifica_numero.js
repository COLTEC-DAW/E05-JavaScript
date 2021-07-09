function _primo(numero){
    var aux = 0;
    for(i = 1;i<numero;i++){
        if(numero%i == 0){
            aux++;
        }
    }
    return(aux == 1);
}
function _impar(numero){
    return(numero%2 != 0);
}

function verifica_numero(numero, modo){
    console.log(modo(numero));
}

verifica_numero(9,_primo);
verifica_numero(9,_impar);

