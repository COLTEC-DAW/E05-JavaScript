var minha_frase = "uma frase toda minuscula para testes";
var minha_frase2 = "OUTRA FRASE SO QUE TODA MAIUSCULA PARA TESTES";

function upper(array, char){
    
    var tmp = array;
    if(array[0] == char){
        tmp = array[0].toUpperCase() + array.slice(1);
    }else{
        for(i = 1; i < array.length; i++){
            if(array[i] == char){
                tmp = array.slice(0, i) + array[i].toUpperCase() +        array.slice(++i);
                    break;
            }
        }
    }
    return tmp;
}

function lower(array, char){
    
    var tmp = array;
    if(array[0] == char){
        tmp = array[0].toLowerCase() + array.slice(1);
    }else{
        for(i = 1; i < array.length; i++){
            if(array[i] == char){
                tmp = array.slice(0, i) + array[i].toLowerCase() +        array.slice(++i);
                    break;
            }
        }
    }
    return tmp;
}

function upperVogais(old){
    
    var vogais = "aeiou";
    var novo = old;
    for(j = 0; j < vogais.length; j++){
        for(i = 0; i < old.length; i++){
            novo = upper(novo, vogais[j]);
        }
    }
    return novo;
}

function lowerVogais(old){

    var vogais = "AEIOU";
    var novo = old;
    for(j = 0; j < vogais.length; j++){
        for(i = 0; i < old.length; i++){
            novo = lower(novo, vogais[j]);
        }
    }
    return novo;
}

function upperConsoantes(old){

    var consoantes = "bcdfghjklmnpqrstvxyz";
    var novo = old;
    for(j = 0; j < consoantes.length; j++){
        for(i = 0; i < old.length; i++){
            novo = upper(novo, consoantes[j]);
        }
    }
    return novo;
}

function lowerConsoantes(old){

    var consoantes = "BCDFGHJKLMNPQRSTVXYZ";
    var novo = old;
    for(j = 0; j < consoantes.length; j++){
        for(i = 0; i < old.length; i++){
            novo = lower(novo, consoantes[j]);
        }
    }
    return novo;
}

function changeString(frase, condicao){
    return condicao(frase);
}

console.log("Vogais maiusculas - " + changeString(minha_frase, upperVogais));
console.log("Vogais minusculas - " + changeString(minha_frase2, lowerVogais) + "\n");
console.log("Consoantes maiusculas - " + changeString(minha_frase, upperConsoantes));
console.log("Consoantes minusculas - " + changeString(minha_frase2, lowerConsoantes));