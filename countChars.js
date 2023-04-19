function countChars(frase, c){
    var i = 0;
    for (let j = 0; j < frase.length; j++) {
        if(frase[j] == c)
        i++;
    }
    return i;
}

let a = prompt("Frase: ");
let b = prompt("Letra: ");

console.log(countChars(a, b));
