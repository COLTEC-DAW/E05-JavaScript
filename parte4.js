// Ordernar

function ordernar(items, funcao) {

    funcao(items);
}

function bubbleSortCrescente(items) {

    var length = items.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
}

function bubbleSortDecrescente(items) {

    var length = items.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] < items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
}

function bubbleSortCrescenteImpar(items) {

    var length = items.length;

    for (var i = length - 1; i >= 0; i--) {
        if (items[i] % 2 == 0) {
            items.splice(i, 1);
        }
    }

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
}

function bubbleSortDecrescentePar(items) {

    var length = items.length;

    for (var i = length - 1; i >= 0; i--) {
        if (items[i] % 2 != 0) {
            items.splice(i, 1);
        }
    }

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] < items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
}



var vetor = [3, 7, 4, 8, 9, 6, 10, 2, 1, 5];

ordernar(vetor, bubbleSortDecrescentePar);
console.log(`${vetor}`);


//cifra

function encriptar(frase, criterio) {

    var vetor = frase.split('');
    var chave = Math.floor(Math.random() * 27);

    for (var i = 0; i < vetor.length; i++) {
        vetor[i] = criterio(vetor[i], chave);
    }
    return (vetor.join(''));
}

function cifraDeCesar(caractere, chave) {
    if (caractere.charCodeAt(0) != 32) {
        if (caractere.toUpperCase().charCodeAt(0) + chave <= 90) {
            return String.fromCharCode(caractere.charCodeAt(0) + chave);
        }
        return String.fromCharCode(caractere.charCodeAt(0) + chave - 26);

    }
    return caractere;
}

texto = `Flamengo e Vasco`;
console.log(`Texto original: ${texto}`);
console.log(`Texto encriptado: ${encriptar(texto, cifraDeCesar)}`);

//trem de numero

function checaNumero(numero, formula) {

    return formula(numero);
}

function checaImpar(numero) {

    if (numero % 2 != 0) {
        return true;
    }
    return false;
}

function checaPrimo(numero) {

    if (numero > 0) {
        for (var i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }

    }
    else if (numero < 0) {
        for (var i = -2; i > numero; i--) {
            if (numero % i == 0) {
                return false;
            }
        }
    } else if (numero == -1 || numero == 1) {
        return false;
    }

    return true;
}

var num1 = 2;
var resultado1 = checaNumero(num1,checaImpar);
var resultado2 = checaNumero(num1,checaPrimo);
console.log(`O numero a ser testado é: ${num1}`);
console.log(`Se é ímpar: ${resultado1}`);
console.log(`Se é primo: ${resultado2}`);

//transformações em uma string

console.log(`Transformação de Strings\n`)

function stringTransform(frase, transformação) {

    var vetor = frase.split('');

    for (i = 0; i < vetor.length; i++) {
        vetor[i] = transformação(vetor[i])
    };

    return vetor.join('');
}

const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function vogalMaiuscula(letra) {

    if (vogais.includes(letra)) {
        return letra.toUpperCase();
    }
    return letra;
}

function consoanteMaiucula(letra) {

    if (vogais.includes(letra) != true) {
        return letra.toUpperCase();
    }
    return letra;
}

function vogalMinuscula(letra) {

    if (vogais.includes(letra)) {
        return letra.toLowerCase();
    }
    return letra;
}

function consoanteMinuscula(letra) {
    if (vogais.includes(letra) != true) return letra.toLowerCase()
    else return letra
}

var frase = (`Javascript é orientado a base de muito gambiarra! A verdadeira linguagem brasileira.`);

var frase1 = stringTransform(frase, vogalMaiuscula);
var frase2 = stringTransform(frase, consoanteMaiucula);
var frase3 = stringTransform(frase, vogalMinuscula);
var frase4 = stringTransform(frase, consoanteMinuscula);

console.log(`A frase que será transformada é: ${frase}\n`);
console.log(`Frase com as todas as vogais maiusculas: ${frase1}`)
console.log(`Frase com as todas as consoantes maiusculas: ${frase2}`);
console.log(`Frase com as todas as vogais minusculas: ${frase3}`);
console.log(`Frase com as todas as consoantes minusculas: ${frase4}`);
console.log(`\n`)


//matriz

function funcaoDeMatriz1(i, j) {

    var valor = i + j;
    return valor;
}

function funcaoDeMatriz2(i, j) {

    var valor = i * j;
    return valor;
}

function funcaoDeMatriz3(i, j) {

    var valor = i == j ? 1 : 0;
    return valor;
}

function funcaoDeMatriz4(i, j) {

    var valor = i ^ 2 / (j + 1);
    return valor;
}

function funcaoDeMatriz5(i, j) {

    var valor = i > j ? 1 : (i < j ? 5 : 0);
    return valor;
}

matriz = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

function criaMatriz(matriz, funcao) {

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = funcao(i, j)
        }
        console.log(matriz[i]);
    }
    return matriz;
}

console.log(`Resultado da função 1`);
matriz = criaMatriz(matriz, funcaoDeMatriz1);

console.log(`Resultado da função 2`);
matriz = criaMatriz(matriz, funcaoDeMatriz2);

console.log(`Resultado da função 3`)
matriz = criaMatriz(matriz, funcaoDeMatriz3);

console.log(`Resultado da função 4`);
matriz = criaMatriz(matriz, funcaoDeMatriz4);

console.log(`Resultado da função 5`);
matriz = criaMatriz(matriz, funcaoDeMatriz5);



