/* Basic Concepts */

/// triangle
function printTriangle(numberOfRows){
    for (let line = "##"; line.length < numberOfRows  + 2; line += "#") console.log(line);
}

/// chess board

printChessBoard(8);
function printChessBoard(numberOfRows){
    let sequence = ["# # # #"];
    for(let i = 0; i < numberOfRows; i++) i%2 == 0 ? console.log(sequence.toString()) : console.log(' ' + sequence);  
}

/// palindromes verifier 

/// fizz buzz

/* Functions */

/// min & max

/// recursion

/// count chars

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