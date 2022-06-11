/* Basic Concepts */

/// triangle
function printTriangle(numberOfRows){
    for (let line = "##"; line.length < numberOfRows  + 2; line += "#") console.log(line);
}

/// chess board
// explicação
//
// Considerando a matriz abaixo
// 0 1 0 1
// 1 0 1 0
// 0 1 0 1
// 1 0 1 0
// apenas quando i e j são pares 
// colocaremos 0, ou seja, apenas 
// quando i%2 j%2 forem iguais a 0,
// de modo que serão iguais entre si 
// também, simplificando a expressão
// para ((i%2) == (j%2);

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

/// palindrome verifier 
function isPalindrome(justADummyString){
    // removing all inconsistencies
    justADummyString = justADummyString.toLowerCase().replace(/[\W_]/g, '');
    for(let i = 0; i < (justADummyString.length)/2; i++) if(justADummyString[i] !== justADummyString[justADummyString.length - 1 - i]) return false;
    return true;
}

/// fizz buzz
function fizzBuzz(){
    for(let i = 1; i <= 100; i++) console.log(i%3 == 0 ? (i%5 == 0 ? "FizzBuzz" : "Fizz") : (i%5 == 0 ? "Buzz" : i));
}

/* Functions */

/// min & max
// min
function min(a, b){
    return a < b ? a : b
}

// max
function max(a, b){
   return a > b ? a : b
}

/// recursion
// mod2
function mod2(number){
    return modulus(number, 2);
}

// mod
function modulus(num, mod){
    return (mod == 0 ? undefined : (num == 0 ? true : (num == mod ? true : (num > mod ? modulus(num-mod, mod) : false))));
}

/// count chars
function countChars(frase, c){
    for(let i = counter = 0; i < frase.length; counter += ((c == frase[i++]) ? 1 : 0));
    return counter;
}

/* Objects and Arrays */

/// range -> min max 
function rangeWStep(min, max){
   return range(min, max, 1);
}

/// range -> min max i
function range(min, max, i){
    for(var list = [max < min ? undefined : min + 1]; list[list.length - 1] < max - 1; list.push(list[list.length - 1] + i));
    return list;
}

/// reverse array
function reverseArray(array){
    for(var reversedArray = [array[array.length - 1]]; reversedArray.length < array.length; reversedArray.push(array[array.length - 1 - reversedArray.length]));
    return reversedArray;
}

/// working with lists

// bota um JSON.stringify(toList(array))
// para ter a saida de dados bonitinha
// se não vc vai ficar parecendo um otário 
// que nem eu que fiquei uma hora debugando o 
// trem pq a saída dava rest: [Object] depois 
// de uma dada quantidade de iterações e eu achei
// que o trem tava dando errado :p
function toList(array){
    //return {value: (array.shift()), rest: (array[array.length - 1] === undefined ? null : toList(array))};
    return {value: array[0], rest: (array.shift() === undefined ? null : toList(array))};
}

// deep equals
function deepEquals(obj1, obj2){
    if (obj1 === obj2) return true;
    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;
    let keysObj1 = Object.keys(obj1), keysObj2 = Object.keys(obj2);
    if (keysObj1.length != keysObj2.length) return false;
    for (let key of keysObj1) if(!keysObj2.includes(key) || !deepEquals(obj1[key], obj2[key])) return false;
    return true;
}

/* Higher-order Functions */

/// sorting algorithms
function increasing(array, i) {
    return (array[i] > array[i + 1]) ? true : false;
}

function decreasing(array, i) {
    return (array[i] < array[i + 1]) ? true : false;
}

function increasingOdd(array, i) {
    return (array[i] > array[i + 1] && array[i] % 2 != 0) ? true : false;
}

function decreasingEven(array, i) {
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

/// cryptography
function encrypt(encryptionAlgorithm, string){
    for(var encryptedString = [encryptionAlgorithm(string[string.length - 1])]; encryptedString.length < string.length; encryptedString.push(encryptionAlgorithm(string[string.length - 1 - encryptedString.length])));
    return encryptedString;
}

/// number verifier 
let isEven = (number) => { return number % 2 != 0; }

function verifyNumber(value, verifierAlgorithm){
    return verifierAlgorithm(value);
}

/// transform string
const vowelsToUpperCase = function(char){ return (/^[aeiou]$/).test(char) ? char.toUpperCase() : char };

const consonantsToUpperCase= function(char){ return !(/^[aeiou]$/i).test(char) ? char.toUpperCase() : char };

const vowelsToLowerCase = function(char){ return (/^[AEIOU]$/).test(char) ? char.toLowerCase() :char };

const consonantsToLowerCase = function(char){ return (/^[aeiou]$/i).test(char) ? char.toLowerCase() : char };

function transformString(string, stringTransformationAlgorithm){
    return (string.split('').map(char =>stringTransformationAlgorithm(char))).join("");
}

/// matrix functions
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