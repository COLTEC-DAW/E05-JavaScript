/* Atividade Do Triangulo */
var triangulo = function(NLinhas){
    for (i = 1; i <= NLinhas; i++){
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

/* Programa Diferente */
var ProgramaDif = function(){
    for(i = 0; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else{
            if(i % 3 == 0){
                console.log("Fizz");
            }
            else{
                if(i % 5 == 0){
                    console.log("Buzz");
                }
                else{
                    console.log(i);
                }
            }
        }
    }
}

//ProgramaDif();

/* Min e Max */
var MinMax = function(a,b,Action){
    return Action(a,b);
}

var Num1 = prompt("Digite o primeiro número ");
var Num2 = prompt("Digite o segundo número ");
var Acao = prompt("Digite 1 para Minimo, qualquer outro numero será maximo ");
if (Acao == 1){
    console.log("O menor número é: " + MinMax(Num1,Num2,Math.min))
}
else{
    console.log("O maior número é: " + MinMax(Num1,Num2,Math.max))
}
