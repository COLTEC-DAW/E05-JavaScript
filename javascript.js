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