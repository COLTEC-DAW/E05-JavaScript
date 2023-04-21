// Imprime um meio triangulo de #
function triangulo() {
    let nLinhas = prompt("Digite o numero de linhas: ");
    let char = "#";
    let linha = char;

    // Imprime a linha e adiciona um char a cada linha
    for(i = 1; i <= nLinhas; i++) {
        console.log(linha);
        linha = linha + char;
    }
}

// Função que imprime a quantidade pedida do xadrez
function xadrez() {
    let nLinhas = prompt("Digite o numero de linhas: ");

    // Imprime com o padrão de xadrez
    for(i = 1; i <= nLinhas; i++) {
        let linhaAtual;

        if(i % 2 == 0) {
            linhaAtual = " # # # #";
        } else {
            linhaAtual = "# # # # ";
        }
        console.log(linhaAtual);
    }
}

function palindromo() {
    let palavra = prompt("Digite uma palavra para verificar se é um palindromo: ");
    let posReverse = 0;
    let reverse = [];

    // Passa o array invertido para "reverse["
    for(i = palavra.length - 1; i >=0; i--) {
        reverse[posReverse] = palavra[i];
        posReverse++;
    }
    
    // Transforma o array em string
    let strReverse = reverse.join('');

    // Compara, se for igual é um palindromo
    if(strReverse == palavra) {
        console.log("É um palindromo");
    } else {
        console.log("Não é um palindromo");
    }
}

function fizzBuzz() {
    let fizz = 3;
    let buzz = 5;
    let tot = 100;

    // Printa ou o numero (1 a 100) ou fizz, buzz, ou fizzbuzz, de acordo com o indice atual
    for(i = 1; i <= tot; i++) {
        if((i % buzz) == 0 && (i % fizz) == 0) {
            console.log("FizzBuzz");
        }
        else if((i % fizz) == 0) {
            console.log("Fizz");
        } 
        else if((i % buzz) == 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }
}

/* ----- Testes ----- */
function execute() {
    do {
        var ex = parseInt(prompt("Escolha um exercicio: \n1.Triangulo\n2.Xadrez\n3.Palindromo\n4.FizzBuzz\n0.Finalizar"));

        switch(ex) {
            case 1:
                console.log("\n--- Triangulo ---");
                triangulo();
                break;
            case 2:
                console.log("\n--- Xadrez ---");
                xadrez();
                break;
            case 3:
                console.log("\n--- Palindromo ---");
                palindromo();
                break;
            case 4:
                console.log("\n--- FizzBuzz ---");
                fizzBuzz();
                break;
            case 0:
                break;
            default:
                console.log("Valor invalido: " + ex);
        }
    } while(ex != 0);
}

execute();