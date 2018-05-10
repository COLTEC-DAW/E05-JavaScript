function countChars(frase, c) {
    var tam = frase.length
    var num = 0

        for (var i = 0; i < tam; i++) {
            if (frase[i]==c) {
                num++
            }         
        }
        console.log("O caractere " + c + " aparece " + num + " vezes na frase: " + frase);
        
}

var frase = prompt("Digite uma frase")
var c = prompt("Caracter a contar")


countChars(frase, c)
