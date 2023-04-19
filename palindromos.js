var palavra = prompt("Insira a palavra a ser analisada: ");

function reversePalavra(palavra){
    var arrayPalavra = palavra.split("");
    var reverseArray = arrayPalavra.reverse();
    var juntaPalavra = reverseArray.join("");
    return juntaPalavra;
}

function palindromo(palavra){
    var palavraInv = reversePalavra(palavra);
    console.log(palavraInv)
    for(let i = 0; i<palavra.length; i++){
        if(palavra[i]!=palavraInv[i]){
            console.log("A palavra " + palavra + " não é um palindromo");
            break;
        }
        if(i==palavra.length-1){
            console.log("A palavra " + palavra + " é um palindromo");
        }
    }
}

palindromo(palavra);