function criptografa (string, criterio)
{
    return criterio(string);
}

function criptografiaCesar (frase) //feito com o deslocamento sempre igual a 3
{
    var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var deslocamento = 3;
    var criptografada = [];

    frase = frase.toLowerCase();

    for (var i=0; i < frase.length; i++)
    {
        for (var j=0; j < alfabeto.length; j++)
        {
            if (j <= 22)
            {
                if (frase.charAt(i) == " ")
                {
                    criptografada[i] = " ";
                    break;
                }

                else if (frase.charAt(i) == alfabeto[j])
                {
                    criptografada[i] = alfabeto[j+3];
                    break;
                }
            }

            else if (j == 23)
            {
                criptografada[i] = "a";
                break;
            }

            else if (j == 24)
            {
                criptografada[i] = "b";
                break;
            }

            else if (j == 25)
            {
                criptografada[i] = "c";
                break;
            }
        }
    }

    return criptografada;

}

console.log (criptografa ("Carolina Alves Linda", criptografiaCesar));