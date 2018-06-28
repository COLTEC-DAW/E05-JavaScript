var palavra = "";
var contrario = "";
var readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Palavra: ', (answer) => {
    palavra = answer;
    contrario = palavra.split("").reverse().join("");
    if (palavra === contrario) {
        console.log("É um palindromo");
    } else {
        console.log("NÃO é palindromo");
    }

    read.close();
});