/* 
    @author: Gabriel Benvindo Begnami
    @data: 08/06/2022
    @exercise: E05 - JavaScript
    TO TEST THE CODE, JUST WRITE THE FUNCTION OF YOUR CHOICE AND IN THE COSOLE TYPE "node E05.js"
*/

// --> OPTIONS

//DrawTriangle(5);
//DrawChessBoard(20);
//isPalindrome("hannah");
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