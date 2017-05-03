function crescente(valor, menor){
    return valor < menor;
}

function decrescente(valor, menor){
    return valor > menor;
}

function bubblesort(array, condicao){
    var aux;
    var menor;
    for(var i = 0; i < array.length; i++){
        menor = array[i];
        for(var j = i; j < array.length; j++){
            if(condicao(array[j], menor) == true){
                aux = array[j];
                array[j] = menor;
                menor = aux;
                array[i] = menor;
            }
        }
    }
    return array;
}