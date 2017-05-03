function criptografa(char, i){
    return String.fromCharCode(char.charCodeAt(0) - i);
}

function descriptografa(char, i){
    return String.fromCharCode(char.charCodeAt(0) + i);
}

function geral(string, criterio, valor){
    string = string.split("");
    for(var i = 0; i < string.length; i++){
        if(string[i] != " ") string[i] = criterio(string[i], valor);
    }
    return string.join("");
}