//Mínimo e Máximo

function min(a, b) {

    if (a < b) {
        return a;
    }
    return b;
}

function max(a, b) {

    if (a > b) {
        return a;
    }
    return b;
}

var num1 = 5;
var num2 = 10;

var min1 = min(num1, num2);
var max1 = max(num1, num2);

console.log(`O menor é: ${min1}`);
console.log(`O maior é: ${max1}`);

//Recursividade

function mod2(number) {

    if (number % 2 == 0) {
        return true;
    }
    return false;
}

function mod(num, mod) {

    if (num % mod == 0) {
        return true;
    }
    return false;
}

var num1 = prompt(`Insira um número para saber se ele é divisível por 2`);

var resultado = mod2(num1);
console.log(resultado);

var num2 = prompt(`Insira um número para ser dividido`);
var num3 = prompt(`Insira um divisor`);

var resultado2 = mod(num2, num3);

if (resultado2) {

    console.log(`${num2} é divisível por ${num3}`);
}
else {

    console.log(`${num2} não é divisível por ${num3}`);
}

//Contando Caracteres

function countChars(frase, c) {

    frase = frase.split(' ').join('');
    frase = frase.split('');


    var tamanho = frase.length;
    var contador = 0;
    for (var i = 0; i < tamanho; i++) {
        if (frase[i] == caractere) {
            contador += 1;
        }
    }
    console.log(`O caractere ` + c + ` apareceu ` + contador + ` vezes na frase`);

}

var frase1 = prompt(`Insira uma frase`);
var caractere = prompt(`Insira um caractere`);

countChars(frase1, caractere);
