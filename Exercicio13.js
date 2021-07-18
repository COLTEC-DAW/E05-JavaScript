var string = prompt("Digite algo para ser criptografado: ");
var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç", " "];


var codigoCezar = function(string, criterio) {
    var crp = string.split('');
    for (var i = 0; i < crp.length; i++) {
        crp[i] = criterio(crp[i]);
    }
    return crp.join("");
}

console.log(codigoCezar(string, function(letra) {
    for (var i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i] == letra) {
            break;
        }
    }
    i += 3;
    if (i > 27) { i -= 27; }
    return alfabeto[i];
}));