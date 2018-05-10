
/* Desenho do triângulo e do xadrez */

var desenho = function (f, lines){
    var res = "";
    for (var i=1; i<=lines; i++){
        res = f(lines, i);
        console.log(res);
        res = "";
    }
}

var triangulo = function (lines, i) {
    var res = "";
    
    for (var j=0; j < i; j++){
        res += "#";
    }
    return res;
};

var xadrez = function (lines, i) {
    if (i % 2 == 0){
        return " # # # #";
    }else{
        return "# # # #";
    }
    
};

/* Verifica se é palíndromo */
var verifica = function(palavra){
    var backwards = "";
    for (i=palavra.length-1; i>-1; i--){
        backwards += palavra.charAt(i);
    }
    if(palavra == backwards){ // Em js pode-se usar '==' para comparar strings
        return true;
    }else{
        return false;
    }
};

/* Programa diferente */
var BuzzFizz = function name() {
    for (var i=1 ; i<=100; i++){
        if (i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }else if (i%3 === 0){
            console.log("Fizz");
        }else if (i%5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }   
}

linhas = prompt("Digite o numero de linhas: "); // números de linha do triângulo e do tabuleiro

desenho(triangulo, linhas); // Desenho do triângulo

desenho(xadrez, linhas); // Desenho do xadrez

/* Verifica se é palíndromo */
var palavra = prompt("Digite uma palavra: ");
if (verifica(palavra)){
    console.log("É palíndromo");
 }else{
    console.log("Não é palíndromo");
 } 

BuzzFizz(); // Executa o "programa diferente"
