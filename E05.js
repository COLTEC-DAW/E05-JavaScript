/* 
    @author: Gabriel Benvindo Begnami
    @data: 08/06/2022
    @exercise: E05 - JavaScript
    TO TEST THE CODE, JUST WRITE THE FUNCTION OF YOUR CHOICE AND IN THE COSOLE TYPE "node E05.js"
*/

// --> OPTIONS

//DrawTriangle(5);
//DrawChessBoard(8);
//isPalindrome("hannah");
//FizzBuzz(100);

//console.log(min(10, 100));
//console.log(max(10, 100));
//console.log(mod2(27));
//console.log(mod(27, 9));
//console.log(countChars("africa", "a"));

//console.log(range(10, 25));
console.log(range(10, 25, 5));

//JavaScript: Conceitos Básicos

function DrawTriangle(height) {
    for(i = 0; i < height; i++) {
        let triangleLine = "";

        for(j = height - i; j <= height; j++) { triangleLine += "#"; }

        console.log(triangleLine);
    }
}

function DrawChessBoard(size) {
    let grid = Array(size);
    let chessBoard = "";

    for(row = 0; row < size; row++) {
        grid[row] = Array(size).fill(0);
        
        for(col = row % 2; col < size; col += 2) { grid[row][col] = 1; }
    }

    grid.forEach((row) => {
        row.forEach((col) => {
            chessBoard += (col == 1)? "[ ]" : "[x]";
        })
        chessBoard += "\n";
    });

    console.log(chessBoard);
}

function isPalindrome(string) {
    let response = null;
    let newString = "";

    for(char = string.length - 1; char >= 0; char--) { newString += string[char]; }

    response = newString === string? true : false;

    console.log(response);
}

function FizzBuzz(arrayLength) {
    let array = [];
    for(i = 1; i <= arrayLength; i++) { 
        let value = "";

        if(i % 3 == 0) { value += "Fizz"; }
        if(i % 5 == 0) { value += "Buzz"; }

        value.length != 0? array.push(value) : array.push(i);
    }

    array.forEach((index) => {
        console.log(index);
    });
}


//JavaScript: Funções

function min(a, b) { return a < b? a : b; }

function max(a, b) { return a >= b? a: b; }

function mod2(number) { return number % 2 == 0? true : false; }

function mod(number, mod) { return number % mod == 0? true : false; }

function countChars(frase, c) {
    return frase.split("").reduce((total, item) => {
        if(item == c) return total + 1;
        else return total;
    }, 0);
}


//JavaScript: Objetos & Arrays

//aproveitando do polimorfismo :P
function range(start, end) {
    let array = [];

    for(i = 0; i <= end - start; i++) { array[i] = start + i; }

    return array;
}
function range(start, end, pause) {
    let array = [];

    for(i = 0; i <= end - start; i += pause) { array[i] = start + (i - pause); }

    return array;
}
