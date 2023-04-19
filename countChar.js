function countChars(frase, c){
    return frase.split(c).length - 1;
}

let frase = prompt("Qual palavra?");
let c = prompt("Char?");

console.log(countChars(frase, c));