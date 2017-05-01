function mudaString(str, func){
    return func(str);
}
 
function capsVogais(str){
    var modificada = "";

    for(var i=0; i<str.length;i++){
        if(str[i].toLowerCase() == 'a'|| str[i].toLowerCase() == 'e'|| str[i].toLowerCase() == 'i'|| str[i].toLowerCase() == 'o'|| str[i].toLowerCase() == 'u'){
            modificada += str[i].toUpperCase();
        } else {
            modificada += str[i];
        }
    }
    return modificada;
}

function capsConsoantes(str){
    var modificada = "";

    for(var i=0; i<str.length;i++){
        if(!(str[i].toLowerCase() == 'a'|| str[i].toLowerCase() == 'e'|| str[i].toLowerCase() == 'i'|| str[i].toLowerCase() == 'o'|| str[i].toLowerCase() == 'u')){
            modificada += str[i].toUpperCase();
        } else {
            modificada += str[i];
        }
    }
    return modificada;
}

function baixaVogais(str){
    var modificada = "";

    for(var i=0; i<str.length;i++){
        if(str[i].toLowerCase() == 'a'|| str[i].toLowerCase() == 'e'|| str[i].toLowerCase() == 'i'|| str[i].toLowerCase() == 'o'|| str[i].toLowerCase() == 'u'){
            modificada += str[i].toLowerCase();
        } else {
            modificada += str[i];
        }
    }
    return modificada;
}

function baixaConsoantes(str){
    var modificada = "";

    for(var i=0; i<str.length;i++){
        if(!(str[i].toLowerCase() == 'a'|| str[i].toLowerCase() == 'e'|| str[i].toLowerCase() == 'i'|| str[i].toLowerCase() == 'o'|| str[i].toLowerCase() == 'u')){
            modificada += str[i].toLowerCase();
        } else {
            modificada += str[i];
        }
    }
    return modificada;
}

var str = "Hello World";

console.log(mudaString(str, capsVogais));
console.log(mudaString(str, capsConsoantes));
console.log(mudaString(str, baixaVogais));
console.log(mudaString(str, baixaConsoantes));
