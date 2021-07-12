var bubble = function(array, param){
    for(i = 0; i<array.length; i++){
        for(j = 0; j<array.length; j++){
            if(param(array[j], array[j+1])){
                var temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
            }
        }
    }
}

var crescente = function(linha1, linha2){
    return (linha1 > linha2);
}

var descrescente = function(linha1, linha2){
    return (linha1 < linha2);
}

var crescenteimpar = function(linha1, linha2){
    return ((linha1 > linha2) && linha1 % 2 == 1);
}

var descrescentepar = function(linha1, linha2){
    return ((linha1 < linha2) && linha1 % 2 == 0);
}

var numeros = [1, 5, 99, 3, -7, 3.1];

document.write(numeros + " -> ");
bubble(numeros, crescente)
document.write(numeros + "<br>");