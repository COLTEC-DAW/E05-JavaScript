var linhas;
var string = "";
var readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Número de linhas: ', (answer) => {
    linhas = answer;
    for (var i=0; i<linhas; i++) {
        for (var j=0; j<(i+2); j++) {
            string += "#";
        }
        console.log(string);
        string = "";
    }

    read.close();
});