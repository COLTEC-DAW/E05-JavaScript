function countChars(frase, c) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == c) {
            contador++;
        }
    }
    return contador;
}

console.log(countChars("rafael", "a"));