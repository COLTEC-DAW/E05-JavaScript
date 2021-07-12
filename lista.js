var listaF = function(vetor){
    for(i = 0; i <vetor.length; i++){
        var lista = {
            value: vetor[i],
            rest: lista,
        }
    }
    return lista;
}

var array = [1, 2, 3, 4, 5, 99];
console.log("Lista ai:");
console.log(listaF(array));