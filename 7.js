function countChars (frase, c)
{
    var count = 0;

    for (var i=0; i<frase.length; i++)
    {
        if (frase.charAt(i) == c)
            count++;
    }

    return count;
}

var f = prompt ("Digite uma frase");
var caracter = prompt ("Digite um caracter");
var num = countChars (f, caracter);
console.log (num);