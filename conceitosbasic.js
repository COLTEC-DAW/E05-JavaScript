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