function criptografia(texto, chave) 
{
    var textoCriptografado = "";
    for (var i = 0; i < texto.length; i++) 
    {
        var letra = texto.charAt(i);
        var letraCriptografada = letra;

        if (letra.match(/[a-z]/i)) 
        {
            var letraCriptografada = letra;
            var letraCriptografada = letraCriptografada.charCodeAt(0) + chave;

            if (letraCriptografada > 122)
            {
                letraCriptografada = letraCriptografada - 26;
            }

            letraCriptografada = String.fromCharCode(letraCriptografada);
        }

        textoCriptografado += letraCriptografada;
    }

    return textoCriptografado;
}

function mainCriptografar()
{
    var texto = "abcdefghijklmnopqrstuvwxyz";
    var chave = 3;
    
    console.log('texto inicial: ' + texto);  
    console.log('criptografado: ' + criptografia(texto, chave));
}

