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
    for(let i = 0; i < (justADummyString.length)/2; i++) if(justADummyString[i] !==  justADummyString[justADummyString.length - 1 - i]) return false;
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
function mod2(number){
    return modulus(number, 2);
}

function modulus(num, mod){
    return (mod == 0 ? undefined : (num == 0 ? true : (num == mod ? true : (num > mod ? modulus(num-mod, mod) : false))));
}

/// count chars
function countChars(frase, c){
    for( let i = counter = 0; i < frase.length; counter += (c == frase[i++]));
    return counter;
}

/* Objects and Arrays */

/// range -> max min 

/// range -> max min i

/// reverse array

/// working with lists

/// deep equals

/* Higher-order Functions */

/// sorting algorithms

/// cryptography

/// number verifier 

/// transform string

/// matrix functions