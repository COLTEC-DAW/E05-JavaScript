var minhaString = "teste TESTE";

var vogalUpper = function (letra) {
    if (letra == "a" || letra == "e" || letra == "i" || letra =="o" || letra == "u"){
        letra = letra.toUpperCase();
    }
    return letra;
}

var vogalLower = function (letra) {
    if (letra == "A" || letra == "E" || letra == "I" || letra =="O" || letra == "U"){
        letra = letra.toLowerCase();
    }
    return letra;
}

var consoanteUpper = function (letra) {
    if (!(letra == "a" || letra == "e" || letra == "i" || letra =="o" || letra == "u")){
        letra = letra.toUpperCase();
    }
    return letra;
}

var consoanteLower = function (letra) {
    if (!(letra == "A" || letra == "E" || letra == "I" || letra =="O" || letra == "U")){
        letra = letra.toLowerCase();
    }
    return letra;
}

var transformaString = function(minhaString, criterio) {
    var letra;
    var stringTransformada;
    for (let i = 0; i < minhaString.length; i++) {
        letra = minhaString.charAt(i);
        stringTransformada = stringTransformada + criterio(letra);
    }
    return stringTransformada;
}

console.log(transformaString(minhaString, vogalUpper));     // tEstE TESTE
console.log(transformaString(minhaString, vogalLower));     // teste TeSTe
console.log(transformaString(minhaString, consoanteUpper)); // TeSTe TESTE
console.log(transformaString(minhaString, consoanteLower)); // teste tEstE