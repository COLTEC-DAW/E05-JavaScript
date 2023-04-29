var char = prompt("Cactere:");
var string = prompt("String:");

function countChars(frase, char)
{
    var aparece = 0;
    var tamanhostring = frase.length-1

    for(i = 0; tamanhostring > i; i++)
    {
        if(char == frase[i])
        {
            aparece++;
        }
    }
    return aparece;
}

//resultado e chamada da funcao
console.log(" O caractere " + char + " aparece " + countChars(string,char) + " vezes");
