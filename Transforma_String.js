function caixa_alta_v(char){
    char.toLowerCase();
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
       char = char.toUpperCase();
    }
    return char;
}
function caixa_alta_c(char){
    char.toLowerCase();
    if(char != "a" && char != "e" && char != "i" && char != "o" && char != "u"){
        char = char.toUpperCase();
    }
    return char;
}
function caixa_baixa_v(char){
    char.toUpperCase();
    if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
        char = char.toLowerCase();
    }
    return char;
}
function caixa_baixa_c(char){
    char.toUpperCase();
    if(char != "A" && char != "E" && char != "I" && char != "O" && char != "U"){
        char = char.toLowerCase();
    }
    return char;
}

function transforma_string(string, modo){
    var string2 = "";
    var aux;
    for(i = 0;i<string.length;i++){
        aux = modo(string[i]);
        string2 += aux;
    }
    console.log(string2);
}

transforma_string("AABUU", caixa_baixa_c);