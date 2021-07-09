function caixaAltaVogais(caracter){
    var vogais = ["a", "e", "i", "o", "u"];
    var newChar = caracter.toLowerCase();
    return (vogais.includes(newChar)) ? caracter.toUpperCase():caracter;
}

function caixaAltaConsoantes(caracter){
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var newChar = caracter.toLowerCase();
    return (consoantes.includes(newChar)) ? caracter.toUpperCase():caracter;
}

function caixaBaixoVogais(caracter){
    var vogais = ["a", "e", "i", "o", "u"];
    var newChar = caracter.toLowerCase();
    return (vogais.includes(newChar)) ? caracter.toLowerCase():caracter;
}

function caixaBaixoConsoantes(caracter){
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var newChar = caracter.toLowerCase();
    return (consoantes.includes(newChar)) ? caracter.toLowerCase():caracter;
}

function transformString(string, modStr) {
    var transformedString = "";
    for(var i = 0; i < string.length; i++){
        transformedString += modStr(string[i]); 
    }
    return transformedString;
}


console.log(transformString("AaaABvbBUUHEEIOoUufgH", caixaAltaConsoantes));