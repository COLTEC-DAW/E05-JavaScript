var reverseArray = function(array){
    return array.reverse();
}
var array = [0,1,2,3,4,5,6];
console.log(reverseArray(array));

// ou

var reverseArray = function(array){
    var arrayRevertido = array;
    arrayRevertido.reverse();
    return arrayRevertido;
}
var array = [0,1,2,3,4,5,6];
console.log(reverseArray(array));