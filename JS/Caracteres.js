var frase = prompt('Digite uma frase: ')
var char = prompt('Digite um caractere: ')

function countChars(frase, c) {
    var count = 0

    for (let i = 0; i <= frase.length; i++) {
        
        if (frase[i] == c) {
            count++
        } 
    }
    return count
}

console.log(countChars(frase, char))