function criptografar(frase,metodo){
    frase=frase.toLowerCase();
    return metodo(frase);
}

function cesar(frase){
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var x = 3;
    var keep = [];
    for (var i = 0; i < frase.length; i++)
        {
        if(frase[i] != ' ')
        {
            for (var j = 0; j < alfa.length; j++)
            {
                if (frase[i] == alfa[j])
                {
                    keep[i] = alfa[(j + x) % alfa.length];
                    break;
                }
            }
        }
        else
        {
            keep[i] = ' ';
        }
    }
    return keep.join("");
}
console.log(criptografar("roubei um pao",cesar));