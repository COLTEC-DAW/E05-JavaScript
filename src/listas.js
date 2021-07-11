var toList = function(array){
    var list = {};
    var arrayRevertido = array;
    arrayRevertido.reverse();
    
    for(var i=0; i< arrayRevertido.length; i++){
        var aux = {};
        aux.value = arrayRevertido[i];
        aux.rest = list;
        list = aux;
    }
    return list;
}
var array = [0,1,2,3,4,5,6,7];
console.log(toList(array));