let swap = (list, x, y) => {
    let aux = list[x];
    list[x] = list[y];
    list[y] = aux;
}

function partition(list, begin, end, compareFunction){
    let i = 0, k = begin;
    let pivot = end - 1;
    for (i = begin; i < end; i++) {
       let result = compareFunction(list[i], list[pivot]);
       if(result){
          swap(list, i, k);
          k++;
       }
    }
   swap(list, pivot, k);
    return k;
}

function quickSort(list, begin, end, compareFunction){
    if(begin < end) {
        let pivot = partition(list, begin, end, compareFunction);
        quickSort(list, begin, pivot, compareFunction);
        quickSort(list, pivot + 1, end, compareFunction);
    }
}

let isBigger = (x, y) => {return x > y};
function sort(list, compareFunction){
   quickSort(list, 0, list.length, compareFunction)
}

/*
let list = [0,3,5,-1,7,8,9,1];
sort(list,isBigger)
console.log(list);
*/

let getNextChar = (char) => {
    if (char === 'z') {
        return 'a';
    }

    if (char === 'Z') {
        return 'A';
    }

    return String.fromCharCode(char.charCodeAt(0) + 1);
}

const shift = 2;
let ceaserCypher = (char) => {
    for(let i = 0; i < shift; i++){
        char = getNextChar(char);
    }
    return  char
}
function encrypt(string, encryptFunction){
    let encryptedString = "";
    for (let i = 0; i < string.length; i++) {
       encryptedString += encryptFunction(string[i]);
    }
    return encryptedString;
}
//console.log(encrypt("abcd", ceaserCypher));

let isEven = (number) => { return number % 2 != 0; }
function verify(value, verifyFunction){
    return verifyFunction(value);
}
//console.log(verify(10, isEven));

let transformation = (char) => {
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return char.toUpperCase();
    }
    else return char;
}
function mapString(string, transformationFunction){
    let transformatedString = "";
    for (let i = 0; i < string.length; i++) {
        transformatedString += transformationFunction(string[i]);
    }
    return transformatedString;
}
//console.log(mapString("virginia", transformation));

let sum = (x,y) => {return x + y;}
function createMatrix(operation, x, y){
    let matrix = [];
    for(let i = 0; i < x; i++){
       matrix.push([]);
       for(let j = 0; j < y; j++){
           matrix[i].push(operation(i, j));
       }
    }
    return matrix;
}
//console.log(createMatrix(sum, 4, 4));
