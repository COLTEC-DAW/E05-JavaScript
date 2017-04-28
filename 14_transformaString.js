function ehVogal(letra){
    return (letra == 'a'||letra == 'A'||letra == 'e'||letra == 'E'||letra == 'i'||letra == 'I'||letra == 'o'||letra == 'O'||letra == 'u'||letra == 'U');
}

function vogalUp(string){
    for(var i=0; i<string.length; i++){
        if (ehVogal(string[i])) string[i] = string[i].toUpperCase(); 
    }
    console.log(string);
    return string;
}

function transformaString(string, metodo){
    return metodo(string);
}