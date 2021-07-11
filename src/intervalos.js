var range = function(min, max, i){
    var array = [];
    var numAux = 0;

    for (var j = min+1; j < max; j++){
        if(numAux == i){
            array.push(j);
            numAux = 0;
        } else {
            numAux += 1;
        }
        
    }
    return array;
}

//main
var menor = 3;
var maior = 13;
var intervalo = 2;
console.log(range(menor, maior, intervalo)); 

/**
 * Dúvida:
 * 
 * Eu tentei colocar prompt no maior e no menor, só que estava dando erro quando 
 * comparava para ver se o menor é realmente menor, por que acontece isso?
 * Percebi que estava meio que comparando só o primeiro número, eu não sei o porquê.
 * 
 * */

