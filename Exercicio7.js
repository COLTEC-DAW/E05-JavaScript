var frase = prompt("Digite uma frase: ");
var caracter = prompt("Digite o caracter que vc quer contar na frase: ");

function countChars(frase, caracter) {
    var aux = 0;
    for (i = 0; i < frase.length; i++) {
        if (frase[i] === caracter) {
            aux++
        }
    }
    return aux;
}


var charsQuant = countChars(frase, caracter);

console.log(charsQuant);