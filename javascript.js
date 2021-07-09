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

//Verificando Palíndromos

var palavra = prompt('Digite uma palavra');
var verdadeiro = true;
var falso = false;
palindromo(palavra);

function palindromo(palavra) {
	var palin = palavra.split('').reverse().join('');;
  if(palavra === palin)
  	console.log(verdadeiro);
 	else
  	console.log(falso);
}

//Um programa diferente...

for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) & (i % 5 == 0))
        console.log('FizzBuzz');
    else if (i % 3 == 0)
        console.log('Fizz');
    else if (i % 5 == 0)
        console.log('Buzz');
    else
    	console.log(i);
}