function transformaString(string, criteria) {
    var tmp = "";

    for (var i = 0; i < string.length; i++) {
        tmp += criteria(string[i]);
    }

    return tmp;
}

function ehLetra(char) {
    return char.toLowerCase() != char.toUpperCase();
}

function caixaAltaVogais(caracter) {
    if ("aeiou".includes(caracter.toLowerCase())) {
        return caracter.toUpperCase();
    } else {
        return caracter;
    }
}

function caixaAltaConsoantes(caracter) {
    if (!("aeiou".includes(caracter.toLowerCase())) && ehLetra(caracter)) {
        return caracter.toUpperCase();
    } else {
        return caracter;
    }
}

function caixaBaixaVogais(caracter) {
    if ("aeiou".includes(caracter.toLowerCase())) {
        return caracter.toLowerCase();
    } else {
        return caracter;
    }
}

function caixaBaixaConsoantes(caracter) {
    if (!("aeiou".includes(caracter.toLowerCase())) && ehLetra(caracter)) {
        return caracter.toLowerCase();
    } else {
        return caracter;
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

var string = "rafael MARTINS GOmeS";
console.log("String inicial: " + string);
console.log("String com vogais em caixa alta: " + transformaString(string, caixaAltaVogais));
console.log("String com consoantes em caixa alta: " + transformaString(string, caixaAltaConsoantes));
console.log("String com vogais em caixa baixa: " + transformaString(string, caixaBaixaVogais));
console.log("String com consoantes em caixa baixa: " + transformaString(string, caixaBaixaConsoantes));