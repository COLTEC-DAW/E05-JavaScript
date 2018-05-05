var Frase = "SSSSaSS SSSSSa DDDDDDD aDDDDDDa";
var Caractere = 'a';

function countChars(frase, c){
    var quantidade = 0;

    for(i = 0; i < frase.length; i++){
        if (frase.charAt(i) == c) {
            quantidade++;
        }
    }
    
    return quantidade;
}

console.log(countChars(Frase, Caractere));