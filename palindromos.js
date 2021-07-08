function palindromo(palavra){
    var palavraMod = palavra.split("").reverse().join("");
    console.log(palavraMod);
    if(palavra === palavraMod){
        console.log("É um palindromo");
    }
    else{
        console.log("Não é um palindromo");
    }
}

var palavra = prompt("Digite a palavra: ");
palindromo(palavra);
