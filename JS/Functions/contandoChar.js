function countChars(frase, c){
    return frase.split(c).length - 1;
}

let frase = prompt("Frase: ");
let c = prompt("Caractere a ser contado: ");

console.log(countChars(frase, c));