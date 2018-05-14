/**
 * Retorna Valor Minimo
 */
function min(a,b) {
    if (a > b) { 
        return b; 
    }
    else if (a < b) { 
        return a;
    }
    else {
        return console.log("Sao iguais");
    }
}
var a = prompt("Digite o valor de A: ");
var b = prompt("Digite o valor de B: ");
var numeroMinimo = min(a,b);
console.log(numeroMinimo);


/**
 * Retorna valor Maximo
 */
function max(a,b){
    if (a > b) {
        return a;
    }
    else if (a < b) {
        return b;
    }
    else {
        return console.log("Sao iguais");
    }
}
var a = prompt("Digite o valor de A");
var b = prompt("Digite o valor de B");
var numeroMaximo = max(a,b);
console.log(numeroMaximo);


/**
 * Recursao: verificar se um numero eh divisivel por 2
 */

function mod2(number) {
    if (number == 0) {
        return true;
    }
    else if (number == 1) {
        return false;
    }
    else {
        return mod2(number-2);
    }
}
var number = prompt("Digite um numero para verificar se eh divisivel por 2: ");
mod2(number);

/**
 * Recursao: Verificar se um numero eh divisivel pelo mod calculado anteriormente
 */

function mod(num, divisor) {
    if (num == 0 ) {
        return true;
    }
    else if (num < 0) {
        return false;
    }
    else {
        return mod(num-divisor,divisor);
    }
}
var num = prompt("Digite o dividendo: ");
var divisor = prompt("Digite o divisor: ");
mod(num,divisor);


/**
 * Funcao que conta o numero de caracteres de uma string
 */

function countChars(frase, c) {
    var numDeRepeticoes = 0;
    var i=0;
    for (i;i<frase.length;i++) {
        if (frase[i] == c) {
            numDeRepeticoes++;
        }
    }
    return numDeRepeticoes;
}

var frase = prompt("Digite um texto: ");
var char = prompt("Digite um caracter: ");
console.log(countChars(frase,char));