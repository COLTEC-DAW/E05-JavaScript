function DesenhandoUmTriangulo() {

    var tamanho = prompt("Digite o tamanho do triangulo:");

    for (var i = 0; i < tamanho; i++) {

        for (var j = 0; j <= i; j++) {
            console.log("#");
        }
        console.log("\n");
    }
}

DesenhandoUmTriangulo();

function DesenhandoUmXadrez() {

    var linhas = prompt("Digite a quantidade de linhas do xadrez:");

    for (var i = 0; i < linhas; i++) {

        if (i % 2 == 0) {
            console.log("# # # # ");
        }
        else {
            console.log(" # # # #");
        }
        console.log("\n");
    }
}

DesenhandoUmXadrez();

function VerificandoPalindromo() {

    var palavra = prompt("Digite uma palavra ou uma frase");

    palavra = palavra.toUpperCase();
    palavra = palavra.split(' ').join('');

    var palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida) {
        console.log("É um palindromo");
    }
    else {
        console.log("Não é um palindromo");
    }

    console.log("A palavra/frase invertida:" + palavraInvertida);
    console.log("A palavra/frase original:" + palavra);
}

VerificandoPalindromo();

function FizzBuzz() {

    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

FizzBuzz();