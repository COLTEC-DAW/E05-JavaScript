function caixaAltaVogal(string) 
{
    var textoTransformado = "";

    for (var i = 0; i < string.length; i++) 
    {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") 
        {
            textoTransformado += string.charAt(i).toUpperCase();
        } 
        else 
        {
            textoTransformado += string.charAt(i);
        }
    }
    return textoTransformado;
}

function caixaBaixaVogal(string)
{
    var textoTransformado = "";

    for (var i = 0; i < string.length; i++) 
    {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") 
        {
            textoTransformado += string.charAt(i).toLowerCase();
        } 
        else 
        {
            textoTransformado += string.charAt(i);
        }
    }
    return textoTransformado;
}


function caixaAltaConsoante(string)
{   
    var textoTransformado = "";

    for (var i = 0; i < string.length; i++)
    {
        if (string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u')
        {
            textoTransformado += string[i].toUpperCase();
        }
        else
        {
            textoTransformado += string[i];
        }
    }
    return textoTransformado;
}


function caixaBaixaConsoante(string)
{
    var textoTransformado = "";

    for (var i = 0; i < string.length; i++)
    {
        if (string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u')
        {
            textoTransformado += string[i].toLowerCase();
        }
        else
        {
            textoTransformado += string[i];
        }
    }
    return textoTransformado;

}

function mainTransforma()
{
    var texto = document.getElementById("input_transforma").value;
    
    console.log('Caixa Alta Consoante' + caixaAltaConsoante(texto));
    console.log('Caixa Baixa Consoante' + caixaBaixaConsoante(texto));
    console.log('Caixa Alta Vogal' + caixaAltaVogal(texto));
    console.log('Caixa Baixa Vogal' + caixaBaixaVogal(texto));
}