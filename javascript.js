//Desenhando um triângulo

var hashtag = "#";
var NumeroLinhas = prompt('Insira a quantidade de linhas do triângulo: ');
triangulo(NumeroLinhas);

function triangulo(NumeroLinhas) {
    for(var i = 0; i < NumeroLinhas; i++) {
        hashtag += "#";
        console.log(hashtag);
    }
}

//Tabuleiro de Xadrez

var tabuleiroxad = "# # # # ";
var nLinhas = prompt('Digite o numero de linhas do tabuleiro');
xadrez(nLinhas);

function xadrez(nLinhas) {
    for (var i = 0; i < nLinhas; i++) {
        if(i % 2 == 0)
            console.log(tabuleiroxad);
        else
            console.log(" " + tabuleiroxad);
    }
}