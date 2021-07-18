function caixaAltaVogais(caracter) {
    var vogais = ["a", "e", "i", "o", "u"];
    var newChar = caracter.toLowerCase();
    return (vogais.includes(newChar)) ? caracter.toUpperCase() : caracter;
}

function caixaAltaConsoantes(caracter) {
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var newChar = caracter.toLowerCase();
    return (consoantes.includes(newChar)) ? caracter.toUpperCase() : caracter;
}

function caixaBaixaVogais(caracter) {
    var vogais = ["a", "e", "i", "o", "u"];
    var newChar = caracter.toLowerCase();
    return (vogais.includes(newChar)) ? caracter.toLowerCase() : caracter;
}

function caixaBaixaConsoantes(caracter) {
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var newChar = caracter.toLowerCase();
    return (consoantes.includes(newChar)) ? caracter.toLowerCase() : caracter;
}

function transformaString(string, funcao) {
    var novaString = "";
    for (var i = 0; i < string.length; i++) {
        novaString += funcao(string[i]);
    }
    return novaString;
}

console.log(transformaString("chocolate", caixaAltaVogais));
console.log(transformaString("chocolate", caixaAltaConsoantes));
console.log(transformaString("CHOCOLATE", caixaBaixaVogais));
console.log(transformaString("CHOCOLATE", caixaBaixaConsoantes));