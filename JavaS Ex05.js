/* Atividade Do Triangulo */
var triangulo = function(NLinhas){
    for (var i = 1; i <= NLinhas; i++){
        var HashTag = "";
        for(var j = 1; j <= i; j++){
            HashTag += "#";
        }
        console.log(HashTag)
    }
}

var NLinhasT = prompt("Quantas Linhas deseja que o triangulo tenha? ");
triangulo(NLinhasT);

/* Tabuleiro De Xadrez */
var Xadrez = function(NLinhas){
    var HashTag = "# # # #";

    for (i = 0; i < NLinhas; i++){
        if(i % 2 == 0){
            console.log(HashTag);
        }
        else{
            console.log(" " + HashTag);
        }
    }
}

var NLinhasX = prompt("Quantas Linhas deseja que o tabuleiro de Xadrez tenha? ");
Xadrez(NLinhasX);

/* Palindromo */
var Palindromo = function(Palavra){
    var PalavraVerif = Palavra.split("").reverse().join("");

    console.log(PalavraVerif);
    if (Palavra.toLowerCase() === PalavraVerif.toLowerCase()){
        console.log("%s É um palindromo", Palavra);
    }
    else{
        console.log("%s Não é um palindromo", Palavra)
    }
}

var Palavra = prompt("Digite a palavra que deseja conferir se é um palíndromo ")
Palindromo(Palavra);