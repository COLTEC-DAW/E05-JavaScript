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

//Mínimo e Máximo

var n1 = prompt('Digite um numero natural');
var n2 = prompt('Digite outro numero natural');
min(n1, n2);
max(n1, n2);

function min(n1, n2) {
    if(n1 > n2)
        console.log(n2);
    else
    	console.log(n1);
}

function max(n1, n2) {
    if(n1 < n2)
        console.log(n2);
    else
        console.log(n1);
}

//Recursividade

var number = prompt("Digite um número natural");
var num = prompt("Digite outro número natural");
var mod = prompt("Digite mais um número natural");
var verdadeiro = true;
var falso = false;
mod2(number);
mod3(num, mod);

function mod2(number) {
    if (number % 2 == 0)
        console.log(verdadeiro);
    else
        console.log(falso);
}

function mod3(num, mod) {
    if (num % mod == 0)
        console.log(verdadeiro);
    else
        console.log(falso);
}

//Contando caracteres

var frase = prompt('Digite uma frase');
var c = prompt('Digite o caractere que deseja encontrar');
countChars(frase);
console.log(char);

function countChars(frase, c) {
    var char = 0;
    for(var i = 1; i <= frase.length; i++) {
        if(frase === c)
            char++;
    }
}