function reverseArray(array){
    var aux;
    for (var i= 0; i<(array.length)/2; i++){
        aux = array[i];
        array[i] = array[(array.length)-i-1];
        array[array.length-i-1] = aux;
    }
    return array;
}