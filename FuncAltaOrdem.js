// Ordenação

function ordencao(vetor, criterio){

    for (var i = 0; i < vetor.length; i++){
        for (var j = 0; j < (vetor.length - 1); j++){
            if(criterio(vetor[j], vetor[(j+1)]) == false){
                var tmp = vetor[j];
                vetor[j] = vetor[(j+1)];
                vetor[(j+1)] = tmp;
            }
        }
    }

    return vetor;
}

var vt = [3,7,2,8,6,1,4,5];
console.log(vt);
console.log(ordencao(vt, function(a, b){ return a < b}));
console.log(ordencao(vt, function(a, b){ return a > b}));
console.log(ordencao(vt, function(a, b){

    if ((a % 2 == 0) && (b % 2 == 0)){ return a > b; }
    else if ((a % 2 != 0) && (b % 2 != 0)) { return a < b; }
    else if (a % 2 == 0){ return false ;}
    else if (a % 2 != 0){ return true ;}
}));

