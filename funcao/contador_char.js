function countChars(frase,len ,c)
{
    let n_vezes = 0;
    var vet_frase = frase.split("");

    for(i = 0; i < len; i++)
    {
        if (vet_frase[i] == c) n_vezes++;
    }
    return n_vezes;
}
var str = "arrivederci"
console.log(countChars(str,str.length, "r"));