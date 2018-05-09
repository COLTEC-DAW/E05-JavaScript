function swap (array, i, j) {
    var aux = array[i];
    array[i] = array[j];
    array[j] = aux;
    return array;
}

function bubbleSort(array, criteria) {
    do{
        var trocado = false;
        for (let index = 0; index < array.length; index++) {
            if(criteria(array[index], array[index+1])) {
                array = swap(array, index, index+1);
                trocado = true;
            }        
        }
    } while (trocado);
    
    return array;
}

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
      if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
}

var par = function (elem) {
    return elem % 2 == 0
}

var impar = function (elem) {
    return elem % 2 != 0
}

var crescente = function (elem, elem2) {
    return elem > elem2;
}

var decrescente = function (elem, elem2) {
    return elem < elem2;
}

var vet = [2,4,6,3,1,0,13,14,17,16];
vet = bubbleSort(filter(vet, par), decrescente);

console.log(vet);
