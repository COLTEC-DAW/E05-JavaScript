function criptografia(frase, criterio){
    frase = frase.toLowerCase();
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

let frase = "Mathias"

console.log(criptografia(frase, function(char){
    if(char.charCodeAt(0)+4>122){
        code = char.charCodeAt(0)-122
        return String.fromCharCode(code+97);
    } else{
        return String.fromCharCode((char.charCodeAt(0)+4));
    }
}))