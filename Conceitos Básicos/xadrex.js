var lado;
var bool = false;
var string = "";
var readline = require('readline');
const read = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
);

read.question('Digite um numero referente ao tamanho do lado: ', (num) => 
{
    lado = num;
    for (var i=0; i<lado; i++) 
    {
        for (var j=0; j<lado; j++) 
        {
            if (bool) 
            {
                string += " ";
            } 
            
            else 
            {
                string += "#";
            }
            
            bool = !bool;
        }

        console.log(string);
        string = "";

        if (lado % 2 == 0) 
        {
            bool = !bool;
        }
    }

    read.close();
});