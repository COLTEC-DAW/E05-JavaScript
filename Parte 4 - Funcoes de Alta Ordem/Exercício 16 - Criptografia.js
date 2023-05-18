function cifraCesar(frase, criterio)
{
    var criptografada = "";
    var tmp = frase.toLowerCase();
    
    for(i = 0; i < frase.length; i++)
    {
        var caractere = tmp.charCodeAt(i);
        if (caractere >= 65 && caractere <= 90)
        {   criptografada += String.fromCharCode((caractere - 65 + criterio) % 26 + 65);    }
        
        else if (caractere >= 97 && caractere <= 122) 
        {   criptografada += String.fromCharCode((caractere - 97 + criterio) % 26 + 97);    }
        
        else {  criptografada += tmp.charAt(i); }
    }

    return criptografada;
}

var frase = "Teste para criptografia";
var criterio = 3;
console.log("Frase: "+ frase);
console.log("Frase Criptografada: " + cifraCesar(frase, criterio));