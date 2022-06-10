/* 
    @author: Gabriel Benvindo Begnami
    @data: 08/06/2022
    @exercise: E05 - JavaScript
    TO TEST THE CODE, JUST WRITE THE FUNCTION OF YOUR CHOICE AND IN THE COSOLE TYPE "node E05.js"
*/

const ASC_FIRST_CHAR_NUMBER = 65;
const GO_FOWARD = 1;
const ALPHABET_SIZE = 26;

const isPrime = (number) => {
    for(i = 2; i < number; i++) { if(number % i == 0) { return false; } }

    return true;
};

const isEven = (number) => { return number % 2 == 0; };

const UpperCaseVowel = (x) => { 
    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) { return  String.fromCharCode(x.charCodeAt() - 32); }
    else { return x; }
};

const UpperCaseConsonant = (x) => { 
    if(x != "a" && x != "e" && x != "i" && x != "o" && x != "u" && x != "A" && x != "E" && x != "I" && x != "O" && x != "U" ) { return String.fromCharCode(x.charCodeAt() - 32); }
    else { return x; }
};
const LowerCaseVowel = (x) => { 
    if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" ) { return String.fromCharCode(x.charCodeAt() + 32); }
    else { return x; }
};
const LowerCaseConsonant = (x) => { 
    if(x != "a" && x != "e" && x != "i" && x != "o" && x != "u" && x != "A" && x != "E" && x != "I" && x != "O" && x != "U" ) { return String.fromCharCode(x.charCodeAt() + 32);  }
};

// --> OPTIONS

//DrawTriangle(5);
//DrawChessBoard(20);
//isPalindrome("Gabriel"); // hannah
//FizzBuzz(100);

//console.log(min(10, 100));
//console.log(max(10, 100));
//console.log(mod2(27)); 
//console.log(mod(27, 9));
//console.log(countChars("africa", "a"));

//console.log(range(10, 25));
//console.log(rangeWithBreak(10, 25, 5));
//console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//console.log(toList([1, 2, 3, 4, 5]));
//console.log(deepEquals({ name: "Gabriel", years: "17", favoriteFood: "sushi" }, { name: "Ullas", years: "18", favoriteFood: "Bandex" }))

//console.log(bubbleSort([2, 1, 5, 4, 3], (a, b) => { return a > b; }, isEven))
//console.log(encryptString("ABACATE", (char) => { return String.fromCharCode(((char.charCodeAt() - ASC_FIRST_CHAR_NUMBER + GO_FOWARD) % ALPHABET_SIZE) + ASC_FIRST_CHAR_NUMBER); }));
//console.log(testNumber(29, isPrime));
//console.log(transformString("Aurora", UpperCaseVowel));
//console.log(makeGrid(6, 6, (i, j) => { return i + j; }));

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

function max(a, b) { return a > b? a : b; }

function mod2(number) { return number % 2 == 0; }

function mod(number, mod) { return number % mod == 0; }

function countChars(frase, c) {
    return frase.split("").reduce((total, item) => {
        if(item == c) return total + 1;
        else return total;
    }, 0);
}


//JavaScript: Objetos & Arrays

function range(start, end) {
    let array = [];

    for(i = 0; i <= end - start; i++) { array[i] = start + i; }

    return array;
}
function rangeWithBreak(start, end, pause) {
    let array = Array(end - start).fill("-");
    let counter = 0;

    for(i = 0; i <= end - start; i += (pause + 1)) { 
        array[i] = start + (i - counter * pause); 
        counter++;
    }

    return array;
}

function reverseArray(array) {
    let newArray = [];

    for(i = array.length - 1; i >= 0; i--) { newArray.push(array[[i]]); }

    return newArray;
}

function toList(array) {
    let list = null;

    for(i = 0; i < array.length; i++) {
        let elem = {
            value: array[i],
            next: null
        }

        if(list == null) { list = elem; }
        else {
            let aux = list;

            while(aux.next != null) { aux = aux.next; }

            aux.next = elem;
        }
    }

    //Opa, fesso! Converti a lista em uma string para aparecer por completo no console. Por algum motivo quando eu retorno apenas a lista em dado momento o "next" recebe um [object]
    return JSON.stringify(list);
}

function deepEquals(obj1, obj2) { 
    return (Object.keys(obj1).length === Object.keys(Object.assign(obj1, obj2)).length)? true : false;
}


//JavaScript: Funções de Alta Ordem

function bubbleSort(array, order, test) {
    for(i = 0; i < array.length; i++) {
        if(test(array[i])) array.splice(i, 1);

        for(j = 0; j < array.length; j++) {
            if(order(array[j], array[j + 1])) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    return array;
}

function encryptString(string, standard) {
    return string.split("").map(char => standard(char));
}

function testNumber(number, test) {
    return test(number);
}

function transformString(string, tramsformer) {
    return (string.split("").map(char => tramsformer(char))).join("");
}

function makeGrid(rows, columns, matricialFunction) {
    let grid = Array(rows);

    for(i = 0; i < rows; i++) {
        grid[i] = Array(columns); 

        for(j = 0; j < columns; j++) {
            grid[i][j] = matricialFunction(i, j);
        }
    }

    return grid;
}