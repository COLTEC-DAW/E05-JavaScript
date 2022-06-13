///JavaScript: Conceitos Básicos

// Desenhando um triângulo
function prinTriangulo(numberOfRows){
    for (let line = "##"; line.length < numberOfRows  + 2; line += "#") console.log(line);
}

function printChessBoard(numberOfRows){
    let chessBoard = "";
    for(let i = 0; i < numberOfRows; i++){
        for(let j = 0; j < numberOfRows; j++){
            chessBoard += ((i%2) == (j%2) ? " " : "#");
        }
        chessBoard += ("\n");
    }
    console.log(chessBoard);
}

// Verificando Palíndromos
function ehPalindro(justADummyString){
    // removing all inconsistencies
    justADummyString = justADummyString.parabaixo().replace(/[\W_]/g, '');
    for(let i = 0; i < (justADummyString.length)/2; i++) if(justADummyString[i] !== justADummyString[justADummyString.length - 1 - i]) return false;
    return true;
}

// Um programa diferente...
function fizzBuzz(){
    for(let i = 1; i <= 100; i++) console.log(i%3 == 0 ? (i%5 == 0 ? "FizzBuzz" : "Fizz") : (i%5 == 0 ? "Buzz" : i));
}

/// JavaScript: Funções

// Mínimo e Máximo

// mínimo
function min(a, b){
    return a < b ? a : b
}

// máximo
function max(a, b){
   return a > b ? a : b
}

// Recursividade

// mod2
function mod2(number){
    return modulo(number, 2);
}

// mod
function modulo(num, mod){
    return (mod == 0 ? undefined : (num == 0 ? true : (num == mod ? true : (num > mod ? modulo(num-mod, mod) : false))));
}

// Contando caracteres
function countCaracter(frase, c){
    for(let i = contador = 0; i < frase.length; contador += ((c == frase[i++]) ? 1 : 0));
    return contador;
}

///JavaScript: Objetos & Arrays

// Trabalhando com intervalos
// range -> min max 
function rangeWStep(min, max){
   return range(min, max, 1);
}

// range -> min max i
function range(min, max, i){
    for(var list = [max < min ? undefined : min + 1]; list[list.length - 1] < max - 1; list.push(list[list.length - 1] + i));
    return list;
}

// Revertendo um array
function reverseArray(array){
    for(var arrayReverso = [array[array.length - 1]]; arrayReverso.length < array.length; arrayReverso.push(array[array.length - 1 - arrayReverso.length]));
    return arrayReverso;
}

// Trabalhando com listas

function lista(array){
    return {value: array[0], rest: (array.shift() === undefined ? null : lista(array))};
}

// DeepEquals
function deepEquals(obj1, obj2){
    if (obj1 === obj2) return true;
    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;
    let objChave1 = Object.chaves(obj1), objChave2 = Object.chaves(obj2);
    if (objChave1.length != objChave2.length) return false;
    for (let chave of objChave1) if(!objChave2.includes(chave) || !deepEquals(obj1[chave], obj2[chave])) return false;
    return true;
}

/// JavaScript: Funções de Alta Ordem

// Ordenação
function crescente(array, i) {
    return (array[i] > array[i + 1]) ? true : false;
}

function decrescente(array, i) {
    return (array[i] < array[i + 1]) ? true : false;
}

function creascenteOdd(array, i) {
    return (array[i] > array[i + 1] && array[i] % 2 != 0) ? true : false;
}

function decrescenteEven(array, i) {
    return (array[i] < array[i + 1] && array[i] % 2 == 0) ? true : false;
}

function swap(array, i){
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
}

function bubbleSort(array, sortingCriteria){
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < array.length; i++){
            if(sortingCriteria(array, i)){
                swap(array, i);
                swapped = true;
            }
        }
    } while(swapped);
    return array;
}

// Criptografia
function encrypt(criptoAlg, string){
    for(var criptoString = [criptoAlg(string[string.length - 1])]; criptoString.length < string.length; criptoString.push(criptoAlg(string[string.length - 1 - criptoString.length])));
    return criptoString;
}

// Verificando um número 
let isEven = (number) => { return number % 2 != 0; }

function verficarNum(value, verificarAlg){
    return verificarAlg(value);
}

// Transformações em uma String
const vowelsToUpperCase = function(char){ return (/^[eoberr]$/).test(char) ? char.toUpperCase() : char };

const consonantsToUpperCase= function(char){ return !(/^[eoberr]$/i).test(char) ? char.toUpperCase() : char };

const vowelsToLowerCase = function(char){ return (/^[EOBERR]$/).test(char) ? char.toLowerCase() :char };

const consonantsToLowerCase = function(char){ return (/^[eoberr]$/i).test(char) ? char.toLowerCase() : char };

function transformString(string, stringTransformationAlgorithm){
    return (string.split('').map(char =>stringTransformationAlgorithm(char))).join("");
}

// Funções Matriciais
const sum = ((i,j) => i+j);

const sub = ((i,j) => i-j);

const mult = ((i,j) => i*j);

const equals = ((i,j) => (i == j ? 1 : 0));

const sqrtDividedByPlusOne = ((i,j) => ((i*i)/(j+1)));

const oneOrFive = ((i,j) => ( i > j ? 1 : (i < j ? 5 : 0)));

function matrixBuilder(matrixFunction, i, j){
    let matrix = [[],[]];
    for(let m = 0; m < i; m++){
        for(let n = 0; n < j; n++){
            matrix[m][n] = matrixFunction(m,n);
        }
    }
    return matrix;
}