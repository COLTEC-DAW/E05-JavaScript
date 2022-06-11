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
console.log(reverseArray([4,2,6,7,9,1,3,5]));
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