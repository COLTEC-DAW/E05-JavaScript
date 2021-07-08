//Trabalhando com intervalos

function range(min, max, j){

    var lista = [];

    for ( var i = min+1; i < max; i = i + j){
        
        lista.push(i);
    }
    return lista;
}

console.log(range(3,14,2));

//Revertendo um array

function reverseArray(array){

    var revertido = [];

    for (var i in array){

        revertido.push(array[(array.length - 1 - i)]);
    }
    return revertido;
}

console.log(reverseArray([1,2,'',4,'oi',6]));


//Trabalhando com listas

function toList(array){

    var lista = {};

    if (array.length > 0){

        lista.value = array[0];
        array.shift()
        if (array.length > 0){
            lista.rest = toList(array);
        }
        else {
            lista.rest = null;
        }
    }
    return lista;
}

console.log(toList([1,2,3]));


//DeepEquals

function DeepEquals(obj1, obj2){

    for (let key in obj1){
        if (obj2[key] != undefined){
            if (obj2[key] == obj1[key]){
                continue;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    return true;
}

var objeto1 = {'a':'b', 'c':'d'};
var objeto2 = {'a':'b', 'c':'d'};
var objeto3 = {'c':'d', 'a':'b'};
var objeto4 = {'a': 1 , 'b': 2 };

console.log(DeepEquals(objeto1, objeto2));
console.log(DeepEquals(objeto2, objeto3));
console.log(DeepEquals(objeto3, objeto4));