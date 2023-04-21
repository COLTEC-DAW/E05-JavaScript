console.log("Informe quantas linhas o triangulo terá:");
const rep = prompt();

for (i = 1; i < rep; i++) 
{
    let part = "";
    for (j = 0; j <= i; j++) 
    {
        part += "#";
    }
    console.log(part);
}
