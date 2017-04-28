function transformaString (string, criterio)
{
    return criterio(string);
}

function caixaAltaVogais (frase)
{
    var nova = "";

    frase = frase.toLowerCase();

    for (var i=0; i<frase.length; i++)
    {
        if (frase.charAt(i) == "a" || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o' || frase.charAt(i) == 'u')
            nova += frase[i].toUpperCase();
        else
            nova += frase[i];
    }
    return nova;
}

function caixaAltaConsoantes (frase)
{
    var nova = "";

    frase = frase.toLowerCase();

    for (var i=0; i<frase.length; i++)
    {
        if (frase.charAt(i) == "a" || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o' || frase.charAt(i) == 'u')
            nova += frase[i];
        else
            nova += frase[i].toUpperCase();
    }
    return nova;
}

function caixaBaixaVogais (frase)
{
    var nova = "";

    frase = frase.toUpperCase();

    for (var i=0; i<frase.length; i++)
    {
        if (frase.charAt(i) == "A" || frase.charAt(i) == 'E' || frase.charAt(i) == 'I' || frase.charAt(i) == 'O' || frase.charAt(i) == 'U')
            nova += frase[i].toLowerCase();
        else
            nova += frase[i];
    }
    return nova;
}

function caixaBaixaConsoantes (frase)
{
    var nova = "";

    frase = frase.toUpperCase();

    for (var i=0; i<frase.length; i++)
    {
        if (frase.charAt(i) == "A" || frase.charAt(i) == 'E' || frase.charAt(i) == 'I' || frase.charAt(i) == 'O' || frase.charAt(i) == 'U')
            nova += frase[i];
        else
            nova += frase[i].toLowerCase();
    }
    return nova;
}

console.log (transformaString ("Carolina Alves", caixaAltaVogais));
console.log (transformaString ("Carolina Alves", caixaAltaConsoantes));
console.log (transformaString ("Carolina Alves", caixaBaixaConsoantes));
console.log (transformaString ("Carolina Alves", caixaBaixaVogais));