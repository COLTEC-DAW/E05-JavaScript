//Conceitos Básicos

//Desenhando um triângulo
var num = prompt("Insira o número de linhas do triângulo: ");
for(var i = 1; i <= num; i++){
    for(var j = 1; j <= i; j++){
        console.log("#");
    }
}

//Tabuleiro de Xadrez
var nLinhas = prompt("Insira o número de linhas: ");
for(var i = 0; i <= nLinhas; i++){
    if(i % 2 != 0){
        console.log("# # # #\n");
    }
    else{
        console.log(" # # # #\n");
    }
}

//Verificando palíndromos
var palavra = prompt("Digite a palavra: ");
for(var i = 0; i < palavra.length / 2; i++){
    if(palavra[i] != palavra[palavra.length - i - 1]){
        var status = false;
    }
    else{
        status = true;
    }
}
if(status == true){
    alert("É palíndromo");
}
else{
    alert("Não é palíndromo");
}

//Um programa diferente
for(var i = 1; i <= 100; i++){
    if((i%3 == 0) & (i%5 == 0)){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}