function cifraCesar(string){
    var saida = "";
    for (var i=0; i<string.length; i++) {
        var ascii = string.charCodeAt(i);
        ascii-=3; //Deslocamento padrão
        saida = saida.concat(String.fromCharCode(ascii));
    }
    return saida; //Para maior complexidade, a cifra codifica todos os caracteres (a original deixaria espaços e pontuação intactos)
}

function criptografa(string, metodo){
    return metodo(string);
}