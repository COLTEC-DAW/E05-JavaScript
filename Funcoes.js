// Mínimo e máximo
function max(a, b)
{
    if(a > b)
    {
        alert("O primeiro número é maior que o segundo.");
    }
    else if (a < b)
    {
        alert("O segundo número é maior que o primeiro.");
    }
    else if (a == b)
    {
        alert("Os dois números são iguais.");
    }
}

function min(a1, b1)
{
    if(a1 > b1)
    {
        alert("O primeiro número é menor que o segundo.");
    }
    else if (a1 < b1)
    {
        alert("O segundo número é menor que o primeiro.");
    }
    else if (a1 == b1)
    {
        alert("Os dois números são iguais.");
    }
}

// Recursividade
function mod2(num)
{
    mod(num,2);
}

function mod(num, modvar)
{
    if(num % modvar == 0)
    {
        alert("O primeiro número É divisível pelo segundo número.");
    }
    else
    {
        alert("O primeiro número NÂO É divisível pelo segundo número.");
    }
}

// Contando caracteres
function countChars(frase, c)
{
    var cont = 0, i;
    for(i = 0; i < frase.length; i++)
    {
        if(frase[i] == c)
        {
            cont++;
        }
    }
    console.log("A letra ", c, " apareceu ", cont, " vezes na frase.");
}