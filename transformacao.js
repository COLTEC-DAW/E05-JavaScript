var vogal_min = function(letra){
    if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
        letra = letra.toLowerCase();
    }
    return letra;
}

var vogal_max = function(letra){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        letra = letra.toUpperCase();
    }
    return letra;
}

var consoante_min = function(letra){
    if(letra != "A" && letra != "E" && letra != "I" && letra != "O" && letra != "U"){
        letra = letra.toLowerCase();
    }
    return letra;
}

var consoante_max = function(letra){
    if(letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u"){
        letra = letra.toUpperCase();
    }
    return letra;
}

var transforma = function(string, param){
    var transformado = "";

    for(i=0; i<string.length; i++){

        var aux = param(string[i]);
        transformado += aux;
    }

    return transformado;
}

document.write(transforma("abcdefghijklmnopqrstuvwxyz", vogal_max) + "<br>");
document.write(transforma("ABCDEFGHIJKLMNOPQRSTUVWXYZ", consoante_min) + "<br>");