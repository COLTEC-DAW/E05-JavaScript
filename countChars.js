var palavra = prompt("Digite uma palavra ou frase - ")
var char = prompt("Digite um caractere - ");

function countChars(frase, c){
    
    var quant = 0;
    for(i = 0; i < frase.length; i++){
        if(frase[i] == c){
            quant++;
        }
    }
    return quant;
}

console.log("Seu caractere apareceu " + countChars(palavra, char) + " vezes");