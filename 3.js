var string = prompt("Insira uma palavra");
var j;

for (var i=0, j=string.length - 1; i<string.length; i++, j--)
{
    if (string.charAt(i) != string.charAt(j))
    {
        break;
    }
}

if (i == string.length)
    console.log ("É palíndromo");

else
    console.log ("Não é palíndromo");
