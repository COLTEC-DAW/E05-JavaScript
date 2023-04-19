let word = prompt("Qual palavra?");

word = word.toLowerCase();
let drow = word.split('').reverse().join('');
if (drow === word){
    console.log("Palíndromo");
} else {
    console.log("Não palíndromo");
}