var meu_array = [3, 5, 1, 10, 4, 2, 6];

//bubble sort
function ordena(array, condicao){
    
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length - 1; j++){
            if(condicao(array[j], array[j + 1])){
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

function par_impar(array, aux){
    var novo = [];
    var j = 0;
    //aux = true - numeros pares
    //aux = false - numeros impares
    for(i = 0; i < array.length; i++){
        if(((array[i] % 2) == 0 && aux) || ((array[i] % 2) != 0 && !aux) ){
            novo[j] = array[i];
            j++;
        }
    }
    return novo;
}
//crescente
console.log(ordena(meu_array, function(a, b){
    return (a > b);
}));
//decrescente
console.log(ordena(meu_array, function(a, b){
    return (a < b);
}))

//impar crescente
console.log(ordena(par_impar(meu_array, false), function(a, b){
    return (a > b);
}));
//par decrescente
console.log(ordena(par_impar(meu_array, true), function(a, b){
    return (a < b);
}));