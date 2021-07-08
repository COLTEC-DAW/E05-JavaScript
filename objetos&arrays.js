//Trabalhando com intervalos
function range(min, max){
    var vetor = [];
    for(var i = min; i <= max; i++){
        vetor.push(i);
    }
    return vetor;
}

function range(min, max, intervalo){
    var vetor = [];
    for(var i = min; i <= max; i+=intervalo){
        vetor.push(i);
    }
    return vetor;
}

//Revertendo um array
function reverseArray(array){
    return array.reverse();
}

//Trabalhando com listas
function toList(array){
    var lista = null;
    
    for(var i = 0; i < array.length; i++){
        var objeto = {};
        objeto.value = array[i];
        objeto.rest = lista;
        lista = objeto;
    }
    return lista;
}

//DeepEquals
function deepEquals(obj1, obj2){
    var temPropriedade;
    for(var i in obj1){
        temPropriedade = true;
        for(var j in obj2){
            temPropriedade = false;
            if(i == j){
                temPropriedade = true;
                break;
            }
        }
        if(!temPropriedade)break;
    }
    return temPropriedade;
}