// Função que recebe uma frase e um char e imprime quantas vezes o char aparece na frase
function countChar(frase, char) {
    let count = 0;

    for(pos in frase) {
        if(frase[pos] === char) {
            count++;
        }
    }

    console.log("O char '" + char + "' aparece " + count + " vezes na frase.")
}

// Reune informações e passa para função countChar
function executaCountChar() {
    let frase = prompt("Digite a frase: ");
    let char = prompt("Digite o char a ser contado: ");

    countChar(frase, char);
}

executaCountChar();