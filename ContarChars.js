function countChars(frase, c){

    let qtdChar = 0;

    for(let comp = 0; comp < frase.length; comp++){

        if(frase[comp] == c){

            qtdChar++;

        } 

    }

    return qtdChar; 

}

var frase = prompt("Escreva uma frase qualquer: ");
var char = prompt("Digite um caractere: ");

var charAparece = countChars(frase, char);

if (charAparece == 0){

    alert("O caractere '"+ char +"' não aparece nessa frase.");

}
else if(charAparece == 1){

    alert("O caractere '"+ char +"' aparece "+ charAparece +" vez na frase.");

}
else {

    alert("O caractere '"+ char +"' aparece "+ charAparece +" vezes na frase.");

}