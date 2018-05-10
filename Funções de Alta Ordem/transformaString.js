var transforma = function(str, transformacao){
    var char = '';
    for (var i=0; i<str.length; i++){
        char = str.charAt(i); 
        str = str.replace(char, transformacao(char));
    }
    return str;
}

var tUpperVogais = function(char){
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        char = char.toUpperCase();
    }
    return char;
}


var tLowerVogais = function(char){
    if (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
        char = char.toLowerCase();
    }
    return char;
}


var tUpperConsoantes = function(char){
    if (char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u'){
        char = char.toUpperCase();
    }
    return char;
}

var tLowerConsoantes = function(char){
    if (char != 'A' && char != 'E' && char != 'I' && char != 'O' && char != 'U'){
        char = char.toLowerCase();
    }
    return char;
} 


var string = "Hello World";
console.log(transforma(string, tUpperVogais));
console.log(transforma(string, tLowerVogais));
console.log(transforma(string, tUpperConsoantes));
console.log(transforma(string, tLowerConsoantes));
