function bubbleSort(arr, criterio) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (criterio(arr[i], arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let array = [10, 8, 9, 6, 4, 5, 1 ,1 ,5, 6, 7];

function criterioCrescente(a, b){
    return a < b
}

function criterioDecrescente(a, b){
    return a > b
}

let newarray = bubbleSort(array, criterioCrescente);

console.log(newarray);