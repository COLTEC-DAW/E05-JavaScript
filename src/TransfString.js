var transf = function(string, criterio){
    var aux = string.split('');
    for(var i=0; i< aux.length; i++){
        aux[i] = criterio(aux[i]);
    }
    return aux.join('');
}
var vogais = ["a","e","i","o","u","A","E","I","O","U"];
var string = prompt("Digite uma frase:");
console.log(transf(string, function(letra){// somente vogais em caixa alta
    for(var i=0; i<vogais.length; i++){
        if(vogais[i] == letra){
            letra = letra.toUpperCase();
            return letra;
        }
    }
    letra = letra.toLowerCase();
    return letra;
}));
console.log(transf(string, function(letra){// somente consoantes em caixa alta
    for(var i=0; i<vogais.length; i++){
        if(vogais[i] == letra){
            letra = letra.toLowerCase();
            return letra;
        }
    }
    letra = letra.toUpperCase();
    return letra;
}));
console.log(transf(string, function(letra){// somente vogais em caixa baixa
    for(var i=0; i<vogais.length; i++){
        if(vogais[i] == letra){
            letra = letra.toLowerCase();
            return letra;
        }
    }
    letra = letra.toUpperCase();
    return letra;
}));
console.log(transf(string, function(letra){// consoantes em caixa baixa
    for(var i=0; i<vogais.length; i++){
        if(vogais[i] != letra){
            letra = letra.toUpperCase();
            return letra;
        }
    }
    letra = letra.toLowerCase();
    return letra;
}));
