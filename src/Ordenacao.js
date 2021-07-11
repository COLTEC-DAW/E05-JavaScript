function ord(array, criterio) {
    var ordenado = array;
    for (var i = 0; i < ordenado.length; i++) {
        for (var j = 0; j < ordenado.length; j++) {
            if (criterio (ordenado[j], ordenado[j + 1]) == true){
                var aux = ordenado[j];
                ordenado[j] = ordenado[j + 1];
                ordenado[j + 1] = aux;
            }
        }
    }
	return ordenado;
}

var array = [4,8,12,9,45,87,3,16,93,65,23,74];

console.log(array);
console.log(ord(array, function(a, b) { return a > b; })); //cres
console.log(ord(array, function(a, b) { return a < b; })); //decres
console.log(ord(array, function(a, b) { 
    if(a>b & a%2 != 0){ return true; }
    else{ return false; }
}));
