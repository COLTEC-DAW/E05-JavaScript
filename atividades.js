
//JavaScript: Conceitos Básicos
//Atividade Desenhando Triangulo
function triangulo(nLinhas){
    console.log("****Desenhando um triângulo****")
    for(i = 0; i < nLinhas; i++){
        var jogoDaVelha = "";
        for(j = 0; j <= i ; j++){
            jogoDaVelha += "#";
        }
        console.log(jogoDaVelha);
    }   
}
//var nLinhas = prompt("Desenhando um triangulo - Quantas linhas terá o triangulo? ");
//triangulo(nLinhas);

function xadrex(nLinhas){
    console.log("Desenhando um tabuleiro");
    var jogoDaVelha ="# # # #";
    for (i = 0; i < nLinhas ; i++){
        if(!(i % 2)){
            console.log(jogoDaVelha);
        }else{
            console.log(" " + jogoDaVelha);
        }
    }
}
//var nLinhas = prompt("Desenhando um tabuleiro - Quantas linhas terá o tabuleiro? ");
//xadrex(nLinhas);

function ehPalindromo(palavra){
    //separa a string por "" para inverter os caracteres usando o reverse, e depois usa join para reagrupar sem os ""
    var clone = palavra.split("").reverse().join("");
    
    //Transforma as strings em minusculas para que não haja erro na hora de comparar
    if(palavra.toLowerCase() === clone.toLowerCase()){
        console.log("A palavra %s é um Palíndromo",palavra);
    }else{
        console.log("A palavra %s não é um Palíndromo",palavra);
    }

}

//var palavra = prompt("Digite uma palavra para conferir se ela é um Palíndromo: ")
//ehPalindromo(palavra)

function imprimeNumeros(number){
    for(i = 0; i <= number; i++){
        if(i % 3 == 0 && i % 5 == 0){
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
}
//var number = 100;
//imprimeNumeros(number);

// **************************************************************************************
//JavaScript: Funções

function min(a,b){
    return Math.min(a,b);
}
function max(a,b){
    return Math.max(a,b);
}

//var number1 = prompt("Digite o primeiro número: ");
//var number2 = prompt("Digite o segundo número: ")
//console.log("O menor número entre os dois é: " + min(number1,number2));
//console.log("O maior número entre os dois é: " + max(number1,number2))

// Recursividade

function mod2(number){
    return (number % 2 == 0)
}

function mod(number, mod){
    return (number % mod == 0)
}

//Conta caracteres

function contaCaracteres(frase,c){
    var contador = 0;
    frase = frase.split('');
    for(i = 0;i < frase.length; i++){
        if(frase[i] == c){
            contador++;
        }
    }
    return contador;
}

function range(min,max,variacao){
    var intervalo = [];
    for(i = (min + 1); i < max; i+=variacao){
        intervalo.push(i);
    }
    return intervalo;
}

function reverseArray(array){
    reversedArray = array.reverse();
    return reversedArray;
}

function toList(array){
    var list = null;

    for(i = 0; i < array.length;i++){
        var obj = {};
        obj.value = array[i];
        obj.rest = list;
        list = obj;
    }
    return list;
}

var bolo = ["ovo","banana","trigo","leite","fermento"]
var teste = toList(bolo)

var deepEquals = (a, b) => {
    if(a === b){
        return true;
    }   else if (a && b && typeof a === 'object' && typeof b === 'object' && Object.keys(a).length === Object.keys(b).length){
        if(Array.isArray(a) === Array.isArray(b)){
            for(key in a){
                if(key in b){
                    if(!deepEquals(a[key],b[key])){
                        return false;
                    }
                }   else{
                    return false;
                }
                return true;
            }
        }    
    }
    return false;
};

var bubbleSort = (inputArr,criterio) => {
    var len = inputArr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (criterio(inputArr[i],inputArr[i + 1])) {
                var tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

var crescente = (a,b) => {return a > b};
var decrescente = (a,b) => {return a < b};
var crescenteImpar = (a,b) => {
    if(a % 2 !==0 && b % 2 !==0){
        return a > b;
    }else if( a % 2 !== 0 && b % 2 === 0){
        return false;
    }else if(a % 2 === 0 && b % 2 !== 0){
        return true;
    }else {
        return a > b;
    }
};
var decrescentePar = (a,b) => {
    if(a % 2 ===0 && b % 2 ===0){
        return a < b;
    }else if( a % 2 === 0 && b % 2 !== 0){
        return false;
    }else if(a % 2 !== 0 && b % 2 === 0){
        return true;
    }else {
        return a < b;
    }
};
//testes
var arr = [2,5,6,9,7,21,10];
console.log("Ordem Crescente: " + bubbleSort(arr,crescente));
console.log("Ordem Decrescente: " + bubbleSort(arr,decrescente));
console.log("Ordem Crescente Ímpar: " + bubbleSort(arr,crescenteImpar));
console.log("Ordem Decrescente Par: " + bubbleSort(arr,decrescentePar));

function criptografia(frase,metodo){
    frase = frase.split('');
    var codificado = [];
    for(letra of frase){
        codificado.push(metodo(letra));
    }
    return frase = codificado.join('').replaceAll("="," ");
}

function cifraCesar(letra){
    var codASC = letra.toUpperCase().charCodeAt(0);
    const primeiraLetraASC = 65;
    const rotacao = 3;
    const tamanhoAlfabeto = 26;
    var ASCCriptografada = (((codASC - primeiraLetraASC + rotacao) % tamanhoAlfabeto) + primeiraLetraASC);
    return letraCriptografada = String.fromCharCode(ASCCriptografada);
}

var testeCifraCesar = "a ligeira raposa marrom saltou sobre o cachorro cansado";
//resultado esperado com a rotação sendo 3: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR
console.log("Resultado Criptografia: " + criptografia(testeCifraCesar,cifraCesar));

var verificaNumero = (a,metodo) => metodo(a);
var ehPar = a => a % 2 === 0;
var ehImpar = a => a % 2 !== 0;
var ehPrimo = a => {
    var divisores = 0;
    for(i = 1; i <= a; i++){
        if(a % i === 0){
            divisores++;
        }
    }
    if(divisores === 2){
        return true
    }else{
        return false;
    }
}
console.log(verificaNumero(27,ehPrimo))//false
console.log(verificaNumero(17,ehPrimo))//true
console.log(verificaNumero(4,ehPar))//true
console.log(verificaNumero(5,ehPar))//false
console.log(verificaNumero(2,ehImpar))//false
console.log(verificaNumero(13,ehImpar))//true