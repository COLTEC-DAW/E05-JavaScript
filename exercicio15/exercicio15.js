function TransformaString(frase, criterio){
    frase = frase.split("");
    for(let i =0;i<frase.length;i++){
        frase[i] = criterio(frase[i])
    }
    resultado = "";
    for(let i =0;i<frase.length;i++){
        resultado += frase[i]
    }
    return resultado;
}

let resultado
let vogais = ['a', 'e', 'i', 'o', 'u']

resultado = TransformaString("mathias", function(char){
    if(vogais.indexOf(char)>-1){
        return char.toUpperCase();
    }
    return char
});

console.log(resultado)