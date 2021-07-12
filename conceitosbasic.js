//Questão 1 - Desnhando um triângulo
function triangle(nLinhas){
    console.log("Desenhando um triângulo...")
    for(i = 0; i < nLinhas; i++){
        var hashtag = "";
        for(j = 0; j <= i ; j++){
            hashtag += "#";
        }
        console.log(hashtag);
    }   
}

var nlinhas = prompt("Qual o numero de linhas do triângulo?");
triangle(nlinhas);

//Questão 2 - Tabuleiro de xadrez
function xadrex(nLinhas){
    console.log("Desenhando um tabuleiro...");
    var hashtag ="# # # #";
    for (i = 0; i < nLinhas ; i++){
        if(!(i % 2)){
            console.log(hashtag)
        }else{
            console.log(" " + hashtag);
        }
    }
}
var nLinhas = prompt("Quantas linhas terá o tabuleiro de xadrez? ");
xadrex(nLinhas);

//Questão 3 - Palíndromo
function palindromo(Palavra){
    var inversa = Palavra.split("").reverse().join("");

    if(Palavra.toLowerCase() === inversa.toLowerCase()){
        return true;
    }else{
        return false;
    }

}

var palavra = prompt("Digite a palavra:");
var ehPalindromo = palindromo(palavra);

if(ehPalindromo == true){
    console.log("É palíndromo");
}else{
    console.log("Não é palíndromo")
}


//Questão 4 - Um programa diferente

function imprime1a100(){
    for(i = 0; i < 100; i++){
        if((i%3 == 0) &&(i%5 ==0)){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz");

        }else if(i%5 == 0){
            console.log("Buzz");
        }else{
            console.log("%d", i)
        }
    }
}

imprime1a100();


//Questão 5 - Mínimo e Máximo
function min(a, b){
    var menor = 0;

    if(a < b){
        menor = a;
    }else{
        menor = b;
    }

    return menor;
}

function max(a, b){
    var maior = 0;

    if(a > b){
        maior = a;
    }else{
        maior = b;
    }

    return maior;
}

var a = prompt("Digite o primeiro numero que deseja comparar:");
var b = prompt("Digite o segundo numero que deseja comparar:");


console.log("menor:" +  min(a,b) + "\nmaior: " + max(a,b));


//Questão 6 - Recursividade

var mod = function(num, mod){
    if (num % mod == 0){ return true; }
    else { return false; }
}

var mod2 = function(num){
    if ( num % 2 == 0) { return true; }
    else { 
        console.log(mod(num, num % 2));
        return false;
    }
}
var num = prompt("Digite o número que deseja saber se é divisível por 2:");
if(mod(num) == true){
    console.log("É divisivel por 2");
} else if (mod(num) == false){
    console.log("Não é divisivel por 2");
}

//Questão 7 - Contando caracteres
var countChars = function(frase, c){
    var qtd = 0;
    var arrayfrase = frase.split(''); 

    for (var i = 0; i < arrayfrase.length; i++){

        if(arrayfrase[i] == c){
            qtd += 1;
        }
    }
    return qtd;
}
//main
var frase = prompt("Digite uma frase: ");
var car = prompt("Digite o caracter que deseja saber quantas vezes aparece: ");
console.log(countChars(frase, car)); 





