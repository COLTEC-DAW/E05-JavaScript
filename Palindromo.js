function palindromo() {
    let palavra = prompt("Digite uma palavra para verificar se é um palindromo: ");
    let posReverse = 0;
    let reverse = [];

    // Passa o array invertido para "reverse["
    for(i = palavra.length - 1; i >=0; i--) {
        reverse[posReverse] = palavra[i];
        posReverse++;
    }
    
    // Transforma o array em string
    let strReverse = reverse.join('');

    // Compara, se for igual é um palindromo
    if(strReverse == palavra) {
        console.log("É um palindromo");
    } else {
        console.log("Não é um palindromo");
    }
}

palindromo();