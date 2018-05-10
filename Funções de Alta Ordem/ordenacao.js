
var bubbleSort = function (array, criterio){

    var aux = 0; // auxiliar na troca
    var terminou; //False se não terminou, true se terminou a ordenação

    while(!terminou){ // Enquanto não estiver totalmente ordenado
        terminou = true;
        for(i=0; i<array.length-1; i++){
           if(criterio(array[i], array[i+1])){
                aux = array[i];
                array[i] = array[i+1];
                array[i+1] = aux;
                terminou = false; // se entrar no if é porque não terminou       
            }
        }
    }
};

var crescente = function(i, j){
    return i>j;
};

var decrescente = function(i, j){
    return i<j;
}

var crescenteImpar = function(i, j){
    if (i%2 != 0 && j%2 == 0){
        return false;
    }else{
        return i>j;
    }
} 

var decrescentePar = function(i, j){
    if (i%2 == 0 && j%2 != 0){
        return false;
    }else if(i%2 != 0 && j%2 == 0){
        return true;
    }else if(i%2 == 1 && j%2 == 1){
        return false;
    }else{
        return i<j;
    }
}

vet = [5, 4, 8, 2, 1, 7];
bubbleSort(vet, crescente);
console.log(vet);
bubbleSort(vet, decrescente);
console.log(vet);
bubbleSort(vet, crescenteImpar);
console.log(vet);
bubbleSort(vet, decrescentePar);
console.log(vet);