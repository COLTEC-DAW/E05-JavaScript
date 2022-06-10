var word;
var reverse;
var readline = require('readline');
const read = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
);

read.question('Digite a palavra ou frase sem usar espaço: ', (answer) => 
    {
        word = answer;
        reverse = word.split("").reverse().join("");
        
        if (word === reverse) 
        {
            console.log("é um palindromo");
        } 
        
        else 
        {
            console.log("nao é um palindromo");
        }
    
        read.close();
    });