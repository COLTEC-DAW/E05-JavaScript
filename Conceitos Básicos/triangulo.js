var lines;
var string = "";
var readline = require('readline');
const read = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
);

read.question('digite o numero de linhas desejado: ', (num) => 
{
    lines = num;
    for (var i=0; i<lines; i++) 
    {
        for (var j=0; j<(i+2); j++) 
        {
            string += "#"
        }
        console.log(string)
        string = ""
    }

    read.close()
})