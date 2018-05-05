var list = {value: 1,rest: {value: 2,rest: {value: 3,rest: null}}};

var meuArray = [1, 2, 3];

function toList(array){
    var Lista = {};
    var Aux = Lista;
    for (var i = 0; i < array.length; i++) {
        Aux.value = array[i];
        Aux.rest = {};
        Aux = Aux.rest;
    }
    return Lista;
}

console.log(toList(meuArray));