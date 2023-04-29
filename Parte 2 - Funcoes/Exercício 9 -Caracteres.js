var char = prompt("Cactere:");
var string = prompt("String:");

function ContaCactere(string, char)
{
    var aparece = 0;
    var tamanhostring = string.length-1

    for(i = 0; tamanhostring > i; i++)
    {
        if(char == string[i])
        {
            aparece++;
        }
    }
    return aparece;
}

//resultado e chamada da funcao
console.log(" O caractere " + char + " aparece " + ContaCactere(string,char) + " vezes");
