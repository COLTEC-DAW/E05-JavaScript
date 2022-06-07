let swap = (list, x, y) => {
    let aux = list[x];
    list[x] = list[y];
    list[y] = aux;
}

function partition(list, begin, end, compareFunction){
    let i = 0, k = begin;
    let pivot = end - 1;
    for (let i = begin; i < end; i++) {
       let result = compareFunction(list[i], list[pivot]);
       if(result){
          swap(list, i, k);
          k++;
       }
    }
   swap(list, pivot, k);
    return k;
}

function quickSort(list, begin, end, compareFunction){
    if(begin < end) {
        let pivot = partition(list, begin, end, compareFunction);
        quickSort(list, begin, pivot - 1, compareFunction);
        quickSort(list, pivot + 1, end, compareFunction);
    }
}
function sort(list, compareFunction){
   quickSort(list, 0, list.length, compareFunction)
}

function encrypt(string, encyptFunction){
    for (let i = 0; i < string.length; i++) {
       string[i] = encyptFunction(string[i]);
    }
}

function verify(value, verifyFunction){
    return verifyFunction(value);
}

function mapString(string, transformationFunction){
    for (let i = 0; i < string.length; i++) {
        string[i] = transformationFunction(string[i]);
    }
}

function createMatrix(operation, x, y){
    let matrix = [];
    for(let i = 0; i < x; i++){
       matrix.push([]);
       for(let j = 0; j < y; j++){
           matrix[i].push(operation(i, j));
       }
    }
    return matrix;
}
