function DesenhandoUmTriangulo(){
 
    var tam = prompt("Digite o tamanho do triangulo:");

    for (var i = 0; i < tam; i++) {

        for (var j = 0; j <= i; j++)
            {
                console.log("#");
            }
        console.log("\n");
    }
}

DesenhandoUmTriangulo();

function xadrez (){

    var num = prompt("Digite o tamanho do xadrez");

    for (var i = 0; i < num; i++){

        for(var j = 0; j < num; j++){
            if (j % 2 == i % 2) {
                console.log("#");
            }
            else {
                console.log("");
            }
        }
        console.log('\n');
    }
} 

xadrez ();

function palindromo(){

    var frase = prompt("Digite uma frase/palavra");

    frase = frase.toLowerCase();
    frase = frase.split(' ').join('');

    var fraseContraria = frase.split('').reverse().join('');
    console.log(fraseContraria);
    console.log(frase);
    if (frase === fraseContraria) console.log("É um palindromo");
    else console.log("Não é um palindromo");
}

palindromo();

function programaDiferente(){

    for (var i = 0; i < 100; i++){

        if (i % 3 == 0 && i % 5 != 0) console.log("Fizz");
        else if (i % 5 == 0 && i % 3 != 0) console.log("Buzz");
        else if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    }
}

programaDiferente();