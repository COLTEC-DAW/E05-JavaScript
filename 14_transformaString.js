function ehVogal(letra){
    return (letra == 'a'||letra == 'A'||letra == 'e'||letra == 'E'||letra == 'i'||letra == 'I'||letra == 'o'||letra == 'O'||letra == 'u'||letra == 'U');
}

function vogalUp(string){
    var saida = "";
    for(var i=0; i<string.length; i++){
        if (ehVogal(string[i])) saida = saida.concat(string[i].toUpperCase());
        else saida = saida.concat(string[i]); 
    }
    console.log(string);
    return saida;
}

function vogalLow(string){
    var saida = "";
    for(var i=0; i<string.length; i++){
        if (ehVogal(string[i])) saida = saida.concat(string[i].toLowerCase());
        else saida = saida.concat(string[i]); 
    }
    console.log(string);
    return saida;
}

function consoanteUp(string){
    var saida = "";
    for(var i=0; i<string.length; i++){
        if (!(ehVogal(string[i]))) saida = saida.concat(string[i].toUpperCase());
        else saida = saida.concat(string[i]); 
    }
    console.log(string);
    return saida;
}

function consoanteLow(string){
    var saida = "";
    for(var i=0; i<string.length; i++){
        if (!(ehVogal(string[i]))) saida = saida.concat(string[i].toLowerCase());
        else saida = saida.concat(string[i]); 
    }
    console.log(string);
    return saida;
}

function transformaString(string, metodo){
    return metodo(string);
}